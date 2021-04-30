import React from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const Portfolio = (props) => {
  if (props.data) {
    var projects = props.data.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div
          key={projects.title}
          className="columns portfolio-item"
          style={{ minHeight: "200px" }}
        >
          <div className="item-wrap">
            <a
              href={projects.url}
              target="_blank"
              rel="noreferrer"
              title={projects.title}
            >
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <ReactVisibilitySensor
      onChange={props.updateVis}
      partialVisibility="bottom"
    >
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    </ReactVisibilitySensor>
  );
};

export default Portfolio;