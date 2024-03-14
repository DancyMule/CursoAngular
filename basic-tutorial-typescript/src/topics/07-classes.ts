// Al igual que en otros lenguajes, una clase es una represatacion de "algo" y un instrancia es ese algo guardado en memoria

import { IAction } from "./utils/actions-interface";

/*        POLIMORFISMO         */
class Person{
    public name: string;
    protected lastname: string;   
    protected _fullName: string;   
    private _age: number;
    constructor(name: string, lastname: string, age: number){
        this.name = name;
        this.lastname = lastname;
        this._age = age;
        this._fullName = `${this.name} ${this.lastname}`;
    }

    walk():void{
        console.log(`${this.name} is walking`);
    }
    data():void{
        console.log(`${this.name} ${this.lastname} is ${this._age} years old`);
    }
    talk():void{
        console.log(`${this.name} está hablando "nací en ${this._yearBirth()}"`);
    }

    private _yearBirth(){
        const currentDate = new Date();
        const yearBirth = currentDate.getFullYear() - this._age;
        return yearBirth;
    }

}

// Para llamar un petodo a partir de una instancia de una clase, se coloca la sintanxis: 
//                  INSTANCIA.METODO
// Cabe destacar que la clase debe estar dentro del metodo
const pepe = new Person('Pepe', 'pecas', 19);
pepe.walk();

// Podemos imprimir en la consola todo el objeto para ver todo lo que lo constituye (Construcción, clase, metodos, etc)
console.log('Instancia (Person) "PEPE": ', pepe);


// Existen 3 tipos de clases; public(contenido de la instancia visualizable en cualquier lugar), 
// protected(contenido visible solo para aquellas clases que hereden de la clase orginal) 
// y private(contenido de la instancia visualizable solo en el lugar de declaración)
pepe.data();
pepe.talk();


/*        HERENCIA         */


class Astronauta extends Person implements IAction {
    numberMastersDegree: number;
    constructor(name: string, lastname: string, age: number, numberMastersDegree: number){
        super(name, lastname, age);
        this.numberMastersDegree = numberMastersDegree;
    }
    pilotShip(): void {
        console.log(`${this.name} tiene permiso para pilotear`);
    }

    studies():void {
        console.log(`${this.name} has ${this.numberMastersDegree} masters degree`);
    }

    getFullName() {
        return this._fullName;
    }
}
 const astronauta = new Astronauta('Jonh','Sanders', 92, 9);
 const astronauta2 = new Astronauta('James','Cameron', 62, 4);
 astronauta.walk();
 astronauta.data();
 astronauta.talk();
 astronauta.studies();
 console.log('Datos del astronauta', astronauta);
 console.log('Nombres y apellidos del astronauta:', astronauta.getFullName());
 astronauta.pilotShip(); 
 
 astronauta2.walk();
 astronauta2.data();
 astronauta2.talk();
 astronauta2.studies();
 console.log('Datos del astronauta', astronauta2);
 console.log('Nombres y apellidos del astronauta:', astronauta2.getFullName());
 astronauta2.pilotShip(); 















export {}