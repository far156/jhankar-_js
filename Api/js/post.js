function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.json())
    .then(data=>displayPosts(data))
}

loadPosts();


function displayPosts(posts){

    const postContainer=document.getElementById('posts');
    for(const post of posts){
        //protitar jonno div
        const div=document.createElement('div');
        div.innerHTML=` <h3>${post.tittle} </>
        
        
        <p>${post.body}</p>`
        // dinymically jonno post korbo then j avariable ota nibo
        //append korbo div pawar jonno
        postContainer.appendChild(div);

        
    //console.log(post.tittle)
    }

}