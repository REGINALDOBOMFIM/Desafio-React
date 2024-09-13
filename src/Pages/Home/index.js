import React, { useState, useRef, } from 'react';
import axios from 'axios';
import Logo from '../../assets/logo.png';
import H1 from '../../Componentes/Title';
import ContainerItens from '../../Componentes/ContainerItens';
import Button from '../../Componentes/Button';

import {
  Container,
  Image,
  InputLabel,
  Input,
} from './styles';

function App() {

  const [pedidos, setPedidos] = useState([]);
  const inputPedido = useRef();
  const inputCliente = useRef();

  async function addNewPedido() {

    const { data: newPedido } = await axios.post("http://localhost:3004/devburguer",
      {
        pedido: inputPedido.current.value,
        cliente: inputCliente.current.value,
      });

    setPedidos([...pedidos, newPedido])

  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Logo} />
      <ContainerItens>
        <H1>Faça o seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputPedido} placeholder='Itens' />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputCliente} placeholder='Cliente' />

        <Button to="/pedidos" onClick={addNewPedido}>Novo Pedido</Button>

      </ContainerItens>
    </Container>);

}

export default App;
