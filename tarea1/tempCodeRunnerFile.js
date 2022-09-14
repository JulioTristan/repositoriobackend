class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
    }
    getFullName() {
      console.log(`El nombre completo es: ${this.nombre} ${this.apellido}`);
    }
    addMascotas(mascotas) {
      this.mascotas.push(mascotas)
      console.log(this.mascotas);
    }
    countMascotas() {
      console.log(this.mascotas.push());
    }
    addBook(libros) {
      this.libros.push(libros)
      console.log(this.libros);
    }
    getBooksNames() {
      let nombres =[]
      for (const i in this.libros) {
          nombres.push(this.libros[i].nombre)
      }
      console.log(nombres);
    }
  }
  
  const usuario = new Usuario(
      'Roberto','Mora',
      [{nombre:'El señor de las mocas',autor: 'William Golding'},
      {nombre:'El Mago de Oz',autor: 'L.Frank Baum'}],
      ['perro','gato','conejo']
  );
  
  usuario.getFullName()
  usuario.addMascotas('dinosuario')
  usuario.countMascotas()
  usuario.addBook({nombre:'Harry Potter', autor: 'J.K.Rolling'})
  usuario.getBooksNames()
  