

//#region NUMBER

console.log('******************************');
console.log('************NUMBER************');
console.log('******************************');

const age = 15;
let weight = 56.7;
let weight2:number = 74.5;
console.log(age);
console.log(weight-4);
console.log(weight2);


const ageText= '31';
console.log(parseInt(ageText));
console.log(Number(ageText));

//#endregion

//#region STRING
console.log('******************************');
console.log('************STRING************');
console.log('******************************');
const name:string = 'Danny';
const name2:string = 'Daniel';
const FullName = `FullName: ${name} ${name2}`
let name3;
name3 = name+name2;
console.log(name+name2);
console.log(FullName);
console.log(name2);
console.log(name3);

//#endregion

//#region BOOLEAN
console.log('******************************');
console.log('************BOOLEAN************');
console.log('******************************');

const useAngular:boolean = true;
const comparisonExpression= 5 > 2;

const booleanText = 'asdasdasd'

console.log('¿Usas Angular? ', useAngular);
console.log('¿2 > 5?', comparisonExpression);
console.log('Texto a Booleano ', Boolean(booleanText));
console.log('Texto a Booleano con !!', !!booleanText);

//#endregion

//#region 
console.log('******************************');
console.log('*************DATE*************');
console.log('******************************');

const dateNow = new Date();
console.log('Fecha: ', dateNow);
console.log('Fecha: ', dateNow.getFullYear());
console.log('Fecha: ', dateNow.getHours()+':'+dateNow.getMinutes());




//#endregion

//#region 
console.log('******************************');
console.log('*************ANY**************');
console.log('******************************');

let valueAny:any = 'Hello coders!';

console.log(valueAny);

valueAny = 5;
console.log(valueAny);
//#endregion




export {};

