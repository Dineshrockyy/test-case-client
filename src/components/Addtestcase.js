import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import Axios from "axios"

export default function Addtestcase() {
    const location =useLocation()
    const navi=useNavigate()
    const [value,setvalue]=useState({title :location.state===null?'':location.state.title,script :location.state===null?'':location.state.script})

    function handelsubmit(){
        if(location.state===null){
        Axios.post('http://localhost:8080/testcase/add',value)
            .then(res=>{console.log(res.data)})
            .catch(err=>{
                console.log("err"+err.message)
            })
        }else{
            Axios.put(`http://localhost:8080/testcase/${location.state.id}`,value)
            .then(res=>{console.log(res.data)})
            .catch(err=>{
                console.log("err"+err.message)
            })
        }

        setvalue({title:'',script:''})
    }
  return (
    <div className='form'>
        <button onClick={()=>navi('/')}>Go To Test Case</button>
        <div>
        <lable for="title" className="title">Title</lable><br></br>
        <textarea id="title" className='titleinput'value={value.title} onChange={(e)=>setvalue({...value,title:e.target.value})} type="text"></textarea>
        </div>
        <div>
        <lable for="script" className="test">Test Case</lable><br></br>
        <textarea id="script" value={value.script}  className='testinput' onChange={(e)=>setvalue({...value,script:e.target.value})} type="text"></textarea><br></br>
        <button onClick={handelsubmit}>Submit</button>
        </div>
    </div>
  )
}
