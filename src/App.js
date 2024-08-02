import logo from './logo.svg';
import './App.css';

import IplHeading from './components/ipl/iplheading';
import IplCups from './components/ipl/iplcups';
import CustomIplData from './components/ipl/ipldata';
import Iplplayers from './components/ipl/iplPlayers';
import IplImage from './components/ipl/iplimage';

const App = () => (
  <div>

    {CustomIplData.map((eachImg) => (
      
      <div  key={eachImg.team} style={{height:"400px",  width:"300px", border:"2px solid black", margin:100}}>
         
        <IplHeading team={eachImg.team}/> 
        <IplImage  
          source={eachImg.jerseyimg}
          alternate="ipl image"
          width={200}
          height={200}/>
        <Iplplayers players={eachImg.players}/>
        <IplCups cups={eachImg.cups}/>

      </div>
    ))}
  </div>
);

export default App;