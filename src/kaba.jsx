import { useState } from "react";

function Kaba(){

    const [ lbsa , setlbsa ] = useState([ "swite1" , "swite2" , "swite3" ]);
    const [ num , setnum ] = useState([1 , 1 , 1]);
    const [ sla , setsla ] = useState([]);
    const [ display , setdisplay ] = useState(false);
    const [ number , setnumber ] = useState(0);

    const plus = (i) => {
        const update = [... num];
        if(update[i] < 10){
            update[i]++;
            setnum(update);
        }
    }

    const moin = (i) => {
        const update = [... num];
        if(update[i] > 0){
            update[i]--;
            setnum(update);
        }
    }

    const ajouti = (i) => {
        setsla([...sla, { name: lbsa[i], quantity: num[i] }]);
        setnumber(sla.length + 1);
    }

    const suprimi = (i) => {
        const newsla = sla.filter((_, index) => index !== i);
        setsla(newsla);
        setnumber(newsla.length);

        if(newsla.length === 0){
            setdisplay(false);
        }
    }

    const show = () => {
        if(sla.length === 0) return;
        setdisplay(!display);
    }

    return(
        <div>
            {lbsa.map((item , index) => (
                <div key={index} id="l7awi">
                    <p>{item}</p>
                    <div id="hsab">
                        <p onClick={() => plus(index)}>+</p>
                        <p>{num[index]}</p>
                        <p onClick={() => moin(index)}>—</p>
                    </div>
                    <button onClick={() => ajouti(index)}>add</button>
                </div>
            ))}

            <button onClick={show} id="kfla">sla</button>

            {display && (
                <div id="box">
                    {sla.map((pp , i ) => (
                        <div key={i} id="l7awi2">
                            <p>{pp.name}</p>
                            <p>{pp.quantity}</p>
                            <button onClick={() => suprimi(i)}>delete</button>
                        </div>
                    ))}
                </div>
            )}

            <p id="num">{number}</p>
        </div>
    );
}

export default Kaba;
