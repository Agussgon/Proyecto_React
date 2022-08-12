
// ruta imagen
//import logo from './logo.svg';
import Componente from './clase5/componenteFunction';
import './App.css';


//app es hija de index

const animales = [{nombre:"Juan",edad:2, raza:"gato",tamanio:"grande", sexo:"macho"}, 
{nombre:"Luna",edad:4, raza:"perro",tamanio:"pequeño", sexo:"hembra"},
{nombre:"Laika",edad:1, raza:"gato",tamanio:"pequeño", sexo:"macho"},
{nombre:"Luna",edad:4, raza:"perro",tamanio:"mediano", sexo:"hembra"}]

function App() {
  return (
    <div className="App">
      <Componente animal={animales}/>
    </div>
  );
}



// solo puedo exportar una funcion por defecto 
export default App;
