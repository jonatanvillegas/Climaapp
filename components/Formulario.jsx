import useClima from "@/hooks/useClima"
import { useState } from "react"


export default function Formulario() {
    
    const [alerta, setAlerta] = useState('')
    const { busqueda, datosBusqueda, ConsultarApi } = useClima()
    const { ciudad, pais } = busqueda

    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(busqueda).includes('')) {
            setAlerta('llena el formulario')
            return
        }
        setAlerta('')
        ConsultarApi(busqueda)
    }

    return (
        <div className='contenedor'>
            {alerta && <p>{alerta}</p>}
            <form action="" onSubmit={e => handleSubmit(e)} >
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input type="text" id='ciudad' name='ciudad' onChange={datosBusqueda} value={ciudad} />
                </div>
                <div className="campo">
                    <label htmlFor="pais">Pais</label>
                    <select name="pais" id="pais" onChange={datosBusqueda} value={pais} >
                        <option value=""> -- Seleccione un pais --</option>
                        <option value="Us">Estados Unidos</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Peru</option>
                        <option value="NI">Nicaragua</option>
                    </select>
                </div>
                <input type="submit" value='Buscar' />
            </form>
        </div>
  )
}
