import React from "react"
import { useState } from "react"
import './form.css'

import { FaTrash, FaEdit } from 'react-icons/fa'

const FunForm = () => {

    const [phonename, setName] = useState()
    const [phonecolor, setColor] = useState()
    const [phonepath, setPath] = useState()
    const [phonerate, setRate] = useState()
    const [phoneid, setId] = useState()
    var phoneboo='true'
    const [phoneedit,setEdit]=useState('false')
    const [index,setIndex]=useState()

    // const [obj,SetObj]=useState('')
    const [arr, setArr] = useState([])

    const handle = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        }
        else if (e.target.name === 'color') {
            setColor(e.target.value)
        }
        else if (e.target.name === 'ipath') {
            setPath(e.target.value)
        }
        else if (e.target.name === 'rate') {
            setRate(e.target.value)
        }
        else if (e.target.name === 'id') {
            setId(e.target.value)
        }
    }
    const sub = (e) => {
        e.preventDefault()
        //   console.log(phonecolor, phonename)

        if(phoneedit==='true'){
            console.log("hellow edit")
            console.log(index)
            let obj = { phonename, phonecolor, phonepath, phonerate,phoneid,phoneboo }

            let x=arr.map((val)=>{
                return val.phoneid===index?obj:val
            })
            console.log(obj)
            
            console.log(x)
           
            setArr(x)    
            setEdit('false')
        }
       

        else{
            console.log("hellow")

            let obj = { phonename, phonecolor, phonepath, phonerate,phoneid,phoneboo }
        console.log(obj);

        setArr([...arr, obj])

       
        }
        console.log(arr)

        setId(' ')
        setName(' ')
        setRate(' ')
        setPath(' ')
        setColor(' ')
        console.log(phonename,phonecolor,phoneid,phonepath)

    
    }
    

    const del=(val)=>{
        console.log('hello')
        let y=arr.map((e)=>{
            return val===e.phoneid ?{...e, phoneboo:e.phoneboo="false"}:e
        })

        console.log(y)
        setArr(y)
        console.log(arr)

    }


    const edit=(id)=>{
        setEdit('true')
        setIndex(id)
        
        let obj=arr.find((e)=>{
            return e.phoneid===id

        })

        setId(obj.phoneid)
        setPath(obj.phonepath)
        setName(obj.phonename)
        setColor(obj.phonecolor)
        setRate(obj.phonerate)

    }

    return <section>

        <form onSubmit={sub}>
            <label>Name : </label>
            <input id='name' name='name' onChange={handle} value={phonename} placeholder='phonename'></input><br></br><br></br>

            <label >color : </label>
            <input name='color' id='age' onChange={handle} value={phonecolor} placeholder='phonecolor'></input><br></br><br></br>

            <label>Path : </label>
            <input name='ipath' onChange={handle} value={phonepath} placeholder='phonepath'></input><br></br><br></br>

            <label >rate : </label>
            <input name='rate' onChange={handle} value={phonerate} placeholder='phonerate'></input><br></br><br></br>

            <label >Id : </label>
            <input name='id' onChange={handle} value={phoneid} placeholder='phoneid'></input><br></br><br></br>

            <button >Submit</button>
        </form>

        <div className="formcon">
            {
                arr.map((a, i) => {
                    
                    return a.phoneboo==='true'?
                    <div className="formcol" key={i}>
                        <div className="formimage">
                            <img src={a.phonepath} alt="loading"></img>
                        </div>

                        <div className="formcontent">
                            <h2 style={{ color: 'purple' }}>{a.phonename}</h2>
                            <p>{a.phonecolor}</p>
                            <p>{a.phonerate}</p>
                        </div>
                        <div className="formicon">
                            <div >
                                <FaTrash onClick={()=>del(a.phoneid)}/>
                            </div>

                            <div>
                                <FaEdit onClick={()=>edit(a.phoneid)} />
                            </div>

                        </div>


                    </div>:''
                })
            }

        </div>

    </section>
}

export default FunForm