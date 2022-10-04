import React from 'react'

const Pagination = () => {
  let page =1;
  let nbPages = 25;

  const getPrevPage=()=>{

  }

  const getNextPage=()=>{
    
  }
  return (
    <>
    <div className="pagination_btn">
        <button onClick={()=>getPrevPage()}>PREV</button>
        <p>{page} of {nbPages}</p>
        <button onClick={()=>getNextPage()}>NEXT</button>
    </div>
    </>
  )
}

export default Pagination