import arrow from '../../assets/forward arrow.png'
import finishedIcon from '../../assets/finished-icon.png'
import styles from './Finished.module.css'


const itemsFinished = ["Work book"];


const Finished = () => {
  return (
    <div className={styles.finished}>
        <div className={styles.spacing}>
        <img 
        src={finishedIcon} alt="finished icon"
        className={styles.finishedImg}
         />
        <div className={styles.text}>
        <h4>Finished</h4> 
        <p>
            {itemsFinished.length} {itemsFinished.length > 1 ? "items" : "item"}
        </p>
        </div>
        </div>
        <img src={arrow} alt="forward arrow" 
        width={20}/>
    </div>
  )
}

export default Finished
