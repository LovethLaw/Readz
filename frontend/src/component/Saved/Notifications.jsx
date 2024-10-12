


import React, { useState } from 'react'
import './Notifications.css'
import { AllNotification, verified, mentioned } from './Api'

const NotificationsCard = ({
    senderProfilePicture,
    senderName,
    message,
    time,
}) => {
    return (
        <div className='notificationsCard'>
            {/* user image */}
            <div className='useImage'>
                <img src={senderProfilePicture} alt="" />
            </div>
            {/* name and message */}
            <div className='userNameAndUserMessage'>
                <h3>{senderName}</h3>
                <p>{message}</p>
            </div>
            {/* time send */}
            <div className='timeSend'>
                <p>{time}</p>
            </div>
        </div>
    )
}

const Notifications = () => {
    const [tab, setTab] = useState("All")

    return (
        <section>
            <h1>Notification</h1>
            <div className='buttons'>
                <button
                    onClick={() => setTab('All')}
                    className={`tabButton ${tab === "All" ? "activeButton" : ""}`}
                >All</button>


                <button
                    onClick={() => setTab('verified')}
                    className={`tabButton ${tab === "verified" ? "activeButton" : ""}`}
                >Verified</button>

                <button
                    onClick={() => setTab('mentioned')}
                    className={`tabButton ${tab === "mentioned" ? "activeButton" : ""}`}
                >mentioned</button>
            </div>

            <div>
                {tab === "All" && AllNotification.map((msg, index) => (
                    <NotificationsCard
                        key={index} 
                        senderProfilePicture={msg.senderProfilePicture}
                        senderName={msg.senderName}
                        message={msg.message}
                        time={msg.time}
                    />
                ))}

                {tab === "mentioned" && mentioned.map((msg, index) => (
                    <NotificationsCard
                        key={index} 
                        senderProfilePicture={msg.senderProfilePicture}
                        senderName={msg.senderName}
                        message={msg.message}
                        time={msg.time}
                    />
                ))}

                {tab === "verified" && verified.map((msg, index) => (
                    <NotificationsCard
                        key={index} 
                        senderProfilePicture={msg.senderProfilePicture}
                        senderName={msg.senderName}
                        message={msg.message}
                        time={msg.time}
                    />
                ))}
            </div>
        </section>
    )
}

export default Notifications
