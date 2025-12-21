import { useState } from "react";
import like from "./assets/like.png";

function Comonti() {

    const [value, setvalue] = useState("");
    const [value2, setvalue2] = useState("");
    const [comnt, setcomnt] = useState([]); 
    const [comnt2, setcomnt2] = useState([]); 
    const [display, setdisplay] = useState({
        one: false,
        two: false,
        tree: true,
        four: false,
        five: true,
        six: false
    });
    const [num, setnum] = useState([]);

    const dkhl = (e) => {
        setvalue(e.target.value);
    }
    const dkhl2 = (e) => {
        setvalue2(e.target.value);
    }

    const afishi = () => {
        if (value.trim() === "" ) return;

        setcomnt([...comnt, value]);
        setnum([...num, 0]); 

        setvalue("");
    }
    const afishi2 = () => {
        if (value2.trim() === "" ) return;

        setcomnt2([...comnt2, value2]);
        setvalue2("");
        setdisplay(prev => ({ ...prev, four: false }));
        setdisplay(prev => ({ ...prev, six: false }));
        setdisplay(prev => ({ ...prev, tree: true }));
        setdisplay(prev => ({ ...prev, five: true }));
    }

    const suprimi = (index) => {
        const am7i = comnt.filter((_, i) => i !== index);
        const am7iLikes = num.filter((_, i) => i !== index);

        setcomnt(am7i);
        setnum(am7iLikes);
    }

    const addLike = (index) => {
        const update = [...num];
        update[index]++;
        setnum(update);

        setdisplay(prev => ({ ...prev, one: true })); 
    }

    const repondi = () => {
        setdisplay(prev => ({ ...prev, two: true }));
        setdisplay(prev => ({ ...prev, tree: false }));
        setdisplay(prev => ({ ...prev, four: true }));
        setdisplay(prev => ({ ...prev, five: false }));
        setdisplay(prev => ({ ...prev, six: true }));
    }

    return (
        <div>
            { display.tree && <input value={value} onChange={dkhl} id="dkhl" type="text" placeholder="put your comment" />}
            { display.five && <button onClick={afishi} id="add"> + </button>}
            { display.six && <button onClick={afishi2} id="add"> + </button>}
            { display.four && <input value={value2} onChange={dkhl2}  id="dkhl2" type="text" placeholder="reponde" />}

            <div id="cm7awi">
                {comnt.map((item, index) => (
                    <div id="cm7awi2" key={index}>
                        <p>{item}</p>

                        <img onClick={() => addLike(index)} src={like} />
                        <span>{num[index]}</span>

                        <button onClick={() => suprimi(index)}>delete</button>
                        <button onClick={repondi}>reponde</button>
                    </div>
                ))}
            </div>

            {display.two && <div>
                {comnt2.map((item , index) => (
                    <div key={index} id="l7awi3">
                        <p> {item} </p>
                        <p>ouguyfiy</p>
                    </div>
                ))}
            </div>}
            
        </div>
    );
}

export default Comonti;



