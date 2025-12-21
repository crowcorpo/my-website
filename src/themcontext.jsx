import { createContext, useState } from "react";


export const Longcontext = createContext();

export function Longprovider({children}) {

    const [ long , setlong ] = useState("en");
    const [ word , setword ] = useState("hello world");
    const [ them , setthem ] = useState("light");
    const [ wordclor , setwordcolor ] = useState("black");

    const change = () => {
        setlong( prev => ( prev == "en" ? "ar" : "en"  ));
        setword( prev => ( long == "en" ? "مرحبا عالم" : "hello world"  ));
    };
    const darkmode = () => {
        setthem( prev => ( them == "light" ? "dark" : "light" ));
        if(them == "dark"){
            setwordcolor("white");
        }else{
            setwordcolor("black");
        }
    }

    return (
        <Longcontext.Provider value={{ long , word , change , them , wordclor , darkmode }} >
            {children}
        </Longcontext.Provider>
    )
}