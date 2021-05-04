export default function Formulario(){

    return(
        <div className="zonaGeneral"  id="final">
            <h1>Contactanos</h1>
            <div className="zonaF">
                <form>
                    <h2>Nombres</h2>
                    <input type="text"/>
                    <h2>Apellidos</h2>
                    <input type="text"/>
                    <h2>Email</h2>
                    <input type="text"/>
                    <h2>Escribe tu mensaje</h2>
                    <textarea className="tipeo" rows="8" cols="9"/>
                    <div className="btn"> 
                        <input type="submit" value="Enviar" className="btnS" />
                    </div>
                </form>
            <div className="redes">
                <i class="fab fa-discord"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-reddit-alien"></i>
                <div className="text">
                    <h2>Bethesda_es@outlook.com</h2>
                    <h2>001-7664-5432</h2>
                </div>
            </div>
            </div>
        </div>
    )
}