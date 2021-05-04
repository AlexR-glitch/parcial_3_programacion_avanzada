    export default function Menu(){
    return(
    <div className="barra">
        <div className="menu">
            <a href="#sinopsis"><i class="fas fa-radiation"></i> Sinopsis</a>
            <a href="#faccion"><i class="fas fa-radiation"></i> Facciones</a>
            <a href="#galeria"><i class="fas fa-radiation"></i> Galeria</a>
            <a href="#final"><i class="fas fa-radiation"></i> Contacto</a>
        </div>

    <div class="degradado" id="degradado"></div>

    <nav class="celular" id="celular">
        <a href="#sinopsis" class="enlace">Sinopsis</a>
        <a href="#faccion" class="enlace">Facciones</a>
        <a href="#galeria" class="enlace">Galeria</a>
        <a href="#final" class="enlace">Contacto</a>
        <div class="salir" id="salida">salir</div>
    </nav>

    <div class="btnmenu" id="btnmenu"><i class="fas fa-radiation"></i></div>
        </div>

    )
}
