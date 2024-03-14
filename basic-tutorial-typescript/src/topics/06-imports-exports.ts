//Para estos ejemplos se usarán los archivos en el directorio ./utils/
//Esto normalmente iría hasta arriba
import {ICustomer, showCustomerData} from "./utils/customer-util";

const customer:ICustomer ={
    name: 'Jorge',
    lastName: 'Juarez',
    email: 'Jorge@example.com',
    address:{ description: 'Maravilla 266', city: 'Morelia', country: 'Mexico'}
};

showCustomerData(customer); 


export {}