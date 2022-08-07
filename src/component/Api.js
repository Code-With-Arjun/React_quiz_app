import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './Home'

const Api = (props) => {
    const [data, setData] = useState([])
    const [isLoading,setIsLoading]=useState(true)

    useEffect(() => {
        axios.get(`https://opentdb.com/api.php?amount=${props.qno}&category=12&difficulty=${props.difficulty}&type=multiple`).then((e) => {
        // axios.get(`https://opentdb.com/api.php?amount=10`).then((e) => {
          // console.log(e.data)
          console.log(props.difficulty)
          console.log(props.q)
          let x = e.data.results
          setIsLoading(false);
          setData(x.map((e, index) => {
            return (
              {
                ...data,
                id: index,
                question: e.question,
                answers: [...e.incorrect_answers, e.correct_answer],
                correct_answer: e.correct_answer
              } ) }
))  }) }, [])
              
  return (
   <>
   <Home data={data} name={props.name} isLoading={isLoading}/>
   </>
  )
}

export default Api
