import { useContext, useEffect, useState } from "react"
import "./sidebar.css"
import axios from 'axios'
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Sidebar() {
    const [cats, setCats] = useState([]);
    const { user } = useContext(Context)

    const PF = "http://localhost:5000/images/"

    let initial = user ? (user.username[0]) : ""
    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("http://localhost:5000/server/categories");
            setCats(res.data);
        }
        getCats();
    })
    // console.log(cats)
  return (
    <div className="sidebar">
        {
            user ?
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                {/* <img src={PF + user.profilePic} alt="myimage" /> */}
                {   
                    user.profilePic ?
                        <img src={PF + user.profilePic} alt="profile-pic" />
                        :
                        <div 
                            style={{
                                backgroundColor:"#176B87", 
                                display:"flex",
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                color: 'white', 
                                fontSize: "18px", 
                                textTransform: 'uppercase', 
                                textAlign: 'center',
                                paddingTop: '2px',
                                width: '50%',
                                height: '16rem',
                                borderRadius: '20px',
                            }}>
                            {initial}
                        </div>
                    }
                <p>Welcome to PenDown Blog, where words come to life. We are a vibrant community of writers, thinkers, and storytellers who are passionate about sharing valuable insights, inspiration, and creativity with our readers. Our articles cover a wide range of topics, including lifestyle, health, technology, travel, personal development, and more. We believe in the power of words to connect, inspire, and transform lives. Join us as we embark on this journey of discovery, growth, and meaningful conversations. Stay tuned for thought-provoking content, practical tips, and engaging stories that will enrich your life. Welcome to our world of ideas and imagination. Happy reading!</p>
            </div>
            :
            <></>
        }
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {
                    cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem" style={{marginRight: 2}}>
                                <i className="fa-solid fa-angle-right" style={{marginRight: 2}}></i>{c.name}
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>

        </div>
    </div>
  )
}
