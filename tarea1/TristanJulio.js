class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

getFullName(){
    return `Tu nombre completo es ${this.nombre} ${this.apellido}`;
}
addMascotas(mascota){
    this.mascotas.push(mascota);   
}
countMascotas(){
    return this.mascotas.length;
}
addBook(nombre,autor){
    this.libros.push({'nombre':nombre, 'autor':autor});   
}
getBooksNames(){
    return this.libros.map((libro) => libro.nombre);
}
}

const User = new Usuario('Julio', 'Tristan', [{nombre:'El señor de las moscas',autor:'William Golding'}, {nombre:'Fundacion', autor:'Isac Asimov'}],['perro','gato'] )
console.log(User);
console.log(User.getFullName());
User.addMascotas("serpiente");
console.log(User.countMascotas());
User.addBook('El juego interior del tenis','W. Timothy Gallwey');
console.log(User.libros);
console.log(User.getBooksNames());
