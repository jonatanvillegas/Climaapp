import useClima from '@/hooks/useClima'


export default function Resultado() {

  const {resultado} = useClima()
  const {name, main} = resultado

  const convertir = cantidad =>{
    return parseInt(cantidad - 273.15)

  }
  return (
    <div className='contenedor clima'>
      <h2>Clima de {name} es:</h2>
      <p>
         {convertir(main.temp)} <span>&#x2103;</span>
      </p>

      <div className='alinear'>
        <p>
           Minima {convertir(main.temp_min)} <span>&#x2103;</span>
        </p>
        <p>
          Maxima {convertir(main.temp_max)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  )
}
