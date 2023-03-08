const perrito = [
    { 
        nombre: 'perrito 1',
        imagen: "perrito1.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: 'perrito 2',
        imagen: "perrito2.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: 'perrito 3',
        imagen: "perrito3.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: 'perrito 4',
        imagen: "perrito4.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
]

module.exports = class Perrito{

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_gatito) {
        this.nombre = nuevo_gatito.nombre || 'Gatito';
        this.imagen = nuevo_gatito.imagen || 'gatit01.jpg';
        this.descripcion = nuevo_gatito.descripcion || 'Un gato muy cool';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        perrito.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return perrito;
    }

}