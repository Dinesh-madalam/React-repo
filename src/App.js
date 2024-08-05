import logo from './logo.svg';
import './App.css';

import  { recipes } from './recipe/data';
import { Heading } from './recipe/heading';
import { Image } from './recipe/image';
import { Name } from './recipe/name'; 
import CustomList from './recipe/list';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./recipe.css"
function App () {
  return (
    <>
    
      <div className='Menu'>
        {
          recipes.map((each)=>(
            <div className='Food' >
              <Heading item_Name={each.name}/>
              <Image path={each.image} alter={each.name} height={150} width={150}/>
              <Name Text={"Ingredients"}/>
              <CustomList array={each.ingredients}/>
              <Name Text={"Instructions"} />
              <CustomList array={each.instructions}/>
              
            </div>
          ))
        }
      </div>   
    </>
  )
}

export default App;

