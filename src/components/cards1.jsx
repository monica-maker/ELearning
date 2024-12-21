import "/src/components/styles/cards1.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";
const courses = [
    {
        imgSrc: "/src/components/assets/card1.jpg",
        altText: "",
        title: "UI/UX Designing Training Course",
        modules: "11 modules",
        rating: "4.7"
    },
    {
        imgSrc: "/src/components/assets/card2.jpg",
        altText: "",
        title: "Full Stack Development Course",
        modules: "9 modules",
        rating: "4.9"
    },
    {
        imgSrc: "/src/components/assets/card3.jpg",
        altText: "",
        title: "Digital Marketing & E-Commerce",
        modules: "15 modules",
        rating: "4.8"
    }
];

export default function Courses() {
    return (
        <div className="card-container">
            {courses.map((course, index) => (
                <div key={index} className="card">
                    <div className ="img_holder">
                        <img src={course.imgSrc} alt={course.altText} />
                        <button className="b4">Learn more</button>
                    </div>
                    <div className="texts">
                        <h2>{course.title}</h2>
                        <h5>{course.modules}</h5>
                        <div className="stars_icon">
                            <p>{course.rating}</p>
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <IoIosStarHalf />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

