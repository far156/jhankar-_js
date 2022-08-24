//destructing

const number=[42,65];

const [x,y]=number;

function boxify(num1,num2){
    const nums=[num1,num2];
    return nums;

}
const [first,second]=[90,34]
//3 way to property name access
const student=
{
    name:'sakib',
    age:32,
    movies:['king','dhaka']

}
//bam pasey array moto korar jonno dan pasey destructing kortey hobey

const [firstMovie,secondMovie]=student.movies;

//object destructing
const{name}={name:'alu',age:14}



const employee={
    ide:'vs code',
    designation:'developer',
    machine:'mac',
    language:['html','css','js'],
    specifcation:{
        height:66,
        weight:67,
        address:'kumarkhali',
        drink:'water'
    }

}


const{machine,ide}=employee;
const {weight,address}=employee.specifcation;

const{brand}=employee?.specifcation?.watch;


console.log(boxify(90,34));
