import { useEffect, useState } from "react";
import { supabase } from "./superbase";

function Supabase() {
  const [newtask, setnewtask] = useState({ ktiba: "" });
  const [showlista, setshowlista] = useState([]);
  const [newtask2, setnewtask2] = useState(""); // نص التعديل

  // إضافة مهمة
  const add = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("tasks")
      .insert(newtask)
      .select()
      .single();

    if (error) {
      console.error("error:", error.message);
      return;
    }

    // نضيف العنصر مباشرة للواجهة
    setshowlista((prev) => [...prev, data]);
    setnewtask({ ktiba: "" });
  };

  // جلب المهام عند تحميل الصفحة
  useEffect(() => {
    const silikti = async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        console.error(error.message);
        return;
      }
      setshowlista(data);
    };
    silikti();
  }, []);

  // حذف مهمة
  const del = async (id) => {
    const { error } = await supabase.from("tasks").delete().eq("id", id);
    if (error) {
      console.error("matsuprimatsh:", error.message);
      return;
    }

    setshowlista((prev) => prev.filter((item) => item.id !== id));
  };

  // تعديل مهمة
  const modi = async (id) => {
    const { error } = await supabase
      .from("tasks")
      .update({ ktiba: newtask2 })
      .eq("id", id);

    if (error) {
      console.error("update failed:", error.message);
      return;
    }

    // تحديث المهمة في الواجهة بعد التعديل
    setshowlista((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ktiba: newtask2 } : item))
    );

    setnewtask2(""); // تفريغ النص بعد التعديل
  };

  return (
    <div>
      <input
        id="dkhl"
        value={newtask.ktiba}
        onChange={(e) =>
          setnewtask((prev) => ({ ...prev, ktiba: e.target.value }))
        }
        type="text"
      />

      <button onClick={add} id="but">
        add
      </button>

      <div id="l7awi">
        {showlista.map((item) => (
          <div key={item.id}>
            <h1>{item.ktiba}</h1>
            <button onClick={() => del(item.id)}> delete </button>
            <textarea
              value={newtask2}
              onChange={(e) => setnewtask2(e.target.value)}
              placeholder="modifiet text"
            />
            <button onClick={() => modi(item.id)}> edit </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Supabase;


