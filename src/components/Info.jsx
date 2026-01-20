import profileImg from '../assets/Laura_Smith.png'
import About from './About'

export default function Info() {
  return (
   <>
        <img src={profileImg} alt="profile" className="profile-img"/>

        <div className="info-section">
          <h1 className="name">Laura Smith</h1>
          <p className="job-title">Frontend Developer</p>
          <p className="web-site">laurasmith.website</p>

          <div className="social-buttons">
            <button className="btn email">Email</button>
            <button className="btn linkedin">LinkedIn</button>
          </div>
        </div>
      
    </>
  )
}
