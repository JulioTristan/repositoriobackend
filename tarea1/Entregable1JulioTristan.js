class Usuario{
  constructor(nombre, apellido, libros, mascotas){
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
     
  }
  getFullName(){
      return `tu nombre completo es ${this.nombre} ${this.apellido}`;
  }
  addMascotas(mascota){
      this.mascotas.push(mascota);
  }
  countMascotas(){
      return this.mascotas.length;
  }
  addBook(nombre, autor){
      this.libros.push({'nombre': nombre, 'autor': autor})
  }
  getBooksNames(){    
      return this.libros.map((libro) => libro.nombre);
  }

}
const userOne = new Usuario("Julio", "Tristan", [{'nombre': "El señor de las moscas", 'autor':"William Golding"},{'nombre': "Fundacion", 'autor':"Isaac Asimov"}], ["perro", "gato"]);
console.log(userOne);
console.log(userOne.getFullName());
userOne.addMascotas("pez");
console.log(userOne.countMascotas());
userOne.addBook("Rayuela", "Julio Cortázar");
console.log(userOne.libros);
console.log(userOne.getBooksNames());