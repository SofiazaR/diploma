import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../context/Content'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
                <div className="main-container">

                    {!showResult
                        ? <>
                            <div className="greet">

                                <p>Что вы хотите сделать на основе интервью?</p>
                            </div>
                            <div className="cards">
                                <div className="card" onClick={() => onSent("Выдели Job Stories на основании интервью " + input)}>
                                    <p>Составить Job Stories</p>
                                </div>
                                <div className="card" onClick={() => onSent("Составь портрет пользователя на основании интервью " + input)}>
                                    <p>Составить портрет пользователя</p>
                                </div>
                                <div className="card" onClick={() => onSent("Выдели важные моменты из интервью:  " + input)}>
                                    <p>Выделить важную информацию</p>
                                </div>
                            </div>
                        </>
                        : <div className="result">
                            <div className="result-data">
                                {loading
                                    ? <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                    : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
    )
}

export default Main