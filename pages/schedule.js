import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import Sponsors from "../components/sponsors";

export default function SchedulePage() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <title>Hackoverflow 4.0</title>
                <meta name="description" content />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" type="image/x-icon" href="img/aarohan-logo.png" />
                <link rel="stylesheet" href="css/bootstrap.min.css" />
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/magnific-popup.css" />
                <link rel="stylesheet" href="css/font-awesome.min.css" />
                <link rel="stylesheet" href="css/themify-icons.css" />
                <link rel="stylesheet" href="css/nice-select.css" />
                <link rel="stylesheet" href="css/flaticon.css" />
                <link rel="stylesheet" href="css/animate.css" />
                <link rel="stylesheet" href="css/slicknav.css" />
                <link rel="stylesheet" href="css/style.css" />
                <script src="js/vendor/modernizr-3.5.0.min.js"></script>
                <script src="js/vendor/jquery-1.12.4.min.js"></script>
                <script src="js/popper.min.js"></script>
                <script src="js/bootstrap.min.js"></script>
                <script src="js/owl.carousel.min.js"></script>
                <script src="js/isotope.pkgd.min.js"></script>
                <script src="js/ajax-form.js"></script>
                <script src="js/waypoints.min.js"></script>
                <script src="js/jquery.counterup.min.js"></script>
                <script src="js/imagesloaded.pkgd.min.js"></script>
                <script src="js/scrollIt.js"></script>
                <script src="js/jquery.scrollUp.min.js"></script>
                <script src="js/wow.min.js"></script>
                <script src="js/nice-select.min.js"></script>
                <script src="js/jquery.slicknav.min.js"></script>
                <script src="js/jquery.magnific-popup.min.js"></script>
                <script src="js/jquery.countdown.js"></script>
                <script src="js/plugins.js"></script>
                <script src="js/contact.js"></script>
                <script src="js/jquery.ajaxchimp.min.js"></script>
                <script src="js/jquery.form.js"></script>
                <script src="js/jquery.validate.min.js"></script>
                <script src="js/mail-script.js"></script>
                <script src="js/main.js"></script>
            </Head>
            <div>
                <div>
                    <Navbar />
                    <div className="slider_area slider_bg_1">
                        <div className="slider_text">
                            <div className="container">
                                <div className="position_relv">
                                    <div className="row">
                                        <div className="col-xl-8">
                                            <div className="title_text title_text2 ">
                                                <h3>Event Schedule</h3>
                                                <a href="https://calendar.google.com/calendar/r/eventedit?text=Hackoverflow+4.0&dates=20210402/20210403" className="boxed-btn-white">
                                                    Add to your Calendar
                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="countDOwn_area">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-4 col-md-6 col-lg-4">
                                        <div className="single_date">
                                            <i className="ti-location-pin" />
                                            <span>Online (Discord)</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-md-6 col-lg-3">
                                        <div className="single_date">
                                            <i className="ti-alarm-clock" />
                                            <span>2-3 April, 2021</span>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-12 col-lg-5">
                                        <span id="clock" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="event_area plus_padding">
                        <h1 className="vr_text d-none d-lg-block">Event Schedule</h1>
                        <div className="container">
                            <div className="double_line">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3">
                                        <div className="date">
                                            <h3 style={{ color: 'blue' }}>22 March, 2021</h3>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-9">
                                        <div className="single_speaker">
                                            <img src="/idea.png" alt style={{ width: 80, height: 80 }} />
                                            <div className="speaker-name">
                                                <div className="heading d-flex justify-content-between align-items-center">
                                                    <span>Idea Submission Phase Starts</span>
                                                    <div className="time">
                                                        12:01 AM
                  </div>
                                                </div>
                                                <p>Period for idea phase starts. Participants can submit the problem as well as the solution they come
                  up for that problem. They must mention the tech stack used as well other necessary requirements. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="double_line">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3">
                                        <div className="date">
                                            <h3 style={{ color: 'blue' }}>31 March, 2021</h3>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-9">
                                        <div className="single_speaker">
                                            <img src="/lightbulb.png" style={{ width: 80, height: 80 }} />
                                            <div className="speaker-name">
                                                <div className="heading d-flex justify-content-between align-items-center">
                                                    <span>Idea Submission Phase Ends</span>
                                                    <div className="time">
                                                        11:59 PM
                  </div>
                                                </div>
                                                <p>Now that you have thought enough about your idea, sit back and relax for a day till the judges review
                                                your idea!
                  Once your idea is cleared, all you need is an energy drink and your laptop!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="double_line">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3">
                                        <div className="date">
                                            <h3 style={{ color: 'blue' }}>02 April, 2021</h3>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-9">
                                        <div className="single_speaker">
                                            <img src="/shuttle.png" style={{ width: 80, height: 80 }} alt />
                                            <div className="speaker-name">
                                                <div className="heading d-flex justify-content-between align-items-center">
                                                    <span>Hackoverflow flags off!</span>
                                                    <div className="time">
                                                        10:00 AM
                  </div>
                                                </div>
                                                <p>Ready! Set! Go!</p>
                                            </div>
                                        </div>
                                        <div className="single_speaker">
                                            <img src="/keyboard.png" style={{ width: 80, height: 80 }} alt />
                                            <div className="speaker-name">
                                                <div className="heading d-flex justify-content-between align-items-center">
                                                    <span>Typing Race</span>
                                                    <div className="time">
                                                        04:00 PM
                  </div>
                                                </div>
                                                <p>Whose fingers are the fastest in the west?</p>
                                            </div>
                                        </div>
                                        <div className="single_speaker">
                                            <img src="/podium.png" style={{ width: 80, height: 80 }} alt />
                                            <div className="speaker-name">
                                                <div className="heading d-flex justify-content-between align-items-center">
                                                    <span>Judges' Address</span>
                                                    <div className="time">
                                                        06:00 PM
                  </div>
                                                </div>
                                                <p>Few words of motivation from our knowledgeable and experienced judges!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="double_line">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3">
                                        <div className="date">
                                            <h3 style={{ color: 'blue' }}>03 April, 2021</h3>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-9">
                                        <div className="single_speaker">
                                            <img src="/surprise.png" style={{ width: 80, height: 80 }} alt />
                                            <div className="speaker-name">
                                                <div className="heading d-flex justify-content-between align-items-center">
                                                    <span>Mini-Event</span>
                                                    <div className="time">
                                                        10:00 AM
                  </div>
                                                </div>
                                                <p>Surprise!!!</p>
                                            </div>
                                        </div>
                                        <div className="single_speaker">
                                            <img src="/review.jpg" style={{ width: 80, height: 80 }} alt />
                                            <div className="speaker-name">
                                                <div className="heading d-flex justify-content-between align-items-center">
                                                    <span>Judges' Review</span>
                                                    <div className="time">
                                                        04:00 PM
                  </div>
                                                </div>
                                                <p>Valuable review by Judges to improve the existing code you have written and be the best among all the
                  competitors!</p>
                                            </div>
                                        </div>
                                        <div className="single_speaker">
                                            <img src="/finish-line.png" style={{ width: 80, height: 80 }} alt />
                                            <div className="speaker-name">
                                                <div className="heading d-flex justify-content-between align-items-center">
                                                    <span>Coding period ends</span>
                                                    <div className="time">
                                                        10:00 PM
                  </div>
                                                </div>
                                                <p>Contestants stop the coding and submit their codes for further evaluation process.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resister_book resister_bg_1">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="resister_text text-center">
                                        <h3>Register Now to Lodge<br />
              Your Presence</h3>
                                        <a href="#" className="boxed-btn-white">Register!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="brand_area">
    <div class="container">
<div class="row">
  <div class="w-full pt-4 md:pt-16 md:pb-8 flex md:flex-row flex-col items-center md:justify-around"
    style="display: flex; justify-content: center; align-items: center;">
    <div class="p-3">
      <img src="/devfolio.png" style="margin: 25px;" />
    </div>
    <div class="p-3">
      <img src="/tezos.png" style="margin: 25px;" />
    </div>
    <div class="p-3">
      <img src="/portis.png" style="margin: 25px;" />
    </div>
    <div class="p-3">
      <img src="/Portis_Logo-Colored.png" />
    </div>
  </div>
</div>
    </div>
  </div> */}
                    <Sponsors />

                    <Footer />
                </div>

            </div>
        </>
    )
};