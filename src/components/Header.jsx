import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material';
import React from 'react'
import './Header.css';
import Categories from '../Data/Category';

const Header = ({category,setCategory,word,setWord,lightTheme}) => {
    const darkTheme = createTheme({
        palette: {
            type: lightTheme ? "light" : "dark",
          primary:{
            main:lightTheme?'#000':'#fff'
          }
        },
      });

  return (
    <div className='header'>
       <span className="title">{word?word:'Word Hunt'}</span>
       <div className="inputs">
       <ThemeProvider theme={darkTheme}>
       <TextField className='search' label="Search a word" variant="standard" value={word} onChange={(e)=>setWord(e.target.value)}/>
       <TextField
          className='select'
          select
          label="Select"
           value={category}
           onChange={(e)=>{
            setCategory(e.target.value);
            setWord("");
            }}
          helperText="Please select a language"
        >
        {
            Categories.map((language)=>(
               <MenuItem key={language.label} value={language.label}>{language.value}</MenuItem>
            ))
        }
        </TextField>
       </ThemeProvider>
       </div>
    </div>
  )
}

export default Header
