import Colaborador from '../Colaborador'
import './time.css'


const Time = (props) =>{
    return(
         
       (props.colaboradores.length  > 0) ? <section className='time'  style={{backgroundColor: props.corSecundaria}}>
            <h3 style ={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
             {props.colaboradores.map( colaborador => <Colaborador key= {colaborador.nome} nome = {colaborador.nome} cargo ={colaborador.cargo} imagem ={colaborador.imagem} cordeFundo={props.corPrimaria}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time