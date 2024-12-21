import "/src/components/styles/blog.css";
const blog = [
    {
        imgSrc:"/src/components/assets/rst.jpeg"
    },
    {
        imgSrc:"/src/components/assets/nd.jpeg"
    },
    {
        imgSrc:"/src/components/assets/rd.jpeg"
    }
]
export default function Blog(){
    return(
        <div className="card3">

                <h2 className="description">Blogs</h2>
            <div className="contaier2">
                {blog.map ((blog, index) =>(
                    <div key={index} className="blog_cards">
                        <div className="picture">
                            <img src={blog.imgSrc} alt="" />
                        </div>
                        <div className="small_details">
                            <h6>may 01, 2023</h6>
                            <h5>10 comments</h5>
                        </div>
                        <div>
                            <p>Corem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <h5><a href="#">Read More...</a></h5>
                </div>
                ))}
            </div>
        </div>
    );
}