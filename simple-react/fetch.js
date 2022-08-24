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