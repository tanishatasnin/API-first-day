function loadPost(){
               fetch('https://jsonplaceholder.typicode.com/posts')
               .then(res=>res.json())
               .then(data=>displayPost(data))
}

function displayPost(post) {
               const postContainer =document.getElementById('posts');
               for(const list of post){
                              const div =document.createElement('div');
                              div.classList.add('post')
                              div.innerHTML=`<h3>${list.title}</h3>
                               <p> ${list.body} </p>`;
                              postContainer.appendChild(div);
                              console.log(list);
               }
               
}

// practice -3 
function landpictures(){
               fetch('https://jsonplaceholder.typicode.com/photos')
               .then(response=>response.json())
               .then(data=>allPictures(data))
}
function allPictures(pictures){
               const pic=document.getElementById('pics');
               for(const list of pictures){
                 const div=document.createElement('div');
                 
                 
                 div.innerText=`${list.url("https://via.placeholder.com/600/92c952",)}`;
                 pic.appendChild(div);
               }
             }
             