function animalCount(miles){
    const animalDensityFirst10PerMile=10; 
    const animalDensitySecondPerMile=50;
    const animalDensityRestMile=50;
    if(miles<=10){
        const count=miles*animalDensityFirst10PerMile;
        return count;
    }
    else if(miles<20){
        const first10=10*animalDensityFirst10PerMile;
       
        const restMiles=miles-10;
        const secondDenseAnimals=restMiles*animalDensitySecondPerMile;
        const totalAnimals=firstDenseAnimals+secondDenseAnimals;
        return totalAnimals;


    }
    else{
        const firstDenseAnimals=10*animalDensityFirst10PerMile;
        const secondDenseAnimals=10*animalDensitySecondPerMile;
        const restMiles=miles-20;
        const RestDenseAnimals=restMiles*animalDensityRestMile;
        const totalAnimals=firstDenseAnimals+secondDenseAnimals+RestDenseAnimals;
        return totalAnimals;
    }
}
const animals=animalCount(45);
console.log(animals);

