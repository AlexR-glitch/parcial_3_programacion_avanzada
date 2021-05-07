//import {useState} from 'react'
export default function Menu(){

/*const[activo, setActivo]= useState(activo)*/

/*Function mostrarMenu(e){
    const menu = e.target.value
    console.log(value)
}*/

        return(
    <div className="barra">
        <div className="menu">
            <a href="#sinopsis"><i class="fas fa-radiation"></i> Sinopsis</a>
            <a href="#faccion"><i class="fas fa-radiation"></i> Facciones</a>
            <a href="#galeria"><i class="fas fa-radiation"></i> Galeria</a>
            <a href="#final"><i class="fas fa-radiation"></i> Contacto</a>
        </div>

    <div class="degradado" id="degradado"></div>

    <nav className='celular' id="celular" add>
        
        <a href="#sinopsis" className="enlace">Sinopsis</a>
        <a href="#faccion" className="enlace">Facciones</a>
        <a href="#galeria" className="enlace">Galeria</a>
        <a href="#final" className="enlace">Contacto</a>
        <div className="salir" id="salida">salir</div>
    </nav>

    <div className="btnmenu" /*onclick={mostrarMenu}*/><i class="fas fa-radiation"></i>
    </div>
        </div>
    )
}






/*className={`celular ${menu ? 'activo' : ' '}`}*/