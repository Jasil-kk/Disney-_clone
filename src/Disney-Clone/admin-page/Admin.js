import axios from 'axios'
import React, { useState } from 'react'
import './Admin.css'

function Admin() {
  const url = "http://192.168.29.54:4000/disney"
  const [data, setData] = useState({
    backgroundImg: "",
    cardImg: "",
    description: "",
    subtitle: "",
    title: "",
    titleImg: "",
    type: ""
  })

  const submit = (e)=> {
    e.preventDefault();
    axios.post(url,{
        backgroundImg: data.backgroundImg,
        cardImg: data.cardImg,
        description: data.description,
        subtitle: data.subtitle,
        title: data.title,
        titleImg: data.titleImg,
        type: data.type
    })
    .then(response=>{
        console.log(response.data);
    })
  }
  
  const handle = (e)=> {
    const newdata = {...data}
    newdata[e.target.name] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

//  'http://192.168.29.226:3000/disney'

  return (
    <div className='main-body'>
        <div className="container">
            <h2>Admin -Section</h2>

            <form action="" onSubmit={(e)=> submit(e)}>
                 
                <label>Background-image</label>
                <input type="text" name="backgroundImg" value={data.backgroundImg} onChange={(e)=>handle(e)}/> 

                <label>Card-image</label>
                <input type="text" name="cardImg" value={data.cardImg} onChange={(e)=>handle(e)}/> 

                <label>Description</label>
                <input type="text" name="description" value={data.description} onChange={(e)=>handle(e)}/> 

                <label>Subtitle</label>
                <input type="text" name="subtitle" value={data.subtitle} onChange={(e)=>handle(e)}/> 

                <label>Title</label>
                <input type="text" name="title" value={data.title} onChange={(e)=>handle(e)}/> 

                <label>Title-image</label>
                <input type="text" name="titleImg" value={data.titleImg} onChange={(e)=>handle(e)}/> 

                <label>Type</label>
                <input type="text" name="type" value={data.type} onChange={(e)=>handle(e)}/>

                <button>Submit</button>
            </form>
            

        </div>
    </div>
  )
}

export default Admin