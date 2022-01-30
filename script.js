//funcion constructora consultorio
function Consultorio(nombre, paciente) {
    var _nombre = nombre;
    var _paciente = paciente;
};
Object.defineProperty(this, "_getNombreConsultorio",{
    get: function () {
        return _nombre
    },
});
Object.defineProperty(this, "_setNombreConsultorio", {
    set: function (nuevoNombre) {
        _nombre = nuevoNombre
    }
});
Object.defineProperty(this, "_getPaciente",{
    get: function () {
        return _paciente
    },
});
Object.defineProperty(this, "_setPaciente", {
    set: function (nuevoPaciente) {
        _paciente = nuevoPaciente
    }
});

//Prototype Consultorio
Consultorio.prototype.getNombreConsultorio = function (){
    return this._nombre
}
Consultorio.prototype.getPacientes = function(){
    this._paciente.forEach(function(element, index){
console.log("El nombre del paciente es: " + (element), "y el número es: " +(index+1));
    })
    console.log(this._paciente)
};
//Prototype Paciente
/*Consultorio.prototype.agregarPaciente = function (paciente){
this._paciente.push(paciente)
}
//Prototype buscar pacientes
Cosnultorio.prototype.getNombre = function (){
    const result = this._paciente.filter
}*/



//funcion constructora Paciente
function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;
};
Object.defineProperty(this, "_getNombrePaciente", {
    get: function () {
        return _nombre
    }
});
Object.defineProperty(this, "_setNombrePaciente", {
    set: function (nuevoNombrePaciente) {
       _nombre = nuevoNombrePaciente
    }
});
Object.defineProperty(this, "_getEdad", {
    get: function () {
        return _edad
    }
});
Object.defineProperty(this, "_setEdad", {
    set: function (nuevEdad) {
       __edad = nuevEdad
    }
});
Object.defineProperty(this, "_getRut", {
    get: function () {
        return _rut
    }
});
Object.defineProperty(this, "_setRut", {
    set: function (nuevoRut) {
       __rut = nuevoRut
    }
});
Object.defineProperty(this, "_getDiagnostico", {
    get: function () {
        return _diagnostico
    }
});
Object.defineProperty(this, "_setDiagnostico", {
    set: function (nuevoDiagnostico) {
       __diagnostico = nuevoDiagnostico
    }
});

//
/*Consultorio.prototype.getPacientePorNombre = function (nombre) {
    this.paciente().forEach(function(element,index) {
        if (element._nombre() == busquedaNombre){
            console.log("Paciente Nº"+(index+1));
            console.log(element._nombre());
        }
    });
}*/

//instancia new
var p1 = new Paciente ("Claudia Rojas", 45, "14.444.444-4", "Celiaca");
var p2 = new Paciente ("Daniel Ulloa", 38, "15.555.555-5", "diabetes");
var p3 = new Paciente ("Fernanda Castex", 25, "19.999.999-9", "hipertensión");
var p4 = new Paciente ("Cristian Sarmineto", 27, "18.888.888-8", "hipercolestemia");
var p5 = new Paciente ("Francisca Santander", 34, "16.666.666-6", "ar");
var p6 = new Paciente ("Flora", 55, "11.111.111-1", "depresión" )
console.log(p1, p2, p3, p4, p5)


//console.log(consul1.getNombrePaciente());
//console.log(consul1.getNombreConsultorio());
//consul1.getPacientePorNombre("Claudia Rojas")


var consul1 = new Consultorio("Ñuñoa", [p1, p2, p3, p4, p5]);
console.log(consul1);
console.log(consul1.getNombreConsultorio()) 

consul1.agregarPaciente(p6)

console.log(consul1.getPacientes());





/*Consultorio.prototype.mostrarTodosLosPacientes = function () {
	this._getNombrePaciente.map((paciente) => {
		console.log("Nombre: " + paciente._getNombrePaciente);
		console.log("Edad: " + paciente._getEdad);
		console.log("Rut: " + paciente._getRut);
		console.log("Diagnostico: " + paciente._getDiagnostico);
	});
};
Consultorio.prototype._getPaciente = function() {
    return this.nombre
};
Paciente.prototype._getNombrePaciente = function () {
    return this._nombre
};
Paciente.prototype._getEdad = function () {
    return this._edad
};
Paciente.prototype._getRut = function () {
    return this._rut
};
Paciente.prototype._getDiagnostico = function () {
    return this._diagnostico
};

/*var registro = [
    { _nombre: nombre,
     _edad: edad,
    _rut: rut,
    _diagnostico: diagnostico}
];
registro.forEach (function (registro2) {
    console.log(registros2._nombre, registro2_edad, registro2._rut, registros2._diagnostico)
});*/

/*var registro = ["_getNombrePaciente" + "_getEdad" + "_getRut" +  "_getDiagnostico"];
Paciente.prototype.forEach = function forEach (registro) {
   return this.registro
}
console.log(registro)*/ 



