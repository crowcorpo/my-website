
import { useEffect, useState } from "react";
import { supabase } from "./superbase";

function Signin2(){

    const [ user , setuser ] = useState(null);

    useEffect(() => {
        const chek = async () => {
            const { error , data } = await supabase.auth.getUser();
            if(!error) setuser(data.user)
        }
    chek()

        const { data: listener } =  supabase.auth.onAuthStateChange(
            (_event , session) => {
                setuser(session?.user ?? null)
            }
        );
        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const conikti = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                queryParams: {
                    prompt: "select_account",
                }
            }
        });
    }

    const diconikti = async () => {
        const { error } = await supabase.auth.signOut();
    }


    return(

        <div>
            { !user ? (
                <div>
                    <button onClick={conikti}> sign in with googel </button>
                    <h1> welcome visiter </h1>
                </div>
            ): (
                <div>
                    <img src={user.user_metadata.avatar_url} />
                    <button onClick={diconikti}> signout </button>
                    <p>{user.email}</p>
                    <h1> welcome admin </h1>
                </div>
            )
        }
        </div>
    );
}

export default Signin2;