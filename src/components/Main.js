import React from "react";

function Main() {
  return (
    <section className="main-section">
      <div className="container">
        <div className="main-container">
          <div className="box box1">
            <div className="main-content">
              <div className="main-header">
                <h3>
                  Rent a <span>place</span> away from <span>home</span> in the
                  <span> Metaverse </span>
                </h3>
              </div>
              <div className="main-text">
                <p>
                  we provide you access to luxury and affordable houses in the
                  metaverse, get a chance to turn your imagination to reality at
                  your comfort zone
                </p>
              </div>

              <form className="main-form">
                <input type="text" placeholder="search for location" />
                <input type="submit" value="search" />
              </form>
            </div>
          </div>
          <div className="box box2">
            <div className="box-img">
              <img src="images/grid-image.png" alt="grid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Main;
