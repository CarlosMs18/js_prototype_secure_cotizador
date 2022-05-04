import ui from '../classes/UI.js'
import secure from '../classes/Secure.js'
import {formularioSeguro,marca,optionYears} from '../helpers/selectors.js'

export function eventListener(){
    document.addEventListener('DOMContentLoaded',()=> {
        ui.completeYears()
        formularioSeguro.addEventListener('submit',cotizarSeguro)
    })
}



function cotizarSeguro(e){
    e.preventDefault()
    const typeSecure = document.querySelector('input[name=tipo]:checked')
    if(marca.value === '' || optionYears.value === '' || typeSecure.value === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios','error')
        return
    }
    ui.mostrarMensaje('Comenzando Cotizacion...','exito')

    secure.cotizarSeguro(marca.value, optionYears.value,typeSecure.value)

}