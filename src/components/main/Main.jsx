import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../context/Content'
import { assets } from '../../assets/assets'

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    function updateLivePreview(resultData) {
        const htmlCode = document.getElementById('htmlInput').value;
        const cssCode = `<style>${document.getElementById('cssInput').value}</style>`;
        const jsCode = `<script>${document.getElementById('jsInput').value}<\/script>`;

        const combinedCode = htmlCode + cssCode + jsCode;

        const blob = new Blob([combinedCode], { type: 'text/html' });
        const blobURL = URL.createObjectURL(blob);

        const iframe = document.getElementById('preview');
        iframe.src = blobURL;
    }

    return (
        <div className='main'>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Привет</span></p>
                            <p>Как я могу помочь тебе сегодня</p>
                            <div className="cards">
                                <div className="card" onClick={() => onSent("Redesign of the Google homepage, designed in a very futuristic style code use html, create 5 another versions ")}>
                                    <p>Сделай редизайн главной страницы Гугл</p>
                                </div>
                                <div className="card" onClick={() => onSent("create html and css 12 buttons another colors ")}>
                                    <p>Сгенерируй 12 кнопок разного цвета</p>
                                </div>
                            </div>
                        </div>
                        <div className="search-box">
                            <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Введите запрос тут' />
                            <div>
                                {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                            </div>
                        </div>
                    </>
                    : <div className="result">
                        <div className="result-title">
                            <h3>Рузельтат генерации</h3>
                        </div>
                        <div className="result-data">
                            {loading
                                ?
                                <div className="loader">
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