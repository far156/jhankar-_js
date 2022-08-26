//alams,5,true,{},[]
//'',0,false,null,undefined,




let myVar=5;
if(myVar){
    //check truthly
    myVar=myVar*100;


}
else{
    myVar=0;

}

let myMoney=50;
if(!myMoney){
    //you check negative

}


const money=80;
let food;
if(money>100){
    food='briyani';
}
else{
    food='cha khai';
}

//ternary

let food1=money>100?'briyani':'cha biscut';
console.log(food1);


let drink=(money>100 && myVar>100)?'coke':'filter water';
console.log(drink);

const num1=52;
console.log(num1);

const numstr=num1+'';
console.log(numstr);

//string to number
const input='560';
const inputNum=+input;
console.log(inputNum);

//shorto diye function call
const isActive=true;
const ShowUser=()=>console.log('display User');
const hideUser=()=>console.log('hate user');
isActive?ShowUser():hideUser();//mitha or sotto
isActive && ShowUser();
//duiside shotto
//mithha jonno if the left side is false then right will be executed
isActive||ShowUser();

isActive|| hideUser();

isActive=!isActive
//toggle boolean








