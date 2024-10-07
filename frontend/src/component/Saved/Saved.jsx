import arrow from '../../assets/forward arrow.png'
import savedIcon from '../../assets/saved-icon2.jpeg'
import styles from './Saved.module.css'



const savedItems = ["Cook Book","Journal", "Sketchpad", "Planner", 
  "Recipe Book", "Diary", "Guide Book", "Textbook", "Workbook", "Manual",
  "Story Book", "Comic Book", 
];


const Saved = () => {
  return (
    <div className={styles.saved}>
        <div className={styles.spacing}>
        <img 
        src={savedIcon} alt="saved icon"
        className={styles.imgSaved}
         />
        <div className={styles.text}>
        <h4>Saved </h4> 
        <p>
            {savedItems.length} {savedItems.length > 1 ? "items" : "item"}
        </p>
        </div>
        </div>
        <img src={arrow} alt="forward arrow" 
        width={20}/>
    </div>
  )
}

export default Saved
