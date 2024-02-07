import React from "react";

function Excellence() {
  return (
    <div>
      <section className="container">
        <div>
          <div>
            <h1 className="text-success display- 4 fw-bold text-center mt-5">
              Centres Of <span className="text-danger"> Excellence </span>
            </h1>
            <p className="pt-2 fs-5 text-center">
              Combining the best specialists and equipment to provide you
              nothing short of the best in healthcare.
            </p>
          </div>
          <div className="row row-cols-1 row-cols-lg-3  g-2 g-lg-4 mt-4">
            <div className="col">
              <div className="card border-0 p-3  rounded-0 crd-bg">
                <div className="d-flex">
                  <img
                    src="https://cdn.apollohospitals.com/campaign/chennai/images/icons/cardiology-ic.webp"
                    alt=""
                    className="img-fluid rounded-3"
                    width="56"
                  />
                  <div className="fw-bold  ms-sm-3 ms-2 py-3 trip_points text-dark">
                    <p>Cardiology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 p-3  rounded-0 ortho-bg">
                <div className="d-flex">
                  <img
                    src="https://cdn.apollohospitals.com/campaign/chennai/images/icons/ortho-ic.webp"
                    alt=""
                    className="img-fluid rounded-3"
                    width="56"
                  />
                  <div className="fw-bold  ms-sm-3 ms-2 py-3 trip_points text-dark">
                    <p>Orthopedics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 p-3  rounded-0 onco-bg">
                <div className="d-flex">
                  <img
                    src="https://cdn.apollohospitals.com/campaign/chennai/images/onco-ic.webp"
                    alt=""
                    className="img-fluid rounded-3"
                    width="56"
                  />

                  <div className="fw-bold  ms-sm-3 ms-2 py-3 trip_points text-dark">
                    <p>Oncology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 p-3  rounded-0 neuro-bg">
                <div className="d-flex">
                  <img
                    src="https://cdn.apollohospitals.com/campaign/chennai/images/icons/neurology-icon.webp"
                    alt=""
                    className="img-fluid rounded-3"
                    width="56"
                  />

                  <div className="fw-bold  ms-sm-3 ms-2 py-3 trip_points text-dark">
                    <p>Nephrology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 p-3  rounded-0 gastro-bg">
                <div className="d-flex">
                  <img
                    src="https://cdn.apollohospitals.com/campaign/chennai/images/icons/gastroenterology-icon.webp"
                    alt=""
                    className="img-fluid rounded-3"
                    width="56"
                  />

                  <div className="fw-bold  ms-sm-3 ms-2 py-3 trip_points text-dark">
                    <p>Gastroenterology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 p-3  rounded-0 urology-bg">
                <div className="d-flex">
                  <img
                    src="https://cdn.apollohospitals.com/campaign/chennai/images/icons/urology-icon.webp"
                    alt=""
                    className="img-fluid rounded-3"
                    width="56"
                  />
                  <div className="fw-bold  ms-sm-3 ms-2 py-3 trip_points text-dark">
                    <p>
                      <span class="d-none d-sm-inline">Nephrology &amp;</span>{" "}
                      Urology{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Biomedical */}
      <section className=" mt-5">
        <div className="container">
          <div className="row justify-content-center  p-5">
            <div className="col-md-10">
              <div className="row biomedicalbg rounded-4">
                <div className="col-md-8 ">
                  <h2 className="p-4">Biomedical Waste Management</h2>
                  <p className="px-4">
                    To minimise health hazards to patients and staff, our
                    trained professionals handle various operational procedures
                    for managing biomedical wastes that reduce serious
                    implications.
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="biomedical w-75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Need a Doctor  */}
      <section className="Doctor">
        <div className="text-center text-light docdiv ">
          <div className="docpara">
            <p className="fs-3">Need a Doctor for Check-up?</p>
            <h1>Just Make An Appointment & You're Done!</h1>
            <button className="docbutton">Book An Appointment</button>
            <p className="text-center text-light mt-5 pt-2">
             <span className="text-danger"> © Copyright 2023.</span> YYYY Hospitals Group. All Rights Reserved,
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Excellence;
