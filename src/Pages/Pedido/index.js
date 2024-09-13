import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '../../assets/sacola.png';
import Trash from '../../assets/lixo.svg';
import H1 from '../../Componentes/Title'
import ContainerItens from '../../Componentes/ContainerItens';
import Button from '../../Componentes/Button';

import {
  Container,
  Image,
  Pedido,
} from './styles';

function Pedidos() {

  const [pedidos, setPedidos] = useState([]);


  useEffect(() => {
    async function fetPedidos() {
      const { data: newPedido } = await axios.get("http://localhost:3004/devburguer");
      
      setPedidos(newPedido);
    }

    fetPedidos()
   },[])
  

  async function deletePedido(pedidoId) {

    await axios.delete(`http://localhost:3004/devburguer/${pedidoId}`);

    const newPedido = pedidos.filter(pedido => pedido.id !== pedidoId);
    setPedidos(newPedido);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Pedidos</H1>

        <ul>
          {pedidos.map(pedido => (
            <Pedido key={pedidos.id}>
              <p> {pedido.pedido}</p>
              <p> {pedido.cliente}</p>
              <button onClick={() => deletePedido(pedido.id)}><img src={Trash} alt="lixeira" ></img></button>
            </Pedido>
          ))}
        </ul>

        <Button isBack={true} to="/" >Voltar </Button>

      </ContainerItens>
    </Container>);

}

export default Pedidos;
