import React, { useState } from 'react'
import Result from './Result';
const Home = (props) => {

  const [value, setValue] = useState({})
  const [page, setPage] = useState(false)
  // ----answers ko hold krne ke liye setvalue or ye function onchange event pr answers ko hold krega
  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const submitDetail = (e) => {
    e.preventDefault();
  }
  const detailAdd = () => {
    setPage(true)
  }

  return (
    <>
      {
        page ? <Result value={value} data={props.data} name={props.name} /> :
          (
        {props.data?(
<form onSubmit={submitDetail}>
              <ol type='1'>
                {
                  props.data.map((value, index) => {
                    return (
                      <>
                        <li>{value.question}</li>
                        {
                          value.answers.map((val) => {

                            return (
                              <>
                                <input type='radio' id='' value={val} onChange={changeHandler} name={index} />
                                <label>{val}</label>
                                <br />
                              </>
                            )
                          })
                        }
                      </>
                    )
                  })
                }
              </ol>
              <input type="submit" value="Submit" className='btn btn-dark ms-2' onClick={detailAdd} />
            </form>
          ):
(
<div class="d-flex justify-content-center spinner-container">
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>)
}

)

}
            
                  

    </>

  )
}

export default Home
