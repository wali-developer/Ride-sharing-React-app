import React from "react";
import "../../style/publishRideForm.css";
import PublishRideFormCard from "./PulishRideFormCard";

const PublishRideForm = () => {
  return (
    <>
      <section className="publish-ride-container">
        <div className="container d-flex justify-content-end">
          <div className="publish-ride-form">
            <PublishRideFormCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default PublishRideForm;
