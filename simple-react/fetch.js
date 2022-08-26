//json js simple object
const student=
{
    name:'sakib',
    age:32,
    movies:['king','dhaka']

}

const studentJSON=JSON.stringify(student);
console.log(student);
const studentObj=JSON.parse(studentJSON);
console.log(studentObj);

//fetch
fetch('url')
.then(res=>res.json())
.then(data=>console.log(data));
//keys,values
const keys=object.keys(student);
const values=Object.values(student);

//for
const numbers=[23,23,24,25];
numbers.forEach(num=>console.log(num));
numbers.map(num=>num*2);

//for of on array object
//loop on an object using for in


//add or remove on aray
const products=[
    {name:'labtop',price:1200,brand:'lenvo',color:'silver'},

    {name:'labtop',price:1200,brand:'lenvo',color:'silver'},
    {name:'labtop',price:1200,brand:'lenvo',color:'silver'},
    {name:'labtop',price:1200,brand:'lenvo',color:'silver'},
    {name:'labtop',price:1200,brand:'lenvo',color:'silver'},
];

const newProduct={name:'webcam',price:700,brand:'lal'};

//coppy array 
const newProducts=[...products,newProduct];

//create new array without 
const remaining =products.filter(p=>p.name!=='phone');





