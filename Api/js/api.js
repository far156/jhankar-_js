function loadData(){

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response=>Response.json())
    .then(json=>console.log)

}
function loadUsers(){
    console.log('user');
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.json())
    .then(data=>console.log(data));
}

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.json())
    .then(data=>console.log(data));
}


loadPosts();
function displayUser(data){
    console.log(data);

}

function displayUser(data){
    const ul=document.getElementById('users');
    
    for (const use of data){
       // console.log(user.name);
        const li=document.getElementById('li');
        li.innerText=`name:${user.name}`;
        ul.appendChild(li);
    }
}