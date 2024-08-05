import logo from './logo.svg';
import './App.css';

import Customcard from './components/card/card';
import { recipes } from './recipe/data';
import Conditionalrendering from './components/conditional/conditional-rendering';


const arr=[1,2,3,4,5,5]
function App () {
  return (
    
       <div className='App'>
      <div className='flex'>
        {
          recipes.length?(recipes.map((eachItem) => {
           
            return(
              
           <>
           <Conditionalrendering array={arr}/>
           <Customcard  item={eachItem}></Customcard>
          
           </>
             
          );
          })):
        
              <h6>Content not found or List is empty</h6> 
        }    
      </div>
        
      <div>
        {
          recipes.map((eachItem) => {
            var c="";
            var c = eachItem.id%2==0?"d1":"d2"; 
            var status = eachItem.id%2==0?"even":"odd"; 

            return(

              <>
              <div className={c} style={{width:'80px' , height:'50px', display:"inline-block" , margin:"10px"}}>
              </div>
              <div style={{display:"inline-block"}}>This is {status}</div><br/>
              </>
            );
          })
        }
      </div>
    </div>
  );
}    
     
     


export default App;

