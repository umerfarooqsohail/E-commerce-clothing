import React from "react";
import Directory from "../../components/directory/Directory";
import "./Homepage.style.scss";
const Homepage = (props) => {
  console.log(props);
  return (
    <>
      <div className="homepage">
        <Directory />
      </div>
    </>
  );
};
export default Homepage;
