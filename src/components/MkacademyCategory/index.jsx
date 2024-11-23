
/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 16/09/2023 - 01:41:59
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/09/2023
 * - Author          : Saif
 * - Modification    :
 **/

// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Link } from "react-router-dom"
// import { subscribeImg01, subscribeImg02, subscribeImg03 } from "../../assets/images";

const Mkacademy = () => {
  return (
    <>
         <section className="second_section">
            <div className="container" >
                <div className="row align-items-center" >
                    <div className="col-lg-6 " >
                        <div className="img-div" >
                            <img src="https://custom3.mystagingserver.site/gowri_vemuri/public/website/assets/images/student_img_11.jpg" className="img-fluid" alt=""></img>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4" >
                        <div className="content" >
                            <h1 className="text-white mt-3">MK ACADEMY</h1>
                            <p className="text-justify text-white">Take the next steps towards building a strong math &amp; ELA
                                foundation that will give your child to reach their true potential.</p>
                            <p className="text-justify text-white">Take your child’s education to next level</p>
                            <p className="text-justify text-white">Our highly successful program is based on improving learning and
                                study skills to support elementary , middle, and high school students both in and out of the
                                classroom. We offer both online and in-person tutoring services. </p>
                            <div className="ActionButtons d-flex flex-wrap gap-10 my-3" >
                                <div>
                                    {/* <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/courses-listing" className="">Academic year</a> */}
                                    <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/courses-listing">
                                        Academic year
                                    </Link>
                                </div>
                                <div>
                                    {/* <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/courses-listing" className="">Summer courses</a> */}
                                    <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/courses-listing">
                                        Summer courses
                                    </Link>
                                </div>
                                <div>
                                    {/* <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/courses-listing" className="">View available slots</a> */}
                                    <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/courses-listing">
                                        View available slots
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
          </section>
          
         
    </>
  )
}

export default Mkacademy