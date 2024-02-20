document.getElementById('sendMessage').addEventListener('click', function () {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const questionInput = document.getElementById('question');
    const confirmationMessage = document.getElementById('confirmationMessage');

    // Tüm inputlar doldurulmuşsa devam et
    if (nameInput.value && emailInput.value && phoneInput.value && questionInput.value) {
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            question: questionInput.value,
        };

        // Fetch ile POST isteği
        fetch('https://655c30a1ab37729791aa03c7.mockapi.io/fi/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);

            // Mesaj gönderildikten sonra inputları temizle
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            questionInput.value = '';

            // Bilgi mesajını göster
            confirmationMessage.style.display = 'block';
        })
       
    } else {
        alert('Zəhmət olmasa xanaları doldurun');
    }
});











const faqData = [
    { question: "How do I book a meeting room?", answer: "To book a meeting room, navigate to the 'Book a Room' section and follow the instructions." },
    { question: "Can I modify an existing booking?", answer: "Yes, you can modify your booking by logging into your account and accessing the 'My Bookings' section." },
    { question: "How do I reset my password?", answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions sent to your email." },
    { question: "Is there a mobile app available?", answer: "Yes, we have a mobile app available for both iOS and Android platforms. You can download it from the App Store or Google Play." },
    { question: "How can I contact customer support?", answer: "You can contact our customer support team by sending an email to support@example.com or by calling our toll-free number during business hours." },
    { question: "What are the system requirements?", answer: "The system requires a modern web browser and a stable internet connection. Please make sure your browser is up to date." },

    // Add more FAQ items as needed
];

// Function to render FAQ items
function renderFAQItems() {
    const accordion = document.getElementById("faqAccordion");

    faqData.forEach((item, index) => {
        const itemID = `faqItem${index}`;
        const accordionItem = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="${itemID}Header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${itemID}" aria-expanded="true" aria-controls="${itemID}">
                        ${item.question}
                    </button>
                </h2>
                <div id="${itemID}" class="accordion-collapse collapse" aria-labelledby="${itemID}Header" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        ${item.answer}
                    </div>
                </div>
            </div>
        `;

        accordion.innerHTML += accordionItem;
    });
}

// Call the function to render FAQ items when the page is loaded
document.addEventListener("DOMContentLoaded", renderFAQItems);










