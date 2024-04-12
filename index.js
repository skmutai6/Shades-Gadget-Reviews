
fetch("http://localhost:3000/posts")
.then((data)=> data.json())
.then((posts)=>{

    console.log(posts)

    let cardsContainer = document.getElementById("cardsContainer")
    
    cardsContainer.innerText = "Testing"

})



