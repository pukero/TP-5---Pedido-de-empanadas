import { use, useState } from 'react'
import Pedido from '../Pedido';
import Listado from '../Listado';
import './Form.css';


const Form = () => 
{
    const [pedido, setPedido] = useState({
        sector: "",
        nombre: "",
        gustos: [{}]
    });
    const handleSubmit=(e)=>
    {
        e.preventDefault()
    }

    const agregarGusto = () => {
        setPedido({
            ...pedido,
            gustos: [
                ...pedido.gustos,
                {}
            ]
        })
    }
 
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingrese su nombre'></input>
        <select>
            <option value="Sistemas">Sistemas</option>
            <option value="Finanzas">Finanzas</option>
            <option value="Ventas">Ventas</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Soporte">Soporte</option>
            <option value="Deposito">Deposito</option>
        </select>
        { pedido.gustos.map(p => <Pedido />) }
        <button onClick={agregarGusto}>Agregar Empanada</button>
        <button type="submit" class="u-full-width button-primary">Finalizar Pedido</button>
        </form>
    )
}
export default Form