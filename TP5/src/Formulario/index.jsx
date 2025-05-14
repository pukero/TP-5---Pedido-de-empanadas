import { use, useState } from 'react'
import Pedido from '../Pedido';

const Form = () => 
{
    const [empanadas, setEmpanadas] = useState({
        sector: "",
        nombre: "",
        pedido: [
            {
                gusto: "",
                cantidad: 0
            }
        ]
    });
    const handleSubmit=(e)=>
    {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingrese su nombre'></input>
        <select value={empanadas.sector}>
            <option value="Sistemas">Sistemas</option>
            <option value="Finanzas">Finanzas</option>
            <option value="Ventas">Ventas</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Soporte">Soporte</option>
            <option value="Deposito">Deposito</option>
        </select>
        <Pedido />
        <button>Agregar Empanada</button>
        </form>
    )
}
export default Form