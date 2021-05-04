export default function Galeria(){

    return(
        <div className="galera">
            <div className="lightbox" id="lightbox"><span id="salida"></span>
                <div className="image" id="image">
                    <img src="./img/1.jpg" alt="" id="imagenLightbox"/>
                    <span id="nombre"><i class="fas fa-times"></i></span>
                </div>
            </div>

            <div className="galeria" id="galeria" >
                <h1>Galería</h1>
                <div className="contenedors">
                    <div className="imagen"><img src=".\img\g1.jpg" alt="" className="img"/></div>
                    <div className="imagen"><img src="\img\g2.jpg" alt="" className="img"/></div>
                    <div className="imagen"><img src="\img\g3.jpg" alt="" className="img"/></div>
                    <div className="imagen"><img src="\img\g4.jpg" alt="" className="img"/></div>
                    <div className="imagen"><img src="\img\g5.2.png" alt="" className="img"/></div>
                    <div className="imagen"><img src="\img\g6.jpg" alt="" className="img"/></div>
                    <div className="imagen"><img src="\img\g7.jpg" alt="" className="img"/></div>
                    <div className="imagen"><img src="\img\g8.jpg" alt="" className="img"/></div>
                    <div className="imagen"><img src="\img\g9.jpg" alt="" className="img"/></div>
                </div>
            </div>
        </div>
    )
}