import './CardImovel.css';

export default function CardImovel(props) {
    return(
        <>
        <article id={props.id} className='imovel'>
            
            {/* TO DO LOGIN */}

            <div className='foto'>
                <img src={props.foto} alt="" />
            </div>

            <div className='conteudo'>
                <h3>{props.titulo}</h3>

                <p>{props.descricao}</p>            
            </div>

            <div className='info'>
                <div>
                    <div>
                        Localização:
                        {props.localizacao}
                    </div>

                    <span>
                        Quartos:
                        {props.quartos}
                    </span>

                    <span>
                        Área: {props.area} m²
                    </span>

                    <div className="valor-imovel">
                    {props.valor.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                    })}
                    </div>
                
                </div>           
            </div>    

        </article>
        
        </>
    );
}