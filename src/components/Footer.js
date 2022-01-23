import React from 'react';

export default function Footer() {
    const year=new Date().getFullYear();
    return (
        <>
           <div className="footer">
               <p style={{marginLeft:'700px'}}>copyright © {year}</p>
        </div> 
        </>
    )
}
