import axios from "axios";
import { createContext, useState } from "react";

const ClimaContext = createContext()

function ClimaProvider({children}){

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })
    const [resultado, setResultado ] = useState({})
    const [loader, setLoader] = useState(false)
    const [noResultado, setNoResultado] = useState(false)

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    const ConsultarApi = async datos =>{

        setLoader(true)
        setNoResultado(false)

        try {
            const {ciudad, pais} = datos

            const appId = process.env.NEXT_PUBLIC_ApiKey
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            const {data} = await axios(url)
            const {lat, lon} = data[0]
            
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const {data: clima} = await axios(urlClima)

            setResultado(clima)

        } catch (error) { 
           setNoResultado('No hay resultados')
        }finally{
            setLoader(false)
        }
        

    }

    return(
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                ConsultarApi,
               resultado,
               loader,
               noResultado
               
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export{
    ClimaProvider
}
export default ClimaContext 

/* const [busqueda, setBusqueda]= useState({
        ciudad: '',
        pais:''
    })

    const datosBuscar = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    console.log(busqueda)*/