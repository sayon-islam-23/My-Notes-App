import React from 'react'

const Card = (props) => {
    const deleteNote = ()=>{
        props.deleteItem(props.id);
    }
    return (
        <div className='container my-5'>
            <div className="card border-warning mb-3" style={{maxWidth: "18rem", borderWidth:"2px"}}>
            <div className="card-header bg-warning text-dark">{props.title}</div>
                <div className="card-body" style={{ backgroundColor: "black", border: "2px solid #ffc107" }}>
                    <p className="card-text text-white">{props.content}</p>
                    <button type='button' className="btn btn-warning btn-sm" onClick={deleteNote}><i className="fa-solid fa-trash"></i> Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Card