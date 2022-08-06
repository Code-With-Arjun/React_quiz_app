import React, { useState } from 'react'
import '../css/Open.css'
import Level from './Level'
const Open = () => {
    const [value, setValue] = useState(undefined)

    const [page, setPage] = useState(false)
    const changeValue = (e) => {
        setValue(e.target.value)
    }

    const valueHolder = () => {
        if (value) {
            setPage(true);
        }
        else {
            alert("please provide your name")
        }
    }
    return (
        <>

            {
                page ?
                    <Level name={value} />
                    :
                    (
                        <div className="open-section">
                            <div className="open-section-box container">
                                <div className="row text-center my-4">
                                    <div className="col">
                                        <div className="open-section-heading-box">
                                            <h2 className="quiz-heading">QUIZZ</h2>
                                        </div>

                                        <div className="trivia-image-container mx-auto">
                                            <img src="trivia images.jpg" alt="" className='trivia-image' />
                                        </div>
                                        <div className="start-btn-container text-center">
                                            <h3>Welcome to our quiz app</h3>
                                            <div className="input-container">
                                                <input type="text" name="" id="" placeholder='Enter Your Name' className='btn input-box' value={value} onChange={changeValue} />
                                            </div>
                                            <button className="btn my-2 start-btn" onClick={valueHolder} title="Click Here" >
                                                {/* disabled={!disable} */}
                                                LET'S START
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

export default Open