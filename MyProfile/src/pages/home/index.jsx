import imgDev from "../img/developer-activity-animate.svg";
import { FaReact } from "react-icons/fa6";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

export function Home() {
  return (
    <main>
      <section className="section">
        <div className="aboutMe">
          <p className="textp">
            {" "}
            Hello! My name is <strong>João Pedro</strong>
            <br />
            I'm 25 years old I'm studying to be a Web
            developer with this Page I want to present some of the projects I
            have already done using the main web development tools, like <br />
            {/* ///////////// ICON ///////////////// */}
            <ul className="icons">
              <li id="html" alt="html icon">
                <SiHtml5 />
                <p className="iconp">HTML</p>
              </li>
              <li id="css" alt="css icon">
                <SiCss3 />
                <p className="iconp">CSS</p>
              </li>
              <li id="js" alt="js icon">
                <SiJavascript />
                <p className="iconp">Javascript</p>
              </li>
              <li id="react" alt="react icon">
                <FaReact />
                <p className="iconp">React.js</p>
              </li>
            </ul>
          </p>
        </div>

        <div>
          <img className="imgDev" src={imgDev} alt="" srcset="" />
        </div>
      </section>
    </main>
  );
}
