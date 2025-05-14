import { use, useState } from 'react'
import Pedido from '../Pedido';


const Listado = ({Pedido}) => {
    const totalesGustos = {
        Carne:0,
        JyQ:0,
        Humita:0,
        Pollo:0,
        Carne_picante:0,
        Verdura:0 
    }
    pedido.forEach(Pedido => {
        pedido.gustos.gusto.forEach (g => {
            totalesGustos[g.gusto] += g.cantidad
        })
    });
}   
    return(
        <div>
            <h1>Total Empanadas Por Gutso</h1>

            <h3>Carne: {totalesGustos.Carne}</h3>
            <h3>JyQ: {totalesGustos.JyQ}</h3>
            <h3>Humita: {totalesGustos.Humita}</h3>
            <h3>Pollo: {totalesGustos.Pollo}</h3>
            <h3>Carne Picante: {totalesGustos.Carne_picante}</h3>
            <h3>Verdura: {totalesGustos.Verdura}</h3>

            <h1>Pedidos por persona</h1>
            {pedido.map ((pedido) => (
                <>
                <p>{pedido.nombre}</p>
                <h3>
                    {pedido.gustos.map ((g,j) =>(
                        <li key={j} > {g.cantidad} de {g.gustos}</li>
                    ))}
                </h3>

                </>
            ))}
        </div>
    )
  export default Listado;