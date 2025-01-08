import React, { useEffect } from "react";
import "../../style/_experiences.scss";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import {
  FaUsers,
  FaChartLine,
  FaComments,
  FaUserGraduate,
} from "react-icons/fa";
import {
  FaHeadset,
  FaTruck,
  FaChartPie,
  FaTachometerAlt,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { Tooltip } from "react-tooltip";

function Experiences() {
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add("experiences-body");
  }, []);

  return (
    <div id="experience-page">
      <div className="experience-div">
        <h1 className="experience-title">Experiences</h1>
      </div>
      <div className="experience-sections-container">
        {/* Section 1 */}
        <section id="frontend-developer">
          <h2 className="experience-subtitle">Front-End Developer</h2>
          <p className="experience-paragraph">
            Implemented responsive and user-friendly web interfaces, ensuring
            cross-browser compatibility and seamless user experiences. Focused
            on website performance optimization and dynamic user interface
            integration during your course at OpenClassrooms.
          </p>
          <div className="experience-skills">Key Skills:</div>
          <div className="icon-skills">
            <FaHtml5
              className="html-icon-tooltip"
              data-tooltip-id="html-tooltip"
              data-tooltip-content="HTML: The standard markup language for creating web pages."
            />
            <FaCss3Alt
              className="css-icon-tooltip"
              data-tooltip-id="css-tooltip"
              data-tooltip-content="CSS: Stylesheet language used to describe the presentation of a document written in HTML."
            />
            <FaJs
              className="js-icon-tooltip"
              data-tooltip-id="js-tooltip"
              data-tooltip-content="JavaScript: A programming language for web development, enabling interactive content."
            />
            <FaReact
              className="reac-icon-tooltip"
              data-tooltip-id="react-tooltip"
              data-tooltip-content="React: A JavaScript library for building user interfaces."
            />
            <MdPhoneIphone
              className="iphone-icon-tooltip"
              data-tooltip-id="responsive-tooltip"
              data-tooltip-content="Responsive Design: Designing web interfaces that adapt to different screen sizes."
            />
            <SiRedux
              className="redux-icon-tooltip"
              data-tooltip-id="redux-tooltip"
              data-tooltip-content="Redux: A predictable state container for JavaScript apps."
            />
            {/* Tooltips for Section 1 */}
            <Tooltip id="html-tooltip" />
            <Tooltip id="css-tooltip" />
            <Tooltip id="js-tooltip" />
            <Tooltip id="react-tooltip" />
            <Tooltip id="responsive-tooltip" />
            <Tooltip id="redux-tooltip" />
          </div>
        </section>

        {/* Section 2 */}
        <section id="product-support-lead">
          <h2 className="experience-subtitle">Global Product Support Lead</h2>
          <p className="experience-paragraph">
            Led a high-performing team to streamline workflows, resolve customer
            issues, and optimize collaboration between product and support
            teams. Enhanced efficiency by instituting streamlined communication
            processes between the Product and Support Teams.
          </p>
          <div className="experience-skills">Key Skills:</div>
          <div className="icon-skills">
            <FaUsers
              className="user-icon-tooltip"
              data-tooltip-id="leadership-tooltip"
              data-tooltip-content="Team Leadership: Managing and guiding teams to success."
            />
            <FaChartLine
              className="chart-icon-tooltip"
              data-tooltip-id="process-tooltip"
              data-tooltip-content="Process Improvement: Enhancing workflows to optimize efficiency."
            />
            <FaComments
              className="comments-icon-tooltip"
              data-tooltip-id="communication-tooltip"
              data-tooltip-content="Communication: Effectively sharing and receiving information."
            />
            <FaUserGraduate
              className="licence-icon-tooltip"
              data-tooltip-id="coaching-tooltip"
              data-tooltip-content="Coaching: Providing guidance and mentoring to improve performance."
            />
            {/* Tooltips for Section 2 */}
            <Tooltip id="leadership-tooltip" />
            <Tooltip id="process-tooltip" />
            <Tooltip id="communication-tooltip" />
            <Tooltip id="coaching-tooltip" />
          </div>
        </section>

        {/* Section 3 */}
        <section id="market-manager">
          <h2 className="experience-subtitle">Italian Market Manager</h2>
          <p className="experience-paragraph">
            Managed customer service, after-sales support, and marketplace
            performance for Italy and the UK, ensuring high customer
            satisfaction and effective logistics coordination. Successfully
            controlled revenue, expenses, and stock replenishment while
            improving marketplace performance.
          </p>
          <div className="experience-skills">Key Skills:</div>
          <div className="icon-skills">
            <FaHeadset
              className="headset-icon-tooltip"
              data-tooltip-id="service-tooltip"
              data-tooltip-content="Customer Service: Ensuring customer satisfaction through support."
            />
            <FaTruck
              className="truck-icon-tooltip"
              data-tooltip-id="logistics-tooltip"
              data-tooltip-content="Logistics: Managing the flow of goods and services."
            />
            <FaChartPie
              className="chartpie-icon-tooltip"
              data-tooltip-id="analysis-tooltip"
              data-tooltip-content="Data Analysis: Extracting insights from data to make informed decisions."
            />
            <FaTachometerAlt
              className="performance-icon-tooltip"
              data-tooltip-id="performance-tooltip"
              data-tooltip-content="Performance Management: Monitoring and improving productivity."
            />
            {/* Tooltips for Section 3 */}
            <Tooltip id="service-tooltip" />
            <Tooltip id="logistics-tooltip" />
            <Tooltip id="analysis-tooltip" />
            <Tooltip id="performance-tooltip" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Experiences;
