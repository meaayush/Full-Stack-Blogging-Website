import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import axios from 'axios'
import { useLocation } from "react-router-dom"

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  
  var subSearch = search.substring(
    search.indexOf("?") + 1, 
    search.lastIndexOf("=")
  );
  // console.log("s", search, subSearch)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/server/posts" + search)
      setPosts(res.data)
    }

    fetchPosts();
  }, [search]);

  // console.log("p", posts)
  return (
    <>
        <Header/>
        <div className="home">
            <Sidebar/>
            {
              posts.length > 0
              ?
              <Posts posts={posts}/>
              :
              <></> // no post available
            }
        </div>
    </>
  )
}
