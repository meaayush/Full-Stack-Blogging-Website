import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://images.unsplash.com/photo-1674571289827-c45050235e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="postimage" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore doloribus eaque voluptas quia in assumenda necessitatibus, a consequatur facere ea mollitia ex. Ipsa facere voluptates totam enim fuga cumque! Iusto!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore doloribus eaque voluptas quia in assumenda necessitatibus, a consequatur facere ea mollitia ex. Ipsa facere voluptates totam enim fuga cumque! Iusto!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore doloribus eaque voluptas quia in assumenda necessitatibus, a consequatur facere ea mollitia ex. Ipsa facere voluptates totam enim fuga cumque! Iusto!
        </p>
    </div>
  )
}
