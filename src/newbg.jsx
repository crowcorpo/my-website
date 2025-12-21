
import { supabase } from "./superbase";

import { useState } from 'react';

function Newbg() {

  const [ tswira , settswira ] = useState("");

  const partagi = async (e) => {
    const dosi = e.target.files[0];
    if(!dosi) return;

    const asmtswira = `public/${Date.now()}_${dosi.name}`

    const { error , data } = await supabase.storage
    .from("images")
    .upload(asmtswira , dosi ,{
      cacheControl: "3600",
      upsert: false,
      contentType: dosi.type,
    });
    await new Promise((res) => setTimeout(res, 400));

    const { data: publicData } = supabase.storage
    .from("images")
    .getPublicUrl(asmtswira);
    
    settswira(publicData.publicUrl);
  }
  

  return(
    
    <div>

      <input type="file" onChange={partagi} />
      { tswira && <img src={tswira} alt="" /> }

    </div>
  );
}

export default Newbg;

