import { useState } from "react";

function Color(){
      const [color,setColor]=useState('olive');

    
  return (
  
  <div className=" w-full h-screen duration-200 " style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center shadow-lg gap-5 bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-600"  onClick={()=>setColor('red')}>Red</button>
        <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-yellow-300" onClick={()=>setColor('yellow')}>Yellow</button>
        <button className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-green-600" onClick={()=>setColor('green')}>Green</button>
        
      </div>
    </div>
  </div>
)
}
export default Color;