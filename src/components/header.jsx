import "/src/components/styles/header.css";

export default function Header(){
    return(
        <>
            <div className="header">
                <div className="intro">
                    <div className="text">
                        <h1>Unlock Your Potential With Online Training</h1>
                        <p>Upgrade your skills and achieve your goals with expert instructors and flexible learning options.</p>
                        <button className="b2">Explore Our Courses</button>
                    </div>
                    <div className="image">
                        <img src="/src/components/assets/header_001.png" alt="" />
                    </div>
                </div>
                <div className="company_logos">
                    <h4>We collaborated with <span>20+ leading companies</span></h4>
                        <img src="/src/components/assets/google.png" alt="" />
                        <img src="/src/components/assets/facebook.png" alt="" />
                        <img src="/src/components/assets/slack.png" alt="" />
                        <img src="/src/components/assets/zoom.png" alt="" />
                </div>
            </div>
        </>
    )
}