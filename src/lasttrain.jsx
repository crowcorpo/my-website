import { useState } from "react";


function Lasttrain(){

    const [ textvalue , settextvalue ] = useState("");
    const [ lista , setlista ] = useState([]);


    const change = (e) => {
      const value = (e.target.value)
      settextvalue(value)
    }
    const add = () => {
      if (!textvalue.trim()) return;
      setlista([...lista , { text: textvalue , checked: false } ]);
      settextvalue("");
    }
    const tbdila = (index) => {
      const update = [... lista];
      update[index].checked = !update[index].checked;
      setlista(update);
    }
    const suprimi = (index) => {
      const am7i = lista.filter((_ , i) => i !== index);
      setlista(am7i);
    }
    const modi = (index) => {
      const newtext = prompt( lista[index].text )
      if( newtext !== null && newtext.trim() !== "" ){
        const t7wila = [... lista];
        t7wila[index].text = newtext;
        setlista(t7wila) ;
      }
    }

    return(
        <div>
            <input value={textvalue} onChange={change} id="dkhl" type="text" />
            <button onClick={add} id="plus"> + </button>

              {lista.map((asm , index) => (
                <div id="l7awi" key={index}>
                   <p style={{ textDecoration: asm.checked ? "line-through" : "none" }}> {asm.text} </p>
                   <input checked={asm.checked} onChange={ () => tbdila(index)} type="checkbox" />
                   <button onClick={ () => modi(index) }> edit </button>
                   <button onClick={ () => suprimi(index)}> delete </button>
                  </div>
              ))}  
        </div>
    );
}

export default Lasttrain;