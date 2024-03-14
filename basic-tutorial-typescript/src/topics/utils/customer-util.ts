//Se le agrega el export a la interface para poder utilizarla desde cualquier clase
export interface ICustomer {
    name: string;
    lastName: string;
    email: string;
    address:{
        description: string;
        city: string;
        country: string;
    }
}

export const showCustomerData = (customer: ICustomer) => {

    console.log('******************************');
    console.log('******DATOS DEL CLIENTE*******');
    console.log('*********DESDE UTILS**********');
    console.log('******************************');

    const {
        name,
        lastName,
        email,
        address:{description, city, country}
    } = customer;
    
    console.log('Nombre: ', name);
    console.log('Apellido: ', lastName);
    console.log('Email: ', email);
    console.log('-----DIRECCION-----');
    console.log('Dirección: ', description);
    console.log('Ciudad: ', city);
    console.log('País: ', country);

};
