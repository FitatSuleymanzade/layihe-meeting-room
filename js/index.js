
document.addEventListener("DOMContentLoaded", function () {
  
    var meetingImg = document.querySelector(".meetingImg");
    var imgElement = meetingImg.querySelector("img");

 
    var initialPosition = -imgElement.clientWidth / 6;

  
    imgElement.style.transform = "translateX(" + initialPosition + "px)";

    
    setTimeout(function() {
        imgElement.style.transform = "translateX(0)";
    }, 700); 
});









document.addEventListener("DOMContentLoaded", function () {
  
    var imgElements = document.querySelectorAll(".workplaceImg img");

  
    imgElements.forEach(function(imgElement) {
        imgElement.addEventListener("mouseover", function() {
        
            imgElement.style.transform = "translateY(-10px)";
        });

        imgElement.addEventListener("mouseout", function() {
         
            imgElement.style.transform = "translateY(0)";
        });
    });
});






document.addEventListener("DOMContentLoaded", function () {
  
    var imgElements = document.querySelectorAll(".meetingRow img");

    
    imgElements.forEach(function(imgElement) {
        imgElement.addEventListener("mouseenter", function() {
       
            imgElement.style.transform = "translateX(-9px)";
        });

        imgElement.addEventListener("mouseleave", function() {
            
            imgElement.style.transform = "translateX(0)";
        });
    });
});















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
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        });
    } else {
        alert('Zəhmət olmasa xanaları doldurun');
    }
});


 















