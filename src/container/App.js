
// ruta imagen
//import logo from './logo.svg';
import Componente from '../components/clase5/componenteFunction';
import '../styles/App.css';
import ClassComponent from '../components/clase6/ClassComponent';
import FunctionComponent from '../components/clase6/FunctionComponent';

//app es hija de index

const animales = [{nombre:"Juan",edad:2, raza:"gato",tamanio:"grande", sexo:"macho"}, 
{nombre:"Luna",edad:4, raza:"perro",tamanio:"pequeño", sexo:"hembra"},
{nombre:"Laika",edad:1, raza:"gato",tamanio:"pequeño", sexo:"macho"},
{nombre:"Luna",edad:4, raza:"perro",tamanio:"mediano", sexo:"hembra"}]

function App() {
  return (
    <div className="App">
      <Componente animal={animales}/>
   
    <h3>Invitados:</h3>
    <ClassComponent nombre="Nicolas" estaEnLista={true} />
    <ClassComponent nombre="Ivan" estaEnLista={false} />
    <ClassComponent nombre="Carolina" estaEnLista={true} />
    <h3>Tareas: </h3>
    <FunctionComponent nombre="Nicolas" tarea="papas fritas"/>
    <FunctionComponent nombre="Ivan" tarea="pizzas" />
    <FunctionComponent nombre="Carolina" tarea="bebidas" />
    </div>
  );
}



// solo puedo exportar una funcion por defecto 
export default App;
