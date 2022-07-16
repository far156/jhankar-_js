console.log('i am summary');
const blogs=document.getElementByIdTagName('p');
for(const blog of blog){
    console.log(blogs);
    blog.style.backgroundClor='steelblue';
    blog.style.color="white";
}
const special=document.getElementById('special');
special.innerHTML=
<h4>special</h4>
{/* <div> */}
    // <li>ami k,,,,,,,,,/li>

// </div>
const friends=document.getElementById('friends');
console.log(friends.children);
const fifth=friends.children[4];
console.log(fifth);
friends.removeChild(fifth);
const friend=document.createElement('li');
friend.appendChild(friend);