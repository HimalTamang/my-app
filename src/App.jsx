import "./Css/App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./components/Home";
import Blog from "./components/Blog";
import JobList from "./components/JobList";
import Footer from "./components/Footer";
import AllJobs from "./components/AllJobs";
import SignIn from "./components/Sign";
import SignUp from "./components/Signup";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import TeachingJobs from "./components/TeachingJobs";
import ItJobs from "./components/ItJobs";
import Accountant from "./components/Accountant";
import WaiterWaitress from "./components/WaiterWaitress";
import Banking from "./components/Banking";
import SalesandMarketing from "./components/SalesandMarketing";
import GraphicDesign from "./components/GraphicDesign";
function App() {
  return (
    <>
      <Navbar />
      <Search  />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/software" element={<ItJobs />} />
          <Route exact path="/accountant" element={<Accountant />} />
          <Route exact path="/waiterandwaitress" element={<WaiterWaitress />} />
          <Route exact path="/banking" element={<Banking />} />
          <Route exact path="/salesmarketing" element={<SalesandMarketing />} />
          <Route exact path="/graphicdesign" element={<GraphicDesign />} />
          <Route exact path="/teachingjobs" element={<TeachingJobs />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>      
      <JobList />
      <AllJobs  />
      <Footer />
    </>
  );
}

export default App;
