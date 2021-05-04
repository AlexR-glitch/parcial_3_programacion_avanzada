export default function Contenido(){

    return(
        <section className="contenidos">
                <div className="cuerpo">
                    <div className="wip" id="sinopsis" >
                        <h1>Sinopsis</h1>
                        <p>Fallout tiene lugar en un escenario en el 
                        que los Estados Unidos se han visto 
                        envueltos en una guerra nuclear mundial, 
                        lo que ha degenerado en un mundo postapocalíptico al estilo de Mad Max. <br/> <br/>
                        El protagonista de Fallout es un habitante 
                        de uno de los búnkeres antinucleares 
                        construidos por una empresa de 
                        tecnología llamada Vault-Tec con la idea 
                        de preservar la vida humana hasta que el 
                        invierno nuclear haya pasado. <br/><br/>
                        Si el jugador consigue el nuevo chip antes de cumplirse 150 días de misión descubrirá que existe una nueva amenaza, y será enviado a dos nuevas misiones. Un mutante conocido como El Maestro (anteriormente conocido como Richard Grey) ha comenzado a usar un virus genéticamente modificado para crear una raza de Súper-Mutantes. El jugador debe vencer al Maestro y destruir la base de los Super-Mutantes. Una vez superada esta prueba, se ve una secuencia de animación y el jugador regresa automáticamente al búnker 13, pero allí se le dice que ha cambiado demasiado y que su presencia puede influir negativamente en los habitantes del búnker, ya que los más jóvenes querrán imitar sus acciones, y como única recompensa obtiene el exilio. Es importante aclarar que después de 500 días de juego, se mostrará el final malo, en el que los mutantes encontrarán y arrasarán el búnker 13, provocando el final del juego. El límite se reduce a 400 días si la Caravana del Agua es enviada al búnker (aunque este gesto aumenta a 230 días el límite para encontrar el Chip de Agua).
                        </p>
                    </div>
                </div>
            <div className="faccion" id="faccion" >  
                <h1>Elige tu bando</h1>
                <div className="nano">
                    <img className="roto" src="./img/1-01-01.svg" alt="La Republica de Nueva California"/>
                    <img className="roto" src="./img/02.svg" alt="La Hermandad del Acero"/>
                    <img className="roto" src="./img/03.svg" alt="El Instituto"/>
                    <img className="roto" src="./img/04.svg" alt="El Ferrocarril"/>
                    <img className="roto" src="./img/05.svg" alt="Los Minuteman"/>
                    <img className="roto" src="./img/06.svg" alt="El Enclave"/>
                    <img className="roto" src="./img/07.svg" alt="La Legion de Cesar"/>
                </div>
                
            <div className="caja" id="caja"><span id="exit"><i class="fas fa-times"></i></span>
                <div className="facto" id="facto">
                    <img src="./img/07.svg" alt="" id="imagenLightbox"/>
                    <span id="nombre"></span>
                </div>
            </div>
            </div>
        </section>
    )
}