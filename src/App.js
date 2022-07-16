

import axios from 'axios';
import { useEffect,useState } from 'react';
import Container from '@mui/material/Container';
import './App.css';
import Header from './components/Header';
import Definition from './Definations/Definition';
// import Switch from '@mui/material/Switch';
// import {WiMoonAltFull}  from "react-icons/wi";
import { BsMoonFill,BsMoon } from "react-icons/bs";


function App() {
  const [word,setWord] = useState("");
  const [category,setCategory] = useState('en');
  const [meanings, setMeanings] = useState([]);
  const[lightTheme,setLightTheme] = useState(false);

  // const label = { inputProps: { 'aria-label': 'Switch demo' } };

  
  const dictionaryApi = async()=>{
    try{
       const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
       console.log(res.data);
       setMeanings(res.data);
    }catch(err){
           console.log('Error: ' + err);
    }
  }

  useEffect(() => {
  
   dictionaryApi();
  //  eslint-disable-next-line
  },[word,category]);

  return (
    <div className='App' style={{height:"100vh" , backgroundColor:lightTheme?'#fff':'#282c34',color:lightTheme?'black':'white'}}>
       <Container maxWidth='md' style={{flexDirection:'column',height:'100vh',justifyContent:"space-evenly"}}>
       <div style={{position:"absolute",top:0,right:15,padding:10}}>
            
            {/* <Switch {...label} onChange={(e)=>setLightTheme(!lightTheme)} /> */}
          {
            lightTheme?
            <BsMoonFill style={{fontSize:'4vw'}} onClick={(e)=>setLightTheme(!lightTheme)}/>:
             <BsMoon style={{fontSize:'4vw'}} onClick={(e)=>setLightTheme(!lightTheme)}/>
          }
            {/* <WiMoonAltFull style={{fontSize:30}}/> */}
       </div>
          <Header category={category} setCategory={setCategory} word={word} setWord={setWord} lightTheme={lightTheme}/>
          {meanings && <Definition word={word} meanings={meanings} category={category} lightTheme={lightTheme}/>}
       </Container>
    </div>
  );
}

export default App;
