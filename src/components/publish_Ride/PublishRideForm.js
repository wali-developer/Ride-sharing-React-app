import React, { useEffect } from "react";
import "../../style/publishRideForm.css";
import PublishRideFormCard from "./PulishRideFormCard";
import AOS from "aos";

const PublishRideForm = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section
        className="publish-ride-container"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <div className="container d-flex justify-content-end">
          <div className="publish-ride-form ">
            <PublishRideFormCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default PublishRideForm;
