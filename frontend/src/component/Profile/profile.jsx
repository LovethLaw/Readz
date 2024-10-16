import setting from '../../assets/setting-icon.png'
import profile from '../../assets/dashboard-profile.jpeg'
import styles from './Profile.module.css'


const Profile = () => {

    const profileImg = {
    image: profile,
    name: "Peace",
    email: '@peace',
    occupation: 'Design at Microsoft'
}

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.profileText}>Profile</h1>
        <img src={setting} alt='src' width={20}
        className={styles.settingImg}
        />
      </header>
      <main className={styles.main}>
        <img src={profileImg.image} alt='src'
        className={styles.profilePix} 
        />
        <h2>{profileImg.name}</h2>
        <p>{profileImg.email}</p>
        <p>{profileImg.occupation}</p>
        <button className={styles.profileBtn}>Edit Profile</button>
      </main>

    </div>
  )
}

export default Profile
