import React from 'react'

export default function CatMenu({filterItem,catItems}) {
    return (
        <>
           <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    {
                        catItems.map((data,ind)=>{
                            return (
                                <button key={ind} className="btn btn-warning" onClick={() => filterItem(data)}>{data}</button>
                            )
                        })
                    }
                    {/* <button className="btn btn-warning" onClick={() => filterItem('breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterItem('lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItem('evening')}>Evening</button>
                    <button className="btn btn-warning" onClick={() => filterItem('dinner')}>Dinner</button>
                    <button className="btn btn-warning" onClick={() => filterItem('timepass')}>Time Pass</button>
                    <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button> */}
                </div>
            </div>  
        </>
    )
}
