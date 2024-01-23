
import React, { useState } from 'react'

const CreateNotes = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const inputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        })
    }
    return (
        <div className='container my-5'>
            <div className="accordion" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ border: "3px solid #ffc107", backgroundColor: "black", color: "white" }}>
                            Tap here add your task !!
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body py-2" style={{ border: "3px solid #ffc107", backgroundColor: "black" }}>
                            <h6 className='text-white'>Task Title</h6>
                            <input className='form-control text-white my-2' placeholder='Add a title' onChange={inputEvent} value={note.title} name='title' style={{ backgroundColor: "black", border: "2px solid #ffc107" }} />
                            <h6 className='text-white'>Add your task</h6>
                            <textarea placeholder='Write your note....' className="form-control my-2 text-white" autoComplete='off' onChange={inputEvent} value={note.content} name='content' style={{ backgroundColor: "black", border: "2px solid #ffc107" }}></textarea>
                            <button type="button" className="btn btn-warning btn-sm my-1" onClick={addEvent}><i className="fa-solid fa-circle-check"></i> Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNotes