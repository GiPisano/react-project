import profileImg from '../assets/Laura_Smith.png'

export default function Info(){
    return (
       <div className="container">
        <img src={profileImg} alt="profile" className="profile-img"/>
        
        <div className='info-section'>
            <h1 className="name">Laura Smith</h1>
            <p className="job-title">Frontend Developer</p>
            <p className="web-site">laurasmith.website</p>

                <div className="social-buttons">
                    <button>Email</button>
                    <button>Linkedin</button>
                </div>
        </div>
       </div>
      
    )
}