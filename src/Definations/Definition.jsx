import React from 'react'
import './Definition.css';

const Definition = ({word,category,meanings,lightTheme}) => {
  return (
    <div className='meaning' style={{scrollbarColor:lightTheme?'#000 #fff':'#fff #000'}}>
    {
      meanings[0] && word && category === "en" && (
        <audio style={{backgroundColor:'#fff',borderRadius:10}} src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio } controls>Your browser doesn't support audio</audio>
      )
    }
      {
        word === ""?<span className="subTitle">Start by typing a word in Search</span>:
        (
          meanings.map((mean)=>(
            mean.meanings.map((item)=>(
              item.definitions.map((def)=>(
                  <div className="singleMean" style={{backgroundColor:lightTheme?"#000":"white", color:lightTheme?"#fff":"black"}}>
                    <b>{def.definition}</b>
                    <hr style={{backgroundColor:"black",width:"100%"}}/>
                    {
                      def.example?
                        <span><b>Example:</b>{def.example}</span>
                      : <span>Example not available</span>
                    }
                    {
                      def.synonyms.map((syno)=>(
                        `${syno}, `
                      ))
                    }
                  </div>
              ))
            ))
           
          ))
        )
      }
    </div>
  )
}

export default Definition
