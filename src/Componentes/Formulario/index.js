import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario= (props)=>{
    
    //
    const[nome,setnome] = useState('')
    const[cargo,setcargo] = useState('')
    const[imagem ,setimagem] = useState('')
    const[time ,settime] = useState('')

    const aoSalvar =(evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
       })
       setnome('')
       setcargo('')
       setimagem('')
       settime('')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
            obrigatorio={true} 
            label = 'Nome' 
            placeholder ='Digite seu nome'
            valor={nome}
            aoAlterado ={valor => setnome(valor)}
            />
            <CampoTexto 
            obrigatorio={true} 
            label = 'Cargo' 
            placeholder ='Digite seu Cargo'
            valor={cargo}
            aoAlterado = {valor => setcargo(valor)}
            />
            <CampoTexto 
            label = 'Imagem' 
            placeholder ='Digite o endereço da imagem'
            valor={imagem}
            aoAlterado = {valor => setimagem(valor)}
            />
            <ListaSuspensa  
            obrigatorio={true} 
            label = 'Time' 
            itens = {props.times}
            valor = {time}
            aoAlterado = {valor => settime(valor)}
            />
            <Botao>
                {/* Se colocar assim ele pega o que estiver aqui para o botao usando children lá pode ser inclusive imagem */}
                Criar Card
            </Botao>
            </form>
        </section>
    )

}

export default Formulario