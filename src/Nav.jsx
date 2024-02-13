import React from 'react';
// 

import Profiledub from './images/dub-img.png'

export default function Nav() {
    return (
        <div>
            {/* <section className='nav-banner'>
                <nav class="navbar navbar-expand-lg nav-banner" id='home'>
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src="https://kvramanan.com/wp-content/uploads/2023/07/Image-Cut-80x80-min.png" alt=" navlogo" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-3 p-4 mb-lg-0 text-center ">

                                <li class="nav-item heading6">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href='#home'>Home</a>
                                </li>

                                <li class="nav-item heading6">
                                    <a class="nav-link active px-3 " aria-current="page" id='name-nav' href="#aboutus">About Us</a>
                                </li>

                                <li class="nav-item heading6">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#portfolio">Portfolio</a>
                                </li>

                                <li class="nav-item heading6">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#technical">Technical</a>
                                </li>

                                <li class="nav-item heading6">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#work">Work</a>
                                </li>

                                <li class="nav-item heading6">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#testimonial">Testimonial</a>
                                </li>

                                <li class="nav-item border-end heading6">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' href="#contact">Contact</a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
            </section> */}
            {/* Nav-End */}

            {/* Banner-Start */}
            {/* <h3 className='text-center mb-3 heading7 fs-2 ' style={{ color: "#fd562a" }}>Axess Hospital</h3> */}

            <section className='container-fluid'>
                <div className='text-center py-4 my-4'>
                    <div className='row'>
                        <div className="col-md-7">
                            <h2 class="sub-title pt-sm-0 pt-3 mb-4 heading7 ">The Axess World of Care</h2>
                            <h4 className='hero-title heading7 mb-4'>Consult Our Trusted Surgeons,Book an Appointment,

                                <p>10 Years of Advanced HealthCare</p></h4>
                            <h2 class="tagline_ heading7 fs-5" id="formmain "> The best of modern healthcare to ensure you stay healthy, always.</h2>
                            <div class="py-4 my-4">
                                <button class="banner-bts fw-bold fs-5 heading5" target="_blank">Contact Us</button>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img
                                src="https://cdn.apollohospitals.com/campaign/chennai/images/hero-right.webp"
                                // style={{backgroundColor:"red"}}
                                className="align-items-center img-fluid"
                                alt=""
                            />
                        </div>

                    </div>

                </div>
            </section>
            <section className='container'>
                <div className="row d-flex align-items-center justify-content-evenly">
                    <div className="col-md-5">
                        <div className='text-center'>
                            <video src=" https://youtu.be/Ba3RvJew71I "autoPlay loop muted className='w-100 img3'></video>
                        </div>
                    </div>
                    <div className="col-md-7    ">
                        <h1 className='heading7 text-center mb-3 p-2 fs-3 ' style={{ color: "#F1A902" }}> The Best Multi-speciality Hospital in Chennai</h1>
                        <p className='heading6'>Axess Technology in Madurai is one of the most prominent hospitals in Madurai for its innovative treatments and doctor-patient approach. The hospital offers a wide range of treatment procedures and has a dedicated doctor-patient support system in place. The hospital is open to any patient and the staff is available 24/7 to help the patients. It has a team of supportive and experienced professionals who work together to provide you with the best treatment available. If a picture is worth a thousand words, Axess Hospital has been a living picture book for the city of Madurai. Over the years there have been innumerable people who have been saved from the clutches of death due to the hospital’s excellent work. This hospital has given hope to thousands of people and is a one-stop solution for the people of Madurai and its surroundings.</p>


                    </div>

                </div>

            </section>

            <section style={{
                backgroundColor: "transparent",
                backgroundImage: "linear-gradient(180deg, #FFF0EA 0%, #FFF4EF 100%)"

            }}>
                <div className='container mt-5 p-5' >
                    <div className="carding row gx-3 align-items-stretch my-5 bg-3 ">
                        <div className="col-md-3">
                            <div class="card-effect">
                                <div class="card-content-effect text-center">
                                    <img src="https://preethihospitals.com/wp-content/uploads/2023/02/examination.png" alt="" style={{ width: "80px", height: "80px" }} />
                                    <h4 className="heading6 m-4 text-center">
                                        Medical Health & Checkup
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card-effect">
                                <div class="card-content-effect text-center">
                                    <img src="https://preethihospitals.com/wp-content/uploads/2023/04/yoga-pose.png" alt="" style={{ width: "80px", height: "80px" }} />
                                    <h4 className="heading6 m-4 text-center">
                                        Nutrition and
                                        Dietetics
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card-effect">
                                <div class="card-content-effect text-center">
                                    <img src="https://preethihospitals.com/wp-content/uploads/2023/02/nursing-home-1.png" alt="" style={{ width: "80px", height: "80px" }} />
                                    <h4 className="heading6 m-4 text-center">
                                        60+ Elder
                                        Care
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card-effect">
                                <div class="card-content-effect text-center">
                                    <img src="https://preethihospitals.com/wp-content/uploads/2023/04/yoga-pose.png" alt="" style={{ width: "80px", height: "80px" }} />
                                    <h4 className="heading6 m-4 text-center">
                                        Fitness and
                                        Wellness
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-white mt-5">
                <div className="container">
                    <div >
                        <div className="row justify-content-center p-5">
                            <div className="col-md-10">
                                <div className="row biomedicalbg rounded-4">
                                    <div className="col-md-8 ">
                                        <h3 className='text-center mb-3 heading7 fs-2 ' style={{ color: "#F1A902" }}>BIO MEDICAL MANAGMENT</h3>

                                        <p className="px-4 heading6">
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
                </div>
            </section>

            <section style={{
                backgroundColor: "#007C9D",
                // backgroundImage: "linear-gradient(180deg, #FFF0EA 0%, #FFF4EF 100%)"
            }}>

                <div>
                    <div className=''>
                        <div className='text-center mb-5 px-3 '>
                            <h3 className='heading7 text-center mt-4 pt-4 fs-3 ' style={{ color: "#F1A902" }}>OUR DEPARTMENTS</h3>
                            <h2 className='mt-4 heading5 fs-5'>Higher Standards For All Your Healthcare</h2>

                        </div>
                        <div className='container'>
                            <div className='row gy-4'>
                                <div className='col-md-4 '>
                                    <a href="/" className='text-decoration-none'>
                                        <div class="card custom-card " data-aos="fade-right" data-aos-duration="500" >
                                            <div className='text-center pt-3'>
                                                <img src="https://preethihospitals.com/wp-content/uploads/2022/11/Emergency-Trauma-Care.png"
                                                    className="card-img-top zoom-effect img-fluid w-25"
                                                    alt="..." />
                                            </div>

                                            <div class="card-body heading5">
                                                <div class="content" style={{ padding: "18px" }}>
                                                    <div class="category-info">

                                                        <div class="category-list">
                                                            <h4 className='text-center pt-2 '>Emergency
                                                            </h4>
                                                            <p className='text-center pt-3'>Prompt care in the golden hour through advanced care, resuscitation and early damage control surgical care.</p>

                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-md-4 '>
                                    <a href="/" className='text-decoration-none'>
                                        <div class="card custom-card pt-3 " data-aos="fade-right" data-aos-duration="500" >

                                            <div className='text-center'>
                                                <img src="https://preethihospitals.com/wp-content/uploads/2022/11/Orthopaedics.png"
                                                    className="card-img-top zoom-effect img-fluid w-25"
                                                    alt="..." />
                                            </div>
                                            <div class="card-body heading5">
                                                <div class="content" style={{ padding: "18px" }}>
                                                    <div class="category-info">

                                                        <div class="category-list">
                                                            <h4 className='text-center pt-2'>Orthopaedics
                                                            </h4>
                                                            <p className='text-center pt-3'>Our doctors are trained at various advanced and reputed centres to overlook  trauma and as result orthopedics.</p>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-md-4'>
                                    <a href="/" className='text-decoration-none'>
                                        <div class="card custom-card pt-3 " data-aos="fade-right" data-aos-duration="500" >
                                            <div className='text-center'>
                                                <img src="https://preethihospitals.com/wp-content/uploads/2022/11/Obstetrics-Gynecology-and-Fertility-Care-IVF.png"
                                                    className="card-img-top zoom-effect img-fluid w-25"
                                                    alt="..." />
                                            </div>
                                            <div class="card-body heading5">
                                                <div class="content" style={{ padding: "18px" }}>
                                                    <div class="category-info">

                                                        <div class="category-list">
                                                            <h4 className='text-center pt-2'> Gynaecology
                                                            </h4>
                                                            <p className='text-center pt-3'>The best treatment for women's health, fertility care and infertility and in their high-risk of deliveries with ease.</p>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-md-4'>
                                    <a href="/" className='text-decoration-none'>
                                        <div class="card custom-card pt-3 " data-aos="fade-left" data-aos-duration="500">

                                            <div className='text-center'>
                                                <img src="https://preethihospitals.com/wp-content/uploads/2022/11/Cardiology.png"
                                                    className="card-img-top zoom-effect img-fluid w-25"
                                                    alt="..." />
                                            </div>
                                            <div class="card-body heading5">
                                                <div class="content" style={{ padding: "18px" }}>
                                                    <div class="category-info">

                                                        <div class="category-list">
                                                            <h4 className='text-center pt-2'>Cardiology
                                                            </h4>
                                                            <p className='text-center pt-3'>Prevention and treatment of cardiac diseases for the achievement of better health outcomes quality of life.</p>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-md-4'>
                                    <a href="/" className='text-decoration-none'>
                                        <div class="card custom-card pt-3 " data-aos="fade-left" data-aos-duration="500">

                                            <div className='text-center'>
                                                <img src="https://preethihospitals.com/wp-content/uploads/2022/11/Nephrology-Renal-Transplant.png"
                                                    className="card-img-top zoom-effect img-fluid w-25"
                                                    alt="..." />
                                            </div>
                                            <div class="card-body heading5">
                                                <div class="content" style={{ padding: "18px" }}>
                                                    <div class="category-info">

                                                        <div class="category-list">
                                                            <h4 className='text-center pt-2'>Nephrology
                                                            </h4>
                                                            <p className='text-center pt-3'>Comprehensive care for acute or chronic kidney diseases with advanced diagnostic procedures,  dialysis support  transplant</p>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='mt-5 testimonal'>
                <h3 className='text-center mb-3 heading7 fs-2 ' style={{ color: "#F1A902" }}>Why Choose Us?</h3>
                <h2 className='mt-3 heading5 fs-5 text-center'>
                    Dreaming to be a medical professional !!</h2>
                <div className="container">
                    <div className="row p-5">
                        <div className="col-md-5">
                            <img src="https://img.freepik.com/free-photo/3d-rendering-hospital-building_23-2150896634.jpg?size=626&ext=jpg&uid=R124346864&ga=GA1.1.705659462.1705845875&semt=sph" alt="" className='img-fluid ' />
                        </div>
                        <div className="col-md-7">
                            <p className='heading6'>Axess Institute of allied health sciences offers the best opportunity to be healthcare professionals to support medical doctors and nurses, such as medical technologists, physical therapists, occupational therapists, and medical assistants.</p>
                            <h4 className='heading7 mb-3' style={{ color: "#F1A902" }}>Highlights</h4>
                            <ul className='lists heading6'>
                                <li>☑️ Best-in-class training sessions</li>
                                <li>☑️ Experienced teachers and medical professionals</li>
                                <li>☑️ Advanced practical laboratory</li>
                                <li>☑️ Secure learning environment</li>
                                <li>☑️ Specialised Service</li>
                                <li>☑️ Comprehensive Patient Care</li>
                                <li>☑️ World-class Infrastructure
                                </li>
                                <li>☑️ MRI Scan Facilities
                                </li>
                                <li>☑️ 24/7 Advanced Care
                                </li>
                                <li>☑️ 2100 Hospital Beds
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            <section className="container">
                <div>
                    <div>
                        <h3 className='text-center mb-3 heading7 fs-2 ' style={{ color: "#F1A902" }}>CENTER OF EXCELLENCE</h3>

                        <p className="pt-2 fs-5 text-center heading6">
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
                                        <p className='heading6'>Cardiology</p>
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
                                        <p className='heading6'>Orthopedics</p>
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
                                        <p className='heading6'>Oncology</p>
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
                                        <p className='heading6'>Nephrology</p>
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
                                        <p className='heading6'>Gastroenterology</p>
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
                                        <p className='heading6'>
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

            <section className='nav-banner testimonal mt-5' id="testimonial">
                <div>
                    <h3 className='heading7 text-center mt-4 pt-4 fs-3 ' style={{ color: "#F1A902" }}>TESTIMONIAL</h3>
                    <h2 className='mt-3 heading5 fs-5 text-center'>What do our patients have to say about us?</h2>                    <div
                        className="elementor-widget-container"
                        style={{ margin: "2rem" }}>
                        <div
                            className="section-title text-center aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            data-aos-once="true"
                        >


                        </div>
                    </div>
                    <div className="">
                        <div className="carousel ">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                <div className="carousel-inner container">
                                    <div className="carousel-item active" data-bs-interval="3000">
                                        <div className="row p-3">
                                            <div className="col-md-4 mb-5">

                                                <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                                                    <div>
                                                        <img src={Profiledub} alt="" className='w-50 mx-auto' />
                                                    </div>
                                                    <div className='text-black py-3 my-3 ' >
                                                        <h4 className='heading9 fw-bold fs-5 '>Sarah Jones</h4>
                                                        <p className='heading5'>CEO</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                                                <div className="user">
                                                    <div className="card-description " >
                                                        <div className="title-area">
                                                            <div className="title-info">
                                                                <h3 className="title heading9">Sarah Jones, CEO</h3>
                                                                <span className="date"> </span>
                                                            </div>

                                                            <div className="rating">
                                                                <ul className="p-0 mx-auto my-0">
                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="my-3 border"></div>
                                                        <div className="seperator"></div>
                                                        <p className="description heading5">From scrappy startup to industry leader, Axess helped us scale with custom software that empowers our team and delights our customers. They truly understood our vision and translated it into a seamless, efficient solution.{" "}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3000">
                                        <div className="row p-3">
                                            <div className="col-md-4 mb-5">
                                                <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                                                    <div>
                                                        <img src={Profiledub} alt="" className='w-50 mx-auto' />
                                                    </div>
                                                    <div className='text-red py-3 my-3'>
                                                        <h4 className='heading9 fw-bold fs-5'>Mark Davis</h4>
                                                        <p className='heading5'>CIO</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                                                <div className="user">
                                                    <div className="card-description ">
                                                        <div className="title-area">
                                                            <div className="title-info">
                                                                <h3 className="title heading9">Mark Davis, CIO</h3>
                                                                <span className="date"> </span>
                                                            </div>

                                                            <div className="rating">
                                                                <ul className="p-0 mx-auto my-0">
                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="my-3 border"></div>
                                                        <div className="seperator"></div>
                                                        <p className="description heading5">Axess went above and beyond to develop a complex enterprise software solution that met all our regulatory requirements and security needs. Their collaborative approach and technical expertise were invaluable.{" "}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3000">
                                        <div className="row p-3">
                                            <div className="col-md-4 mb-5">
                                                <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                                                    <div>
                                                        <img src={Profiledub} alt="" className='w-50 mx-auto' />
                                                    </div>
                                                    <div className='text-red py-3 my-3'>
                                                        <h4 className='heading9 fw-bold fs-5'>Emily Chen</h4>
                                                        <p className='heading5'>COO</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                                                <div className="user">
                                                    <div className="card-description ">
                                                        <div className="title-area">
                                                            <div className="title-info">
                                                                <h3 className="title heading9">Emily Chen, COO</h3>
                                                                <span className="date"> </span>
                                                            </div>

                                                            <div className="rating">
                                                                <ul className="p-0 mx-auto my-0">
                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="my-3 border"></div>
                                                        <div className="seperator"></div>
                                                        <p className="description heading5">We were struggling with outdated software that hindered our growth. Axess modernized our entire system, boosting productivity and streamlining operations. The ROI has been incredible!{" "}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3000">
                                        <div className="row p-3">
                                            <div className="col-md-4 mb-5">
                                                <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                                                    <div>
                                                        <img src={Profiledub} alt="" className='w-50 mx-auto' />
                                                    </div>
                                                    <div className='text-red py-3 my-3'>
                                                        <h4 className='heading9 fw-bold fs-5'>Rani Singh</h4>
                                                        <p className='heading5'>CEO</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                                                <div className="user">
                                                    <div className="card-description ">
                                                        <div className="title-area">
                                                            <div className="title-info">
                                                                <h3 className="title heading9">Rani Singh, CEO</h3>
                                                                <span className="date"> </span>
                                                            </div>

                                                            <div className="rating">
                                                                <ul className="p-0 mx-auto my-0">
                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="my-3 border"></div>
                                                        <div className="seperator"></div>
                                                        <p className="description heading5">"From bootstrapped startup to industry leader, Axess propelled us forward with custom software that empowers our team and delights our customers. Their team truly understood our vision and translated it into a seamless, efficient solution. They were the wind beneath our wings!"{" "}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="3000">
                                        <div className="row p-3">
                                            <div className="col-md-4 mb-5">
                                                <div className='text-center pt-3 mt-3' data-aos="zoom-in" data-aos-duration="600">
                                                    <div>
                                                        <img src={Profiledub} alt="" className='w-50 mx-auto' />
                                                    </div>
                                                    <div className='text-red py-3 my-3'>
                                                        <h4 className='heading9 fw-bold fs-5'>Akhilesh Kumar</h4>
                                                        <p className='heading5'>CIO</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8" data-aos="zoom-in" data-aos-duration="600">
                                                <div className="user">
                                                    <div className="card-description ">
                                                        <div className="title-area">
                                                            <div className="title-info">
                                                                <h3 className="title heading9">Akhilesh Kumar, CIO</h3>
                                                                <span className="date"> </span>
                                                            </div>

                                                            <div className="rating">
                                                                <ul className="p-0 mx-auto my-0">
                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>

                                                                    <li className="has-rating list-inline-item">
                                                                        <i className="star-icon">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="16"
                                                                                height="16"
                                                                                fill="currentColor"
                                                                                className="bi bi-star-fill"
                                                                                viewBox="0 0 16 16"
                                                                            >
                                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                                            </svg>
                                                                        </i>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="my-3 border"></div>
                                                        <div className="seperator"></div>
                                                        <p className="description heading5">"Axess went the extra mile to develop a complex enterprise software solution that met all our regulatory requirements and security needs. Their collaborative approach and technical expertise were invaluable. They were like the missing piece to our digital puzzle!"{" "}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
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


        </div >
    );
}

