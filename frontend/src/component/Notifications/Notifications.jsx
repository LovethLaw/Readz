import { useState } from "react"
import styles from './Notifications.module.css'


const Notifications = () => {
    const [allTab, setAllTab] = useState('all')
  return (
    <div>
        <header className={styles.head}>
            Notifications
        </header>
      
    </div>
  )
}

export default Notifications
