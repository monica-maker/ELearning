import "/src/components/styles/comments.css";

const comments = [
    {
        imgSrc:"/src/components/assets/image1.jpeg",
        heading:"Devika Gada",
        title:"Social Media Strategist",
        text:"The digital marketing course exceeded my expectations! The instructors were knowlageable and the course content was higly relevent. I now feel confident in my ability to create effective digital marketing campaigns"
    },
    {
        imgSrc:"/src/components/assets/image2.jpg",
        heading:"Kautuk Mestri",
        title:"Full Stack Developer",
        text:"The full stack development course was amazing! The instructor was knowledgeable and the material was comprehensive. I highly recommand this course to anyone looking to jumpstart their career in web development."
    },
    {
        imgSrc:"/src/components/assets/image3.jpeg",
        heading:"Steve Smith",
        title:"Associated UI/UX Desginer",
        text:"Great UI/UX course! learned a lot from the knowledgeable instructors and practical exercises. Highly recommend to looking to improve their design skills."
    }
]
export default function  Comments(){
    return(
        <div className="container">
                <div className="comments_heading">
                    <h2>What Our Students Say</h2>
                </div>
            <div className="comment_cards">
                {comments.map((comments, index) => (
                    <div key={index} className="cards2">
                        <div className="brife_details">
                            <div className="pic">
                            <img src= {comments.imgSrc} alt="" />
                            </div>
                            <div className="name">
                            <h4>{comments.heading}</h4>
                            <h5>{comments.title}</h5>
                            </div>
                        </div>
                        <div className="comment_section">
                            <p>{comments.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}