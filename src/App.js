import React, {useState,useEffect} from 'react';
import './App.css';

function App() {
const[nome,usenome]=useState([]);
const [input,useinput]=useState('');

useEffect(()=>{
  let local=localStorage.getItem('nome')
  if(local){
    usenome(JSON.parse(local))
  }

},[])

useEffect(()=>{
  //armazena no localstorage o array de nomes
  localStorage.setItem('nome', JSON.stringify(nome));
  //state que ele fica monitorando
  },[nome])





function handleAddNome(){
  usenome([...nome,input])
  useinput("")
}



  return (
    <div>
      <input type="text"  value={input} onChange={(e)=>useinput(e.target.value)}></input>
      <button type="button" onClick={handleAddNome}> add nome</button>
      <ul>
        {nome.map((item)=>
         
            <li key={item}> {item}</li>
        )}

      </ul>
      
    </div>
  );
}

export default App;
