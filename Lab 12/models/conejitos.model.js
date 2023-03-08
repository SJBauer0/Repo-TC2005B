const conejitos = [
    { 
        nombre: 'Conejo 1',
        imagen: "conejito1.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: 'Conejo 2',
        imagen: "conejito2.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: 'Conejo 3',
        imagen: "conejito3.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
    { 
        nombre: 'Conejo 4',
        imagen: "conejito4.jpg", 
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."
    },
]

module.exports = class Conejitos {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_conejito) {
        this.nombre = nuevo_conejito.nombre || 'Conejo';
        this.imagen = nuevo_conejito.imagen || 'conejito4.jpg';
        this.descripcion = nuevo_conejito.descripcion || 'Un conejo muy cool';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        conejitos.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return conejitos;
    }

}