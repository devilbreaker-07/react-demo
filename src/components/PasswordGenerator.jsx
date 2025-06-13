import { useCallback, useEffect, useState } from "react"


 const PasswordGenerator = () => {
                const [length,setLength]=useState(8)
                const [numberAllowed,setNumberAllowed]=useState(false)
                const[symbolAllowed,setSymbolAllowed]=useState(false)
                const[password,setPassword]=useState('')


                const generatorPassword=useCallback(()=>{
                    let pass='';
                    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

                      if(numberAllowed) str+="1234567890"
                      if(symbolAllowed) str+="~!@#$%^&*()_+-=`"
                      
                      for(let index=1;index<length;index++){
                            const value=Math.floor(Math.random()*str.length+1);
                           
                                pass+=str.charAt(value);
                      }


                      setPassword(pass);

                },[length,numberAllowed,symbolAllowed])





                useEffect(()=>{
                    generatorPassword()
                },[length,password,numberAllowed,symbolAllowed])



  return (
                <div className='bg-black w-full h-screen flex justify-center '>
                    <div className=' flex flex-col w-1/3 h-[100px] bg-gray-600 mt-10 rounded-md'>
                                <div className="flex justify-center text-white ">
                                    <h1>Password generator</h1>
                                </div>
                                <div className="flex  justify-center">
                                                <input
                                                 type="text"
                                                 value={password} className="w-4/5 h-5 text-amber-700" readOnly  placeholder="password"/>

                                                <div className="flex justify-center align-middle mb-5">
                                                     <button className="bg-blue-600 text-white rounded-sm h-5">Copy</button>
                                                </div>
                                           
                                            
                                </div>
                                <div className="flex justify-center w-full gap-2 ">
                                    <input className="text-blue-600" type="range" value={length} min={8} max={50} onChange={(e)=> setLength(e.target.value)}/> <label htmlFor="length" className="text-orange-400" >Length:<span className="text-black">{length}</span></label>
                                    <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}} /><lable>Number</lable>
                                    <input type="checkbox"  defaultChecked={symbolAllowed} onChange={()=>setSymbolAllowed((prev)=>!prev)}/><lable>Character</lable>

                                </div>

                    </div>
                </div>
  )
}

export default PasswordGenerator