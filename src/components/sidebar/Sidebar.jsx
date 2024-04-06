import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Content'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const { onSent, prevPrompts, setRecentPrompt, newChat, input, setInput } = useContext(Context)

    const loadPromt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="bottom-item recent-entry">
                    {extended ?  <div className="input-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Вставьте интервью тут' />
                </div> : null}
                </div>

                


            </div>

        </div>
    )
}

export default Sidebar