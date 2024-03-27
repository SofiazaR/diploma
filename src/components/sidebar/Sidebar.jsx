import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Content'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompts,setRecentPrompt,newChat} = useContext(Context)

    const loadPromt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>
            <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="bottom-item recent-entry">
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    {extended?<p>Settings</p>:null}
                </div>
                
                <div onClick={()=>newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended
                    ? <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item,index)=>{
                            return(
                                <div onClick={()=>loadPromt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0,18)}...</p>
                                </div>
                            )
                        })}
                        
                    </div>
                    :null
                }

            </div>
        </div>
    )
}

export default Sidebar