
import Layout from "../clase6/Layout.js";

function Componente(props) {
    const animales = props.animal.map((animal) => 
   
    <div className="container">
        <h3>Nombre de la mascota </h3>
        <h2>  {animal.nombre}</h2>
        <p>edad: {animal.edad}</p>
        <p>raza: {animal.raza}</p>
        <p>tamaño: {animal.tamanio}</p>
        <p>sexo: {animal.sexo}</p>
    </div>
    
    )
    return ( <Layout><section>{animales}</section></Layout>
    )
}

export default Componente;