//funcion constructora consultorio
function Consultorio(nombre, paciente) {
    var nombre = nombre;
    var paciente = paciente;
};
Object.defineProperty(this, "_getNombreConsultorio",{
    get: function () {
        return nombre
    },
});
Object.defineProperty(this, "_setNombreConsultorio", {
    set: function (nombre) {
        nombre = nombre
    }
});
Object.defineProperty(this, "_getPaciente",{
    get: function () {
        return paciente
    },
});
Object.defineProperty(this, "_setPaciente", {
    set: function (paciente) {
        paciente = paciente
    }
});
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
    set: function (nombre) {
       _nombre = nombre
    }
});
Object.defineProperty(this, "_getEdad", {
    get: function () {
        return _edad
    }
});
Object.defineProperty(this, "_setEdad", {
    set: function (edad) {
       __edad = edad
    }
});
Object.defineProperty(this, "_getRut", {
    get: function () {
        return _rut
    }
});
Object.defineProperty(this, "_setRut", {
    set: function (rut) {
       __rut = rut
    }
});
Object.defineProperty(this, "_getDiagnostico", {
    get: function () {
        return _diagnostico
    }
});
Object.defineProperty(this, "_setDiagnostico", {
    set: function (diagnostico) {
       __diagnostico = diagnostico
    }
});

//Prototype
Consultorio.prototype._getPaciente = function() {
    return this.nombre
}
var registro = ["getNombrePaciente" + "_getEdad" + "_getRut" +  "_getDiagnostico"];
Paciente.prototype.forEach = function forEach () {
    
}