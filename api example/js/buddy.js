const loadBuddies=() =>{
    fetch('https://randomuser.me/api/?results')
    .then (res=>res.json())
    .then(data=>displayBuddies(data))
}

const displayBuddies=data=>{

const buddies=data.results;
const buddiesDiv=document.getElementById('buddies')
console.log(data.results);
for(const buddy of buddies){
    console.log(buddy.email.name)
    const p=document.createElement('p');
    p.innerText=`Name:${buddy.name.first}
    email:${buddy.email}`;
    
    buddiesDiv.appendChild(p);
    

}

}