function Secure(){

    Secure.prototype.cotizarSeguro = (marca, year, tipoSeguro) =>{ 
        let total ;
        const base = 2500
        switch (marca) {
            case '1':
                total = base*1.15
                break;
            case '2':
                total = base*2.05
                break;
            case '3':
                total = base*4.56
                break;
            default:
                break;

        }

        
        const diferencia = new Date().getFullYear() - year


        total -= ((diferencia * 3) * total) / 100


        return total
    }
}


const secure = new Secure()


export default secure