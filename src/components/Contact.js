import React, { Component } from "react";

class Contact extends Component {
	render () {
		return (
			<section
        className="page-section"
        id="contact"
        style={{ minHeight: "90vh" }}
      >
        <div className="container relative">
          <div className="row">
            <div className="col-sm-3" >
              <h2 className="section-title">
                Contact
              </h2>
            </div>

            <div className="col-sm-9">
              <div className="section-text">
                Currently open for full-time opportunities!
              </div>

              <div className="row" style={{ marginTop: "2em" }}>
                <div className="col-sm-5">
                  
                  <div className="contact-item">
                    <div className="ci-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="ci-title font-alt">Phone</div>
                    <div className="ci-text">
                      {" "}
                      <a href="tel:6154151709">502-715-3938</a>
                    </div>
                  </div>
                  

                  <hr />

                  <div className="contact-item">
                    <div className="ci-icon">
                      <i className="fa fa-github" />
                    </div>
                    <div className="ci-title font-alt">Github</div>
                    <div className="ci-text">
                      <a
                        href="https://github.com/spmitchell10"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/spmitchell10
                      </a>
                    </div>
                  </div>

                  <hr />

                  <div className="contact-item">
                    <div className="ci-icon">
                      <i className="fa fa-twitter" />
                    </div>
                    <div className="ci-title font-alt">Twitter</div>
                    <div className="ci-text">
                      {" "}
                      <a href="https://twitter.com/spmitchell_">twitter.com/spmitchell_</a>
                    </div>
                  </div>

                  <hr />

                  

                </div>
                <div className="col-sm-5">
                  <div className="contact-item">
                    <div className="ci-icon">
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="ci-title font-alt">Email</div>
                    <div className="ci-text">
                      <a href="mailto:spmitchell10@gmail.com">
                        spmitchell10@gmail.com
                      </a>
                    </div>
                  </div>

                  <hr />

                  <div className="contact-item">
                    <div className="ci-icon">
                      <i className="fa fa-linkedin" />
                    </div>
                    <div className="ci-title font-alt">LinkedIn</div>
                    <div className="ci-text">
                      <a
                        href="https://www.linkedin.com/in/stephenpaulmitchell/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/stephenpaulmitchell
                      </a>
                    </div>
                  </div>

                  <hr />

                  

                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
			);
	}
}

export default Contact;