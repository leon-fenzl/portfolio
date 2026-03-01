import React from "react";
import { Link } from "react-router-dom"; 
function Contact() {
  return (
    <section className="section-flex" id="contact">
      <div className="side"/>
      <div className="container">
        <div className="buffer"/>
        <div className="flex-container ">
          <h2 className="just-all-lines">
          <span>
            All works here presented, belong to<span> León Fenzl </span>
            and/or his clients.
          </span>
          </h2>
        </div>
      </div>
      <div className="side"/>
    </section>
  );
}

export default Contact;
/*
<h2>
  All works here presented, belong to<span> León Fenzl </span>
  and/or his clients.
</h2>
*/