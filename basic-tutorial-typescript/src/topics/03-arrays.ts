//interfaces
interface IPet{
    name: string;
    age: number;
    species: string;
    isFemale: boolean;
    vaccines: string[];
}


const Chispita:IPet ={
    name: "Chispita",
    age: 9,
    species: "Dog",
    isFemale: true,
    vaccines: ["Moquillo", "Sasalea", "Wombat alpha"]
}

const Navy:IPet ={
    name: "Navy",
    age: 2,
    species: "Cat",
    isFemale: true,
    vaccines: ["Fiebre gatuna"]
}

const Kratos:IPet ={
    name: "Kratos",
    age: 5,
    species: "Cat",
    isFemale: false,
    vaccines: ["Fiebre gatuna"]
}

const pets:IPet[]=[Chispita, Navy, Kratos];


const elements = [2, 'asd',true, {name:'Juilo'}];
const messages:string[]= ['Hello', 'Coders'];


console.log(elements);
console.log(messages);
console.log('My pets: ',pets);

for (let i=0; i<pets.length; i++){
    if (pets[i].isFemale){
        console.log(pets[i].name);
    } 
}

const femalePets = pets.filter((pet) => {
    return pet.isFemale;
});

const oneVaccine = pets.filter((pet) => {
    return pet.vaccines.length < 2;
});

const oneVaccineMap = pets.map((pet) => {
    return pet.vaccines.length < 2;
});

console.log(femalePets);
console.log(oneVaccine);
console.log(oneVaccineMap);
export {}