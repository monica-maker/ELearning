import "/src/components/styles/footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer(){
    return(
        <>
        <footer className="footer">
            <div className="st">
                <div className="copyright">
                    <h3>Learn<span>Flek</span></h3>
                    <p>&copy; 2023 LearnFlek, India, Inc. All rights reserved.</p>
                </div>
                <div className="highlights">
                    <h3>Home</h3>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About Us</a></li>
                </div>
            </div>
            <div className="nd">
                <div className="service">
                    <h3>Tech on LearnFlek</h3>
                    <li><a href="#">Help & Support</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Sitemap</a></li>
                </div>
                <div className="media">
                <h3>Follow Us</h3>
                <div className="media-icons">
                            <div>
                                <FaInstagram /><p>Instagram</p>
                            </div>
                            <div>
                                <FaTwitter /><p>Twitter</p>
                            </div>
                            <div>
                                <FaFacebookF /><p>Facebook</p>
                            </div>
                            <div>
                                <FaYoutube /><p>Youtube</p>
                            </div>
                        </div>
                </div>
            </div>


        </footer>
        </>
    )
}