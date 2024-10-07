import profile from '../../assets/dashboard-profile.jpeg'
import styles from './Header.module.css'


const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img 
      src={profile} 
      alt='profile'
      className={styles.profileImg}
      />

    <h1 className={styles.heading}>
         My Library
    </h1>
    </div>
  )
}

export default Header
