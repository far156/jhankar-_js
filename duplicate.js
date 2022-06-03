const names=['abul','babul','cagol','ebul','fabul','babul','gabul','abul','habul'];

function removeDuplication(names){
    const unique=[];
    for(let i=0;i<names.length; i++){
        const element=names[i];
        console.log(element);
    }
    for (const element of names){
        console.log(element);
        if(unique.indexOf(element)==-1){
            unique.push(element);
            
        }

    }

}
const uniqueNames=removeDuplication(names);
console.log(uniqueNames);
