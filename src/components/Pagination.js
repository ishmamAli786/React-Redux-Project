import React,{useState,useEffect} from 'react';

export default function Pagination({showPerPage,onPaginationChange,total}) {
    const [counter,setCounter]=useState(1)
    const [numberOfButtons,setNumberOfButtons]=useState(Math.ceil(total/showPerPage));

    useEffect(()=>{
        const value=showPerPage*counter;
        // console.log("start value:",value-showPerPage);
        // console.log("End value:",value);
        onPaginationChange(value-showPerPage,value)
    },[counter])


    const onButtonClicked=(type)=>{
        if(type ==='prev'){
            if(counter ===1){
                setCounter(1)
            }else{
                setCounter(counter -1)
            }
        }
        if(type ==='next'){
            if( numberOfButtons===counter){
                setCounter(counter)
            }else{
                setCounter(counter+1);
            }
            
        }
    }
    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
          <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#" onClick={()=>onButtonClicked('prev')}>Previous</a></li>
    {
        new Array(numberOfButtons).fill('').map((el,ind)=>{
            return(
                <li className={`page-item ${ind+1 ==counter?"active":null}`}><a onClick={()=>setCounter(ind+1)} className="page-link" href="#">{ind+1}</a></li>
            )
        })
    }
    <li className="page-item"><a className="page-link" href="#" onClick={()=>onButtonClicked('next')}>Next</a></li>
  </ul>
          </nav>
        </div>
    )
}
