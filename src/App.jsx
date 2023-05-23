import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/images/logo.svg";
import btn_open_icon from "./assets/images/icon-menu.svg";
import btn_close_icon from "./assets/images/icon-close-menu.svg";
import todo from "./assets/images/icon-todo.svg";
import planning from "./assets/images/icon-planning.svg";
import reminders from "./assets/images/icon-reminders.svg";
import calender from "./assets/images/icon-calendar.svg";
import arrowup from "./assets/images/icon-arrow-up.svg";
import arrwdown from "./assets/images/icon-arrow-down.svg";
import mobile from "./assets/images/image-hero-mobile.png";
import desktop from "./assets/images/image-hero-desktop.png";
import audiophile from "./assets/images/client-audiophile.svg";
import databiz from "./assets/images/client-databiz.svg";
import maker from "./assets/images/client-maker.svg";
import meet from "./assets/images/client-meet.svg";

function App() {
  const [OpenNavbar, SetOpenNavbar] = useState(false);
  const [Openfeatures, SetOpenfeatures] = useState(false);
  const [Opencompany, setOpencompany] = useState(false);
  // useEffect(() => {
  //   document.querySelectorAll("*").forEach((element) => {
  //     // Do whatever you want with the node object.
  //     element.classList.toggle("opacity", OpenNavbar);
  //     if (element.classList.contains("navbar-header")) {
  //       console.log("yes");
  //       element.classList.remove("opacity");
  //     }
  //   });
  // }, [OpenNavbar]);
  const navbarToggle = () => {
    SetOpenNavbar(!OpenNavbar);
  };
  return (
    <section className="container">
      <nav className="navbar">
        <div className="navbar-header">
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
          <button onClick={navbarToggle} className="btn btn-toggle">
            <img src={OpenNavbar ? btn_close_icon : btn_open_icon} alt="" />
          </button>
          <div
            className={
              OpenNavbar ? "links-container show-links" : "links-container"
            }
          >
            <ul className="links">
              <li className="drop-down">
                <button
                  onClick={() => {
                    SetOpenfeatures(!Openfeatures);
                  }}
                  className="btn drop-down-btn list-links"
                >
                  Featuers{" "}
                  <img src={Openfeatures ? arrowup : arrwdown} alt="" />
                </button>
                {Openfeatures && (
                  <ul className="drop-downmenu">
                    <li>
                      <img src={todo} alt="" /> Todo List
                    </li>
                    <li>
                      <img src={calender} alt="" /> Calendar
                    </li>
                    <li>
                      <img src={reminders} alt="" /> Reminder
                    </li>
                    <li>
                      <img src={planning} alt="" /> Planning
                    </li>
                  </ul>
                )}
              </li>
              <li className="drop-down">
                <button
                  onClick={() => {
                    setOpencompany(!Opencompany);
                  }}
                  className="btn drop-down-btn list-links "
                >
                  Company <img src={Opencompany ? arrowup : arrwdown} alt="" />
                </button>
                {Opencompany && (
                  <ul className="company-drop-downmenu drop-downmenu">
                    <li>History</li>
                    <li>Our team</li>
                    <li>Blog</li>
                  </ul>
                )}
              </li>
              <li>
                <a href="" className="list-links">
                  Careers
                </a>
              </li>
              <li>
                <a href="" className="list-links">
                  About
                </a>
              </li>
              <div className=" mobile-auth">
                <button className="btn login-btn">Login</button>
                <button className="btn register-btn">Register</button>
              </div>
            </ul>
          </div>
        </div>

        <div
          className={OpenNavbar ? "navbar-auth show-toggle-btn" : "navbar-auth"}
        >
          <button className="btn login-btn">Login</button>
          <button className="btn register-btn">Register</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-image-mobile hero-image">
          <img src={mobile} alt="" />
        </div>
        <div className="hero-text">
          <h1 className="hero-title">Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="btn hero-btn">Learn more</button>
          <div className="barnds">
            <div>
              {" "}
              <img src={databiz} alt="" />
            </div>
            <div>
              {" "}
              <img src={audiophile} alt="" />
            </div>
            <div>
              <img src={meet} alt="" />
            </div>
            <div>
              {" "}
              <img src={maker} alt="" />
            </div>
          </div>
        </div>
        <div className="hero-image-desktop hero-image">
          <img src={desktop} alt="" />
        </div>
      </section>
    </section>
  );
}

export default App;
