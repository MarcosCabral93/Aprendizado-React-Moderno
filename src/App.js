import React, {useState,useEffect,useMemo,useCallback} from 'react';
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


//atualiza sem renderizar a cada alteração no e.target.value
const contaItens=useMemo(()=>nome.length,[nome])


const handleAddNome=useCallback(()=>{
  usenome([...nome,input])
  useinput("")
},[input,nome])



  return (
    <div>
      <input type="text"  value={input} onChange={(e)=>useinput(e.target.value)}></input>
      <button type="button" onClick={handleAddNome}> add nome</button>
      <ul>
        {nome.map((item)=>
         
            <li key={item}> {item}</li>
        )}
        <h3>
          {contaItens} nomes cadastrados
        </h3>

      </ul>
      
    </div>
  );
}

export default App;
