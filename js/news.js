document.getElementById('sendMessage').addEventListener('click', function () {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const questionInput = document.getElementById('question');
    const confirmationMessage = document.getElementById('confirmationMessage');

  
    if (nameInput.value && emailInput.value && phoneInput.value && questionInput.value) {
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            question: questionInput.value,
        };

        
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

           
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            questionInput.value = '';

            confirmationMessage.style.display = 'block';
        })
      
    } else {
        alert('Zəhmət olmasa xanaları doldurun');
    }
});


 







const newsproduct = document.getElementById('newsproduct');
let products = [];

function getProducts() {
    newsproduct.innerHTML = "";
    axios.get('http://localhost:3000/posts')
        .then(res => {
            products = res.data;
            products.forEach(item => {
                let box = document.createElement('div');
                box.className = 'col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-4';
                box.innerHTML = `
                    <div class="boxproducts">
                        <img src="${item.imageUrl}" alt="" class="img-fluid">
                        <h1>${item.title}</h1>
                        <a href="./newstext.html" class="btn btn-primary" onclick="gotoNews(${item.id})">View details</a>
                    </div>
                `;
                newsproduct.appendChild(box);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

function gotoNews(id) {
    let news = JSON.parse(localStorage.getItem('news')) || [];
    news.push(products.find(item => item.id == id));
    const maxNews = 1;
    if (news.length > maxNews) {
        news.shift();
    }
    localStorage.setItem('news', JSON.stringify(news));
}

getProducts();

