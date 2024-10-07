import './notifications.css'
import setting from './images/setting-icon2.svg'
import profile from './images/dashboard-profile.jpeg'

const Notifications = () => {
  return (
    <div className='body'>
        <div className='container'>
            <div className='top'>
                <h4>Notifications</h4>
                <img src={setting} className='icon'/>
            </div>

            {/*Nav bar */}
            <div className='nav-bar'>
                <h6 className='nav-text'>All</h6>
                <h6 className='nav-text'>Verified</h6>
                <h6 className='nav-text'>Mentions</h6>
            </div>
            <div className='notifications'>
                <section className="notification-msg">
                
                    <div className="saved-icon">
                        <img src={profile} alt="collections-img" className="img img-collections" />
                        <div className="saved-item">
                            <h4>Walt Brain</h4>
                            <p className='paragraph-text'>So you want information that is summarized from sources?</p>
                        </div>
                
                    </div>
                
                    <div>34m</div>
                </section>

                <section className="notification-msg">
                
                    <div className="saved-icon">
                        <img src={profile} alt="collections-img" className="img img-collections" />
                        <div className="saved-item">
                            <h4>Walt Brain</h4>
                            <p className='paragraph-text'>So you want information that is summarized from sources?</p>
                        </div>
                
                    </div>
                
                    <div>34m</div>
                </section>

                <section className="notification-msg">
                
                    <div className="saved-icon">
                        <img src={profile} alt="collections-img" className="img img-collections" />
                        <div className="saved-item">
                            <h4>Walt Brain</h4>
                            <p className='paragraph-text'>So you want information that is summarized from sources?</p>
                        </div>
                
                    </div>
                
                    <div>34m</div>
                </section>

                <section className="notification-msg">
                
                    <div className="saved-icon">
                        <img src={profile} alt="collections-img" className="img img-collections" />
                        <div className="saved-item">
                            <h4>Walt Brain</h4>
                            <p className='paragraph-text'>So you want information that is summarized from sources?</p>
                        </div>
                
                    </div>
                
                    <div>34m</div>
                </section>

                <section className="notification-msg">
                
                    <div className="saved-icon">
                        <img src={profile} alt="collections-img" className="img img-collections" />
                        <div className="saved-item">
                            <h4>Walt Brain</h4>
                            <p className='paragraph-text'>So you want information that is summarized from sources?</p>
                        </div>
                
                    </div>
                
                    <div>34m</div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Notifications