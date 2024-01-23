import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CreateNotes from './CreateNotes'
import Card from './Card'

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note]
    })
  }
  const onDelete = (id) =>{
    setAddItem((oldData)=>
      oldData.filter((curData, index)=>{
        return index !== id;
      })
    )
  }
  return (
    <>
      <Navbar />
      <CreateNotes passNote={addNote} />
      <div className='container'>
        <div className='row'>
          {addItem.map((val, index) => {
            return (<div className='col-md-3 my-1'>
              <Card key={index} id={index} title={val.title} content={val.content} deleteItem = {onDelete}/>
            </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App