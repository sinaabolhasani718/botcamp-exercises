import { useState } from "react";

function Tabs() {

    const [activeTab , setActiveTabe] = useState("TAB1")

  return (
    <div>
        <button onClick={()=>setActiveTabe("TAB1")}>Tab1</button>
    </div>
  )
}

export default Tabs