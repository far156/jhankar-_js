const shop={
    name:'asa',
    address:'rs',
    profit:1500,
    products:['labtop','mobile','pepsi',],
    owner:{

    },
    isExpensive:false

}

const shopStrightField=JSON.stringify(shop);
//console.log(shop);
console.log(shopStrightField);
const converted=JSON.parse(shopStrightField);
console.log(converted.owner);
//string convert kore normal java tey convert korci
//stringify korley object thakey na acccess kortey holey json parse diye korety hobey
