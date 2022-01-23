import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default function CreateNote(props) {
    const [note,setNote]=useState({
        title:'',
        content:''
    });
    const inPutEvent=(e)=>{
        const value=e.target.value;
        const name=e.target.name;
        setNote((prevData)=>{
            return {
                ...prevData,[name]:value
            }
        })
    }


    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:'',
            content:''
        })
    }
    return (
        <>
            <div className="main_note">
                <form>
                    <input type="text" name="title" value={note.title} placeholder="title" autoComplete="off" onChange={inPutEvent}/>
                    <textarea rows="" name="content" value={note.content} column=""  onChange={inPutEvent} placeholder="Write A Note..."></textarea>
                    <Button onClick={addEvent}><AddIcon style={{color:'black'}} /></Button>
                </form>
            </div>
        </>
    )
}
