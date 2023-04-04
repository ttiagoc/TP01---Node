

export default class Alumno {
    constructor(nombre, dni) {
      this.nombre = nombre;
      this.dni = dni;
    }

    setNombre(nombre){
        this.nombre = nombre
    }

    setDNI(dni){
        this.dni = dni
    }

     Mostrar(){
      
      let texto = "Nombre del alumno: " + this.nombre + ", DNI: " + this.dni;
      return texto
    
    }

  }