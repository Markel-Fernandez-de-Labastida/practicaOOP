class Disponible {
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
        
    }
}




class Libro {
    constructor(titulo, autor, isbn, prestado = "disponible"){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        let _prestado = prestado;
    }   

    prestar() {
        _prestado = "prestado";
    }

    devolver() {
        _prestado = "disponible";
    }

    getEstado() {
        console.log(_prestado);
    }
}
