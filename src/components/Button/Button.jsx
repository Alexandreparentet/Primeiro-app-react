import './Button.css'

export default function Button(props) {
    return(
        <>
        <button type={props.titulo} className={props.class}>
            {props.titulo}
        </button>
        
        </>
    )
}

/* props do button
    -titulo (cadastrar, login, limpar...)
    -tipo (submit, button, reset)
    -class (erro, sucesso, alerta)
*/