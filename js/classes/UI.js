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

    UI.prototype.mostrarResultado = (total, marca, year, value) => {
            let tipoMarca;
            switch (marca) {
                case '1':
                    tipoMarca = 'Americano'
                    break;
                case '2':
                    tipoMarca = 'Asiatico'
                    break;
                case '3':
                    tipoMarca = 'Europeo'
                    break;
                default:
                    break;
            }

            const div = document.createElement('div')
            div.innerHTML += `
            <p class = "header">Tu resumen</p>
            <p class = "font-bold">Marca : ${tipoMarca}</p>
            <p class = "font-bold">Año : ${year}</p>
            <p class = "font-bold">Tipo : ${value}</p>
            <p class = "font-bold">Total : ${total}</p>
            `


            /* document.querySelector('#resultado').appendChild(div) */

            const spinner = document.querySelector('#cargando')
            spinner.style.display = 'block'

            setTimeout(() => {
                spinner.style.display = 'none'
                document.querySelector('#resultado').appendChild(div)
            }, 2500);
    }



}


const ui = new UI

export default ui;