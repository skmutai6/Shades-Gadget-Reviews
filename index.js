
fetch("http://localhost:3000/posts")
.then((data)=> data.json() )
.then((posts)=>{
  
  displayPosts(posts)
})

  // loop thro the blog posts and append
  function displayPosts(posts) {
  let cardsContainer = document.getElementById("cardsContainer")

  for(post of posts){
    cardsContainer.innerHTML += `
      <div class="block mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">          
        <img src="${post.image}" alt="Product image...">
        <div class="text-2xl flex justify-around">
          <i onclick="deletePost(${post.id})" class="fa fa-trash text-red-700" aria-hidden="true"></i>
          <i onclick="editPost(${post.id})" class="fa fa-pencil" aria-hidden="true"></i>
        </div>
        <h5 class="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${post.title}</h5>
        <p class="text-center font-normal text-gray-700 dark:text-gray-400">${post.description}</p>
        <div class="text-2xl flex justify-end text-blue-700"><i class="fa fa-share" aria-hidden="true"></i></div>
      </div>
    `
  }
}

// Edit post
function editPost(id) {
  fetch(`http://localhost:3000/posts/${id}`)
  .then((data)=> data.json() )
  .then((post)=>{

  console.log(post);
  
  let updateContainer = document.getElementById("updateContainer")
  updateContainer.innerHTML = `
    <h3 class="mt-6 font-medium flex justify-center items-center">Update Post</h3>
    <div class="grid container mx-auto mt-4">
      <div class="max-w-md mx-auto">
      <div id="title" class="relative z-0 w-full mb-5 group">
        <input type="text" value="${post.title}" id="title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Model</label>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input type="text" value="${post.image}" id="image" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="image" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Link</label>
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <textarea type="text" id="description" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required >
        ${post.description}
        </textarea>
        <label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Specifications</label>
      </div>
      <button onclick="updatePost${id}" type="submit" class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </div>
  `
  })

}

// Update Post
function updatePost(){
  const title = document.getElementById("title").value
  const image = document.getElementById("image").value
  const description = document.getElementById("description").value

  console.log(title,  image, description);
  fetch(`http://localhost:3000/posts/${id}`,
  {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      // "Accept": "application/json",
    },
    body: JSON.stringify({
      title: title,
      image: image,
      description: description,
    }),
  })
  .then((data)=> data.json() )
  .then((res)=>{

    alert("Post update successful")

  })

}


// Delete function
function deletePost(id) {
fetch(`http://localhost:3000/posts/${id}`, {
  method: "DELETE"
})
.then((data)=> data.json() )
.then((posts)=>{
  
  displayPosts(posts)
  alert("post deleted successfully")

})
}

// Create post
document.getElementById("postForm").addEventListener("submit", (event) => {
  event.preventDefault()

  const title = document.getElementById("title").value
  const image = document.getElementById("image").value
  const description = document.getElementById("description").value

  console.log(title,  image, description);
  fetch("http://localhost:3000/posts",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Accept": "application/json",
    },
    body: JSON.stringify({
      title: title,
      image: image,
      description: description,
      views: 0,
    }),
  })
  .then((data)=> data.json() )
  .then((res)=>{

    alert("Post created successfully")

  })
})

