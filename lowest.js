function lowestElement(numbers){
    let largest=numbers[0];
    for (let i=0;i<numbers.length;i++){
        const element=numbers[i];
        if(element<lowest){
            lowest=element;
        }

    
    
    }
    return lowest;
}
//console.log(element);
    //console.log(i);


const ages=[12,54,2,34,75,32,12];
const smallest=lowestElement(ages);
const smallest2=lowestElement([-12,-6,-17]);
 

console.log('smallest',smallest);
console.log('smallest2',smallest2);