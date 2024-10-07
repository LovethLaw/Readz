import arrow from '../../assets/forward arrow.png'
import collectionsIcon from '../../assets/collections2.png'
import styles from './Collections.module.css'


const itemsCollected = [
  "Cook Book", "Work Book", "Notebook", "Journal", "Sketchpad", "Planner", 
  "Recipe Book", "Diary", "Guide Book", "Textbook", "Workbook", "Manual",
  "Story Book", "Comic Book", "Dictionary", "Thesaurus", "Memo Pad", "Legal Pad",
  "Scrapbook", "Album", "Catalog", "Portfolio", "Log Book", "Blueprint",
  "Folder", "Binder", "Exercise Book", "Draft", "Magazine", "Pamphlet",
  "Leaflet", "Instruction Booklet"
];


const Collections = () => {
  return (
    <div className={styles.collections}>
        <div className={styles.spacing}>
        <img 
        src={collectionsIcon} alt="collections icon"
        className={styles.collectionsImg}
         />
        <div className={styles.text}>
        <h4>Collections</h4> 
        <p>
            {itemsCollected.length} {itemsCollected.length > 1 ? "collections" : "collection"}
        </p>
        </div>
        </div>
        <img src={arrow} alt="forward arrow" 
        width={20}/>
    </div>
  )
}

export default Collections
