
fetch("http://localhost:3000/")
.then((data)=> data.json())
.then((posts)=>{
    console.log(posts);
})

// loop thro the blog posts
let cardsContainer = document.getElementById("cardsContainer")

for(item of posts) {
    cardsContainer.innerHTML += `
        <a href="#" class="block mx-auto max-w-sm p-6 bg-gray-200 border border-gray-400 rounded-lg shadow hover:bg-gray-300">
          <img src="Images/Frame 3.png" class="w-full" alt="image">
          <div>
            <i class="fa fa-minus-circle" aria-hidden="true"></i>
            <i class="fa fa-pencil-square" aria-hidden="true"></i>
          </div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-yellow-700">Infinix Note 40 Pro</h5>
          <p>Here's what you need to know before you pre-order the latest Note Series from Infinix Mobility.</p>
        </a>
    `
}



