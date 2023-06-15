import "./newblog.css"

export default function NewBlog() {
  return (
    <div className="write">

        <img 
            src="https://images.unsplash.com/photo-1677247191557-4abd28b7c387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" 
            alt="writeImg" 
            className="writeImg" 
        />

        <form className="writeForm">

            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input 
                    type="text"  
                    placeholder="Title" 
                    className="writeInput" 
                    autoFocus={true} 
                />
            </div>

            <div className="writeFormGroup">
                <textarea
                    placeholder="Start your blog...."
                    type="text"
                    className="writeInput writeText" 
                    autoFocus={true}
                />
            </div>

            <button className="writeSubmit">
                Publish
            </button>

        </form>
    </div>
  )
}
