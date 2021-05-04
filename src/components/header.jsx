export default function Header(){

    return(
        <div className="cabezera" id="cabezera">
            <div className="main">
                <img className="logo" src=".\Fallout_logo.svg" alt=""/>
                <h2>La guerra, la guerra nunca cambia</h2>
                <butoon className="btnmas" id="btnmas"><a href="#sinopsis"><p>Ver más
                    </p> <i class="fab fa-vuejs"></i></a></butoon>
            </div>
            <img className="complemento" src=".\img\main.png" alt=""/>
        </div>
    )
}