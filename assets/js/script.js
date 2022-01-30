//Todo en ES5
//funcion constructora consultorio
function Consultorio(nombre, paciente) {
    var _nombre = nombre;
    var _paciente = paciente;

    Object.defineProperty(this, "_nombreConsultorio", {
        get: function () {
            return _nombre
        },
        set: function (nuevoNombre) {
            _nombre = nuevoNombre
        }
    })
    Object.defineProperty(this, "_nombrePaciente", {
        get: function () {
            return _paciente
        }
    })

}

Consultorio.prototype.getNombreConsultorio = function () {
    return this._nombreConsultorio
}

//Método prototype para mostrar todos los pacientes
Consultorio.prototype.getPacientes = function () {
    this._nombrePaciente.forEach(function (element, index) {
        console.log("El nombre del paciente es:  ".concat(element._nombrePaciente, " y el número es:  ").concat(index + 1));
    })
    console.log(this._nombrePaciente)
}
Consultorio.prototype.agregarPaciente = function (paciente){
    this._nombrePaciente.push(paciente)
}

//Método prototype para buscar los datos de los usuarios por nombre
Consultorio.prototype.getNombre = function (buscarNombre){
     const result = this._nombrePaciente.filter(function (element){
        if(element._nombrePaciente == buscarNombre){
            console.log("El nombre del paciente es: " + element._nombrePaciente + ", su edad es: " + element._edad + ", su rut es: " + element._rut + " y su diagnostico: " + element._diagnostico);
        }
    })
}

/*Consultorio.prototype.getRut = function (buscarRut){
    const result = this._nombrePaciente.filter(element =>{
       if(element._rut == buscarRut){
           console.log(`Búsqueda por rut: ${element._nombrePaciente} y su rut es: ${element._rut}`)
       }
   })
}*/


//funcion constructora Paciente
function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico || [];

    Object.defineProperty(this, "_nombrePaciente", {
        get: function () {
            return _nombre
        },
        set: function (nuevoNombre) {
            _nombre = nuevoNombre
        }
    })
    Object.defineProperty(this, "_edad", {
        get: function () {
            return _edad
        },
        set: function (nuevaEdad) {
            _edad = nuevaEdad
        }
    })
    Object.defineProperty(this, "_rut", {
        get: function () {
            return _rut
        },
        set: function (nuevoRut) {
            _rut = nuevoRut
        }
    })
    Object.defineProperty(this, "_diagnostico", {
        get: function () {
            return _diagnostico
        },
        set: function (nuevoDiagnostico) {
            _diagnostico = nuevoDiagnostico
        }
    })
}

//Instancia new
var p1 = new Paciente("Claudia", 46, "14.444.444-4", "fiebre");
var p2 = new Paciente("Daniel", 37, "15.555.555-5", "diabetes");
var p3 = new Paciente("Fernanda", 28, "18.888.888-8", "hipertensión");
var p4 = new Paciente("Cristian", 25, "19.999.999-9", "gripe");
var p5 = new Paciente("Francisca", 34, "16.666.666-6", "celiaquía");
var p6 = new Paciente("push Prueba", 10, "23.333.333-3", "asma")



//console.log(p1)

consultorio1 = new Consultorio("Santa Elvira", [p1, p2, p3, p4, p5]);
//console.log(consultorio1)
//console.log(consultorio1.getNombreConsultorio())

consultorio1.agregarPaciente(p6)

console.log(consultorio1.getPacientes())
console.log(consultorio1.getNombre("Daniel"))
//console.log(consultorio1.getRut("18.888.888-8"))