import React, { useEffect, useState } from 'react'
import "../App.css"
import Axios from "axios"
import {useNavigate} from "react-router-dom"

export default function Main() {
    const [data,setdata]=useState([])
    const usenavi=useNavigate()

    useEffect(()=>{
        Axios.get("https://test-case-api.onrender.com/testcase")
        .then((values)=>{
            setdata(values.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[data])

    function handelcreate(){
        usenavi("/testcase")
    }

function handeledit(id,title,script){
    usenavi("/testcase",{state:{id:id,title:title,script:script}})
}

function handeldelete(id){
    Axios.delete(`https://test-case-api.onrender.com/testcase/${id}`)
        .then((values)=>{
            console.log(values)
        })
        .catch((err)=>{
            console.log(err)
        })
}


  return (
    <div>
        <div className='btnclass'>
            <button onClick={handelcreate}>Create New Test Case</button>
        </div>
        <h2 className='testcase'>Test Case</h2>
        <div className="tableclass">
        {data.map((datas)=>{
        return(
            <div className='table' key={datas._id}>
                <label>Title</label>
                <h3>{datas.title}</h3>
                <label>Script</label>
                <pre>{datas.script}</pre>
                <button className='edit' onClick={()=>handeledit(datas._id,datas.title,datas.script)}>Edit</button>
                <button className='delete' onClick={()=>handeldelete(datas._id)}>Delete</button>
            </div>
        )
    })}
        </div>
    </div>
  )
}
