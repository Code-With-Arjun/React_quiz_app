import React,{useState,useEffect} from 'react'
import '../css/result.css'
import Open from './Open'
const Result = (props) => {
  const [res, setRes] = useState(null)
  const [page,setPage]=useState(false)
  const result=()=>{
    let data=props.data;
    let value=props.value;
   let x=0;
   data.forEach((val,number)=>{
     if(val.correct_answer===value[number]){
     // console.log("true")
   x++;
    }})
   setRes(x);
   }
   useEffect(()=>{
   result();
   
   },[])
   const backHome=()=>{
setPage(true);
   }
  return (
    <>
    {
      page?<Open/>:
      (
        <div className="result-section ">
        <div className="container d-flex justify-content-center align-items-center result-container-box">
    <div className="row">
      <div className="col">
        <h2>Nice Try  {props.name}</h2>
      <div className='questionno-box'>
      <label htmlFor="validationDefault01" className="form-label">  Number of Questions:</label>
       <input type="number" className="form-control" id="validationDefault01" value={props.data.length} />
      </div>
      <div className="score-box">
      <label htmlFor="validationDefault01" className="form-label"> Score</label>
       <input type="number" className="form-control" id="validationDefault01" value={res}/>
      </div>
     
      </div>
      <div className="container my-1">
      <button className="btn btn-dark" onClick={backHome}>
    Back
      </button>
    </div>
    </div>
    
    
        </div>
        </div>
      )
    }
 

    </>
  )
}

export default Result