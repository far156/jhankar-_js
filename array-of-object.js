const phones=[    
{name:'samsung s5',price:45000,camera:10,Storage:32},
{name:'walton m32',price:45000,camera:10,Storage:32},
{name:'shaomi m3',price:45000,camera:10,Storage:32},
{name:'opp m32',price:45000,camera:10,Storage:32},
{name:'walton m32',price:45000,camera:10,Storage:32},
{name:'walton m32',price:45000,camera:10,Storage:32},


];

let cheapest=phones[0];
for(const phone of phones){
    //compare price only
    if(phone.price<cheapest.price){
        cheapest=phone;
    }
    console.log(phones);
}