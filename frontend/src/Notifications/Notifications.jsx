import { allNotifications, mentions, verified } from "./data"
import PropTypes from 'prop-types';
import settings from '../assets/setting-icon.png'
import styles from './notifications.module.css'
import { useState } from 'react';

const NotificationBody = ({image, name, message, time}) => {
    return (
        <div className={styles.notification}>
        {/* profile image */}
        <div className={styles.profileImageAndText}>
            <img src={image} alt="Profile image of the sender"
            className={styles.profile} />
        
        {/* Name and message body */}
            <div className={styles.nameAndMessage}>
            <h4>{name}</h4>
            <p>{message}</p>
            </div>
        </div>
        <div className={styles.time}>
            <p>{time}</p>
        </div>
      
        </div>
    )
}

NotificationBody.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    message: PropTypes.string,
    time: PropTypes.string

}


const Notifications = () => {
    const [tab, setTab] = useState("All")
  return (
    <div className={styles.allNotifications}>
        <header>
            <h1 className={styles.firstHeading}>Notifications</h1>
            <img src={settings} width={20}/>
        </header>
        <section >
        <div className={styles.buttons}>
            <button
            onClick={() => setTab("All")}
            className={`${styles.button} ${tab === "All" ? styles.activeButton : ''}`}
            >
                All
            </button>
            <button
            onClick={() => setTab("Verified")}
            className={`${styles.button} ${tab === "Verified" ? styles.activeButton : ''}`}
            >
                Verified
            </button>
            
            <button
            onClick={() => setTab("Mentions")}
            className={`${styles.button} ${tab === "Mentions" ? styles.activeButton : ''}`}
            >
                Mentions
            </button>
        </div>

        <hr className={styles.horizontalLine}/>
       

    <div>
        {tab === "All" && 
        allNotifications.map((notification, index) => {
        return (
            <NotificationBody 
            key={index}
            image={notification.image}
            name={notification.name}
            message={notification.message}
            time={notification.time}
            />
        )}) }
    
        {tab === "Verified" && 
        verified.map((notification, index) => {
        return (
            <NotificationBody 
            key={index}
            image={notification.image}
            name={notification.name}
            message={notification.message}
            time={notification.time}
            />
        )}) }
   

       
        {tab === "Mentions" && 
        mentions.map((notification, index) => {
        return (
            <NotificationBody 
            key={index}
            image={notification.image}
            name={notification.name}
            message={notification.message}
            time={notification.time}
            />
        )}) }
    

    </div>
    </section>
    </div>
  )
}

export default Notifications
