const numbers=[89,35,988];
const student={
    name:'sakib',
    age:32,
    movies:['king']


}


const about=`my name is ${student.name}age of${student.age} has number${Number[2]}`;
console.log(about);


//arrow
const getFiftyFive=()=>55;
const addSixteyFive=num=>num+65;
const isEven=x=>x%2==0;
const doMath=(num1,num2)=>{
    const sum=num1+num2;
    return sum;
}

//spread operator
const newNumbers=numbers;
numbers.push(99);

//creat a new array
const currentNumbers=[...numbers,55];
console.log(numbers);

