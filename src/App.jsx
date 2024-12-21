import Nav from "/src/components/nav.jsx";
import Footer from "/src/components/footer.jsx";
import Header from "/src/components/header.jsx";
import Courses from "/src/components/cards1.jsx";
import Comments from "/src/components/comments.jsx";
import Blog from "/src/components/blog.jsx";

export default function App(){
    return(
        <>
            <Nav/>   
            <Header/>
            <Courses/> 
            <Comments/>
            <Blog/>    
            <Footer/>    
        </>
    )
}