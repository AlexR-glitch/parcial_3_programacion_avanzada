export default function Formulario(){

    return(
        <form>
        <h1>Contactanos</h1>
        <div className="formas">
            <input type="text" name="Nombres" id="Nombres"/>
            <input type="text" name="Apellidos" id="Apellidos"/>
            <input type="email" name="Correo" id="Correo"/>
            <input type="text" name="Escribe tu mensaje" id="mensaje"/>
            <input type="button" value="enviar"/>
        </div>
        </form>
    )
}