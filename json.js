function dataLode(){
               fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
}

function dataUsers(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>displayusers(data))
}
// dataUsers();//auto output
function displayusers(data){
  const ul =document.getElementById('users');
  for(const user of data ){
    // console.log(user.name);
    const li=document.createElement('li');
    li.innerText=`name of users:${user.name}  email id : ${user.email}`;
    ul.appendChild(li);
  }}
// practice -1
function comments(){
  fetch ('https://jsonplaceholder.typicode.com/comments')
  .then(response=>response.json())
  .then(comment=>displayComent(comment))
  
}
function displayComent(comment){
  const ul1=document.getElementById('commentAll');
  for(const use of comment){
    const li =document.createElement('li');
    li.innerText=`name of userxs:${use.name}`;
li.style.textAlign='center';

    ul1.appendChild(li);
    // console.log(list.name)
  }

}
// practice-2 
function landAlbums(){
  fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response=>response.json())
  .then(data=>allAlbums(data))

}
function allAlbums(albums){
  const pera=document.getElementById('album');
  for(const list of albums){
    const p=document.createElement('p');
    p.style.color='blue';
    p.style.textAlign='center'
    
    p.innerHTML=`${list.title}`;
    pera.appendChild(p);


  }
}

