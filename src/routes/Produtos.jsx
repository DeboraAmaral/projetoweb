import { Component } from 'react';
import Nav from "../componentes/Nav"
import Footer from "../componentes/Footer"
import "./Produtos.css"

class Produtos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        { id: 1, description: 'Tostex'},
        { id: 2, description: 'Bowl de Tofu Scramble' },
        { id: 3, description: 'Torrada Caseira' },
        { id: 4, description: 'Pão de Polvilho' },
        { id: 5, description: 'Granola' },
        { id: 6, description: 'Salada de Frutas' },
        { id: 7, description: 'Omelete Vegano' },
        { id: 8, description: 'Beiju Recheado' },
        // Adicione mais pedidos aqui
      ],
      editingOrder: null,
      newOrderDescription: '',
    };
  }

  handleNewOrder = () => {
    const { newOrderDescription, orders } = this.state;

    // Verifique se a descrição não está vazia
    if (newOrderDescription.trim() === '') {
      alert('Por favor, insira uma descrição válida para o pedido.');
      return;
    }

    // Encontre o próximo ID disponível para o novo pedido
    let nextOrderId = 1;
    if (orders.length > 0) {
      nextOrderId = Math.max(...orders.map((order) => order.id)) + 1;
    }

    // Crie um novo pedido
    const newOrder = {
      id: nextOrderId,
      description: newOrderDescription,
    };

    // Adicione o novo pedido à lista de pedidos
    const updatedOrders = [...orders, newOrder];

    // Atualize o estado
    this.setState({
      orders: updatedOrders,
      newOrderDescription: '', // Limpe o campo de descrição
    });
  };

  handleEditOrder = (id) => {
    // Configurar o estado para a edição do pedido com base no ID
    const orderToEdit = this.state.orders.find((order) => order.id === id);
    this.setState({ editingOrder: orderToEdit });
  };

  handleSaveEditedOrder = () => {
    // Lógica para salvar as alterações feitas no pedido editado
    // Atualize o estado e limpe o pedido em edição
    const updatedOrders = this.state.orders.map((order) => {
      if (order.id === this.state.editingOrder.id) {
        return this.state.editingOrder;
      }
      return order;
    });
    this.setState({ orders: updatedOrders, editingOrder: null });
  };

  handleCancelEdit = () => {
    // Cancelar a edição e limpar o estado do pedido em edição
    this.setState({ editingOrder: null });
  };

  handleDeleteOrder = (id) => {
    // Lógica para excluir um pedido com base no ID
    const updatedOrders = this.state.orders.filter((order) => order.id !== id);
    this.setState({ orders: updatedOrders });
  };

  render() {
    const { orders, editingOrder } = this.state;

    return (
      <>
      <Nav /> 
        <div>
            <h1>Produtos</h1>
            <button onClick={this.handleNewOrder}>Cadastrar Novo Pedido</button>
            <input
                type="text"
                placeholder="Descrição do Novo Pedido"
                value={this.state.newOrderDescription}
                onChange={(e) => this.setState({ newOrderDescription: e.target.value })} />
            {editingOrder ? (
            <div>
                <h2>Editando Pedido</h2>
                <input
                type="text"
                value={editingOrder.description}
                onChange={(e) => this.setState({ editingOrder: { ...editingOrder, description: e.target.value } })}
                />
                <button onClick={this.handleSaveEditedOrder}>Salvar</button>
                <button onClick={this.handleCancelEdit}>Cancelar</button>
          </div>
            ) : (
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                    <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.description}</td>
                    <td>
                        <button onClick={() => this.handleEditOrder(order.id)}>Editar</button>
                        <button onClick={() => this.handleDeleteOrder(order.id)}>Excluir</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </div>
        <Footer />
      </>
    );
  }
}

export default Produtos;
