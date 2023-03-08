const gatito = [
    { 
        nombre: 'gatitos 1',
        imagen: "gatito1.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: 'gatito 2',
        imagen: "gatito2.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: 'gatito 3',
        imagen: "gatito3.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: 'gatito 4',
        imagen: "gatito4.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
]

module.exports = class Gatito{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_gatito) {
        this.nombre = nuevo_gatito.nombre || 'Gatito';
        this.imagen = nuevo_gatito.imagen || 'gatit01.jpg';
        this.descripcion = nuevo_gatito.descripcion || 'Un gato muy cool';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        gatito.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return gatito;
    }

}