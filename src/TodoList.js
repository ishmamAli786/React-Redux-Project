import React from 'react';

export default function TodoList(props) {
    return (
            <>
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden="true" onClick={()=>{
                    props.onSelect(props.id)
                }}></i>
            <li key={props.datas}>{props.data}</li>
            </div>
            </>
    )
}
