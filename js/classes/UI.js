import {optionYears, formularioSeguro} from '../helpers/selectors.js'
function UI(){

    UI.prototype.completeYears = () =>{
        const max = new Date().getFullYear()
        const min = max - 15;

        for(let i = max ; i >=min; i--){
            const option = document.createElement('option')
            option.textContent = i
            option.value = i
            optionYears.appendChild(option)
        }
    }

    UI.prototype.mostrarMensaje = (mensaje, estado) =>{
            const div = document.createElement('div')
            if(estado === 'error'){
                div.classList.add('error')
            }else{
                div.classList.add('correcto')
            }

            div.classList.add('mensaje','mt-10')
            div.textContent = mensaje

            formularioSeguro.insertBefore(div, document.querySelector('#resultado'))

            setTimeout(() => {
                div.remove()
            }, 2500);

    }
}


const ui = new UI

export default ui;