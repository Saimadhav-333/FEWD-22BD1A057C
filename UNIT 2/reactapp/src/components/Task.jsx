import React, { useState } from 'react'

const Task = () => {
    let [message,setMessage] = useState("");
    let data = ["SSC ","Intermediate ","B-Tech "]
    // let x="";
    const click=(num)=>{
        message +=data[num];
        setMessage(message);
    }
  return (
    <div>
      <h2>Check Box</h2>
    <span class="box"><input type="checkbox" onClick={()=>click(0)} />SSC</span><br />
    <span class="box"><input type="checkbox" onClick={()=>click(1)}/>Inter</span><br />
    <span class="box"><input type="checkbox" onClick={()=>click(2)}/>B.Tech</span><br />


    <div class="container">
        
        <div><h3>Your Education :</h3>
            {message}</div>
    </div>
    </div>
  )
}

export default Task
