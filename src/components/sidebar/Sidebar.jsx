import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="" alt="myimage" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ducimus veritatis dolore nemo esse consequuntur qui optio, expedita veniam nobis repellendus delectus ab ut aliquid soluta a! Labore, officia dolor!</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem"> <i className="fa-solid fa-angle-right"></i> Life</li>
                <li className="sidebarListItem"> <i className="fa-solid fa-angle-right"></i> Music</li>
                <li className="sidebarListItem"> <i className="fa-solid fa-angle-right"></i> Style</li>
                <li className="sidebarListItem"> <i className="fa-solid fa-angle-right"></i> Sport</li>
                <li className="sidebarListItem"> <i className="fa-solid fa-angle-right"></i> Cinema</li>
                <li className="sidebarListItem"> <i className="fa-solid fa-angle-right"></i> Tech</li>
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
