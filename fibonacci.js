//0,1,1,1,2,3,5,8,13,21,34,55 ata tey ager number sathey add kortey hoi like 1+0=1 ;1+1=2
//3=1+2
//4=3+2
//n=(n-1)+n-2
//i=(i-1)+i-2

const fibo=[0,1]

for (let i=2;i<=10;i++){

    fibo[i]=fibo[i-1]+fibo[i-2];

}
console.log(fibo);
