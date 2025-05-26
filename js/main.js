class Biblioteca {
    constructor(nombre, libros = []){
        this.nombre = nombre;
        this.libros = libros;
    }

    agregarLibro(libro){
        this.libros.push(libro);
    }

    buscarPorISBN(isbn){
        return this.libros.find((item) => item.isbn == isbn
       )
    }

    prestarLibro(isbn){
        let libro = this.libros.find((item, index, array) => {
            return item.isbn == isbn;
        })
        if (libro._prestado === "disponible"){
            libro.se
        } else {
            console.log("El libro ya esta prestado");
        }
    }

    devolverLibro(isbn){
        let libro = this.libros.find((item, index, array) => {
            return item.isbn == isbn;
        })
        if (libro._prestado === "prestado"){
            libro._prestado = "disponible";
        } else {
            console.log("El libro ya esta disponible");
        }
    }

    mostrarLibros(){
        this.libros.forEach((item, index, array) => {
            console.log(`Libro: ${item.titulo}, Estado: ${item.estado}`);
        })
    }
}




class Libro {
    constructor(titulo, autor, isbn, prestado = "disponible"){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._prestado = prestado;
    }   

    prestar() {
        _prestado = "prestado";
    }

    devolver() {
        _prestado = "disponible";
    }

/*     getEstado() {
        console.log(_prestado);
    } */

    get estado(){
        console.log(this._prestado);
        return this._prestado;
    }

    /*set estado(){
        if (this.estado === "disponible"){
            
        }
    }*/
}


const biblio = new Biblioteca("Biblioteca Central");
const libro1 = new Libro("1984", "George Orwell", "12345");

biblio.agregarLibro(libro1);
biblio.prestarLibro("12345");
biblio.mostrarLibros();