import { use, useState } from 'react'
const Pedido = () => 
{
    return (
        <>
        <select value={empanadas.gusto}>
            <option value="Carne">Carne</option>
            <option value="JyQ">JyQ</option>
            <option value="Humita">Humita</option>
            <option value="Pollo">Pollo</option>
            <option value="Carne Picante">Carne picante</option>
            <option value="Verdura">Verdura</option>
        </select>
        <label>{`Ingrese la cantidad de ${empanadas.gusto} que va a desear`}</label>
        <input type="number" value={empanadas.cantidad} onChange={cambiosInput} name="cantidad" class="u-full-width"></input>
        </>
    )
}

export default Pedido;