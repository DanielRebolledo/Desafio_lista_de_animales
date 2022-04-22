class Propietario{
    #nombre;
    constructor(nombre, direccion, telefono){
        this.#nombre   = nombre;
        this.direccion = direccion;
        this.telefono  = telefono; 
    }
    datosPropietario(){
        return{
            nombre: this.#nombre,
            direccion: this.direccion,
            telefono: this.telefono
        } 
        
    }
}

class Animal extends Propietario{
    constructor(tipo, nombrePrpietario, direccionPropietario, telefonoPropietario){
        super(nombrePrpietario, direccionPropietario, telefonoPropietario)
        this.tipo = tipo;

    }
}

class Mascota extends Animal{
    constructor(nombre, enfermedad, tipoAnimal,nombrePrpietario, direccionPropietario, telefonoPropietario){
        super(tipoAnimal,nombrePrpietario, direccionPropietario, telefonoPropietario)
        this.nombre       = nombre;
        this.enfermedad   = enfermedad;
    }
}


$(document).ready(() => {

    let $propietario   = $('#propietario');
    let $telefono      = $('#telefono');
    let $direccion     = $('#direccion');
    let $nombreMascota = $('#nombreMascota');
    let $tipo          = $('#tipo');
    let $enfermedad    = $('#enfermedad');
    let $btnAgregar    = $('#btnAgregar');
    let $resultado     = $('#resultado');

$btnAgregar.click(($event) =>{
    $event.preventDefault();

    let mascota = new Mascota (
        $nombreMascota.val(),
        $enfermedad.val(),
        $tipo.val(),
        $propietario.val(),
        $direccion.val(),
        $telefono.val()
    );

    let propietario = mascota.datosPropietario()

    $resultado.html(`
        <ul class="lista-datos">
            <li><strong>Nombre del dueño:</strong>     ${propietario.nombre}</li>
            <li><strong>Domicilio:</strong>            ${propietario.direccion}</li>
            <li><strong>Número de contacto:</strong>   ${propietario.telefono} </li>

            <li><strong>Tipo de animal:</strong>       ${mascota.tipo}</li>
            <li><strong>Nombre de la mascota:</strong> ${mascota.nombre}</li>
            <li><strong>Enfermedad:</strong>           ${mascota.enfermedad}</li>
        </ul>
    
    `)

});




})//<== document.ready