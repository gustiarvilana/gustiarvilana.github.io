import React from 'react'

const Home = () => {
    return (
        <>
            {/* // Hero */}
            <div className="hero" id="home">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-12 text-center">
                            <div className="hero-content">
                                <div className="hero-text">
                                    <p />
                                    <h1>Gustiar Arief Vilana</h1>
                                    <h2 />
                                    <div className="typed-text">Web Programmer</div>
                                </div>
                                <div className="hero-btn">
                                    {/* <a class="btn" href="">Hire Me</a> */}
                                    <a className="btn" href="https://wa.me/62895360707874" target="_blank">Hubungi Saya</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 d-none d-md-block">
                            <div className="hero-image">
                                <img src="asset/img/hero1.png" alt="Hero Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // Hero */}


            {/* // About Start */}
            <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="asset/img/about.jpg" alt="Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-header text-left mt-3">
                                    <p>Tentang Saya</p>
                                    <h2>Tentang Saya</h2>
                                </div>
                                <div className="about-text">
                                    <p>
                                        Saya fokus memasuki dunia Programming sudah mencapai 2 tahun, meski begitu saya
                                        berpengalaman 10 Tahun di dunia
                                        pekerjaan. Saya sangat menyukai teknologi-teknologi yang ceepat berkembang. hal itu
                                        memicu rasa keingin tahuan
                                        dan membuat pengetahuan saya semakin jauh. <br />
                                        Bertanggung jawab adalah nilai positif saya, dan saya mampuh bekerja secara tim maupun
                                        secara individu.
                                    </p>
                                </div>
                                <div className="skills">
                                    <div className="skill-name">
                                        <p>Laravel</p>
                                        <p>80%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="skill-name">
                                        <p>Rest API</p>
                                        <p>80%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="skill-name">
                                        <p>Livewire</p>
                                        <p>75%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="skill-name">
                                        <p>React JS</p>
                                        <p>70%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="skill-name">
                                        <p>MySql</p>
                                        <p>80%</p>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                </div>
                                <a className="btn" href="/doc/PDF/Gustiar_Arief_Vilana-resume.pdf" download>Print
                                    CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // About Start */}


            {/* Service Start */}
            <div className="service" id="service">
                <div className="container">
                    <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>Apa yang dapat saya lakukan?</p>
                        <h2>Kemampuan Saya</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa fa-laptop" />
                                </div>
                                <div className="service-text">
                                    <h3>Laravel</h3>
                                    <p>
                                        Laravel adalah Framerok berbasis bahasa pemrograman php, dapat juga dupadukan dengan
                                        bahasa lainnya
                                        sesuai kebutuhan.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa fa-laptop-code" />
                                </div>
                                <div className="service-text">
                                    <h3>React JS</h3>
                                    <p>
                                        React JS adalah library dari JavaScript yang sering digunakan di Front End suatu
                                        aplikasi.
                                        sehingga aplikasi terlihat responsive dan moderen.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa fa-server" aria-hidden="true" />
                                </div>
                                <div className="service-text">
                                    <h3>Rest API</h3>
                                    <p>
                                        Rest API adalah antarmuka yang digunakan untuk berinteraksi antar Program dengan bahasa
                                        yang berbeda. sering digunakan
                                        pada program sekala besar.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="service-item">
                                <div className="service-icon">
                                    <i className="fa fa-database" aria-hidden="true" />
                                </div>
                                <div className="service-text">
                                    <h3>MySQL</h3>
                                    <p>
                                        MySQL adalah sebuah perangkat lunak sistem manajemen basis data SQL
                                        atau DBMS yang multialur, multipengguna, dengan
                                        sekitar 6 juta instalasi di seluruh dunia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}


            {/* Experience Start */}
            <div className="experience" id="experience">
                <div className="container">
                    <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>My Resume</p>
                        <h2>Pengalaman bekerja</h2>
                    </header>
                    <div className="timeline">
                        <div className="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">2021 - Sekarang</div>
                                <h2>Web Programmer</h2>
                                <h4>PT RAM Armalia Abadi</h4>
                                <p>
                                    {/* Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit
                      semper pretium. */}
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                            <div className="timeline-text">
                                <div className="timeline-date">2012 - 2021</div>
                                <h2>Store Technician</h2>
                                <h4>PT Matahari Departmen Store,Tbk</h4>
                                <p>
                                    {/* Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit
                      semper pretium. */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Job Experience End */}


            {/* Portfolio Start */}
            <div className="portfolio" id="portfolio">
                <div className="container">
                    <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>My Portfolio</p>
                        <h2>Portfolio</h2>
                    </div>
                    {/* <div class="row">
                  <div class="col-12">
                      <ul id="portfolio-filter">
                          <li data-filter="*" class="filter-active">All</li>
                          <li data-filter=".filter-1">Web Design</li>
                          <li data-filter=".filter-2">Mobile Apps</li>
                          <li data-filter=".filter-3">Game Dev</li>
                      </ul>
                  </div>
              </div> */}
                    <div className="row portfolio-container">
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src="asset/img/portfolio-1.jpg" alt="Image" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>Helpdesk Local</h3>
                                    <a className="btn" href="asset/img/portfolio-1.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src="asset/img/portfolio-2.jpg" alt="Image" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>Target Monitoring</h3>
                                    <a className="btn" href="asset/img/portfolio-2.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src="asset/img/portfolio-3.jpg" alt="Image" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>Agen AQUA</h3>
                                    <a className="btn" href="asset/img/portfolio-3.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src="asset/img/portfolio-4.jpg" alt="Image" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>LHP Elektronik</h3>
                                    <a className="btn" href="asset/img/portfolio-4.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-2 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src="asset/img/portfolio-5.jpg" alt="Image" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>Input Penjualan</h3>
                                    <a className="btn" href="asset/img/portfolio-5.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="1s">
                            <div className="portfolio-wrap">
                                <div className="portfolio-img">
                                    <img src="asset/img/portfolio-6.jpg" alt="Image" />
                                </div>
                                <div className="portfolio-text">
                                    <h3>Kasbon Monitoring</h3>
                                    <a className="btn" href="asset/img/portfolio-6.jpg" data-lightbox="portfolio">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portfolio End */}


            {/* Footer Start */}
            <div className="footer wow fadeIn" data-wow-delay="0.3s">
                <div className="container-fluid">
                    <div className="container">
                        <div className="footer-info">
                            <h2>Gustiar Arief Vilana</h2>
                            <h3>Jl.Nyomlong Gg.Busomi, Kota Sukabumi, Jawa Barat, Indonesia</h3>
                            <div className="footer-menu">
                                <p>0895 3607 07874</p>
                                <p>guztiar.profile@gmail.com</p>
                            </div>
                            <div className="footer-social">
                                <a href><i className="fab fa-twitter" /></a>
                                <a href><i className="fab fa-facebook-f" /></a>
                                <a href><i className="fab fa-youtube" /></a>
                                <a href><i className="fab fa-instagram" /></a>
                                <a href><i className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="container copyright">
                        <p>© <a href="#">Gustiar Arief Vilana</a>, All Right Reserved</p>
                    </div>
                </div>
            </div>
            {/* Footer End */}


            {/* Back to top button */}
            <a href="#" className="btn back-to-top"><i className="fa fa-chevron-up" /></a>

            {/* Pre Loader */}
            {/* <div id="loader" className="show"> */}
            {/* <div className="loader" /> */}
            {/* </div> */}


        </>

    )
}

export default Home