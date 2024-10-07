import arrow from '../../assets/forward arrow.png'
import downloadsIcon from '../../assets/download-icon.png'
import styles from './Downloads.module.css'


const itemsDownloaded = [
  "Cook Book", "Work Book", "Notebook", "Journal", "Sketchpad", "Planner", 
  "Recipe Book", "Diary", "Guide Book", "Textbook", "Workbook", "Manual",
  "Story Book", "Comic Book", "Dictionary", "Thesaurus", "Memo Pad", "Legal Pad",
  "Scrapbook", "Album", "Catalog", "Portfolio", "Log Book", "Blueprint",
  "Folder", "Binder", "Exercise Book", "Draft", "Magazine", "Pamphlet",
  "Leaflet", "Instruction Booklet"
];


const Downloads = () => {
  return (
    <div className={styles.downloads}>
        <div className={styles.spacing}>
        <img 
        src={downloadsIcon} alt="downloads icon"
        className={styles.downloadsImg}
         />
        <div className={styles.text}>
        <h4>Downloads</h4> 
        <p>
            {itemsDownloaded.length} {itemsDownloaded.length > 1 ? "items" : "item"}
        </p>
        </div>
        </div>
        <img src={arrow} alt="forward arrow" 
        width={20}/>
    </div>
  )
}

export default Downloads
