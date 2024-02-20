const newsdetails = document.getElementById('newsdetails')
function newsDetails(){
    newsdetails.innerHTML = ''
    let news = JSON.parse(localStorage.getItem('news')) || [];
news.map((item,index) => {
    let newsabout = document.createElement('div')
    newsabout.className = " newsbox col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
    newsabout.innerHTML = `
    <div class="boxproducts">
    <img src="${item.imageUrl}" alt="">
    <h1>${item.title}</h1>
    <p>${item.question}</p>
    <p>${item.text}</p>
   <button onclick="removefromNews(${index})">Delete</button>
    </div>
    `
    newsdetails.appendChild(newsabout)
})
}
newsDetails()

function removefromNews(index){
    let news = JSON.parse(localStorage.getItem('news')) || [];
        news.splice(index, 1)
        localStorage.setItem('news', JSON.stringify(news));
        newsDetails()
    
}