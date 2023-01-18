import useClima from "@/hooks/useClima"
import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from "./Spinner"

export default function AppClima() {

  const {resultado,loader,noResultado} = useClima()

  return (
    <>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <main>    
      <div className='dos-columnas'>
        <Formulario/>

        {
          loader ? <Spinner/> : 
          resultado?.main ? <Resultado/> :
          noResultado ? <p>{noResultado}</p>
          : <p>El clima se va a mostrar aquí</p>
          
        }

      </div>
    </main>
    </>
  )
}
