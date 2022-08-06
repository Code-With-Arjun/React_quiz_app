import React,{useState} from 'react'
import '../css/Level.css'
import Api from './Api';
const Level = (props) => {
    // const name=props.value;
    const [value,setValue]=useState(10);
    const [qno,setQno]=useState(10)
    const [difficulty,setDifficulty]=useState('easy')
    const [page,setPage]=useState(false)
    const changeHandler=(e)=>{
        setValue(e.target.value)
        setQno(e.target.value)
    }
    const changeOption=(e)=>{
setDifficulty(e.target.value)
    }
    const nextPage=()=>{
setPage(true);
    }
 
  return (
    <>
    {
        
        page?<Api qno={qno} difficulty={difficulty} name={props.name}/>:
(

<div className="level-section ">
    <div className="container d-flex justify-content-center align-items-center level-container-box">

   
<div className="row">
    <div className="col">
    <div className='questionno-select-box'>
  <label htmlFor="validationDefault01" className="form-label">  Number of Questions:</label>
   <input type="number" className="form-control" id="validationDefault01" value={value} required onChange={changeHandler}/>
  </div>

   <div className='difficulty-select-box'>
 Select Difficulty:
 <select className="form-select" aria-label="Default select example" onChange={changeOption}>
 <option selected value='easy'>easy</option>
 <option value='medium'>medium</option>
 <option value='hard'>hard</option>
 </select>
 </div>

<div className="next-btn-container my-2 ">
<button className="btn btn-dark" onClick={nextPage}>
    NEXT
      </button>
</div>

    </div>
</div>
</div>
</div>
)
    }
  
 
    
    </>
  )
}

export default Level