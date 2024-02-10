import frase from '../../assets/fraseCopalli.png'

const Dashboard = () => {
    
    return (
        <div className='ContInicio'>
            <div className='contImg'> 
                <img src="https://i.pinimg.com/originals/1c/5e/13/1c5e1348d31bf23e811f0cee682c3159.jpg" alt="fondo" className='fondo' />
                <div className="ConTitulos">
                    <h1><b>Hola!</b></h1>
                    <h2>Bienvenid@ a nuestra pagina</h2>
                    <a href="/category/sahumerios">Visita nuestros productos</a>
                </div>
                <img src="https://i.pinimg.com/originals/29/99/45/2999457dc6bc3acab2c7edff6a34a5c7.jpg" alt="fondo" className='fondo' />
            </div>
        </div>
    )
}

export {Dashboard}