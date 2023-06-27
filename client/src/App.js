import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import NewBlog from "./pages/newblog/NewBlog";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";

function App() {
  const {user} = useContext(Context);
  console.log("user in app.js", user)
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route 
          exact path="/" 
          element={<Home/>}
        />
        <Route 
          path="/register" 
          element={user ? <Home /> : <Register/>}
        />
        <Route 
          path="/login" 
          element={user ? <Home /> : <Login/>}
        />
        <Route 
          path="/newblog" 
          element={user ? <NewBlog /> : <Register/>}
        />
        <Route 
          path="/profile" 
          element={user ? <Profile /> : <Register/>}
        />
        <Route 
          path="/about" 
          element={<About />}
        />
        <Route 
          path="/contact" 
          element={<Contact />}
        />
        <Route 
          path="/post/:postId" 
          element={<Single/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
