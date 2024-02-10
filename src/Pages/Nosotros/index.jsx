import cocoPa from '../../assets/Coco Copalli (1).png'
const Nosotros = () => {
    return (
        <div className="ContNosotros">
            <div className='contImgs'>
                <img src={cocoPa} alt="" className='fondoCoc' />
            </div>
            <h1>Sobre Nosotros</h1>
            <h3 className='texto'>Soy una chica que comenzo un emprendiemiento para todo aquel que quiera un 
                nuevo aire, una limpieza de ambiente, para proteger tus pertenencias y simplemente por gusto,
                espero puedas encontrar lo que buscas.
            </h3>
        </div>
    )
}

export { Nosotros }