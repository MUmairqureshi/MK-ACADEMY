

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import { Link } from "react-router-dom";

import { learning360Img01, learning360Img02, learning360Img03, learning360Img04 } from '../../assets/images';

// import { awardWinningImg } from '../../assets/images';

const LearningCategory = () => {
  return (
        <>
             <section className='learning_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="learning360_heading">
                                <h1>360 <sup>°</sup> LEARNING</h1>
                                <p>It&apos;s easy to book online classes now.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                            <div className='col-lg-3 col-sm-6'>
                            <div className="learning360">
                            <div>
                                <img src={learning360Img01} alt=""></img>
                            </div>
                            <div className="learning360_content">
                                <h3>BOOKS</h3>
                                <p>Books strengthen the core concepts and help prepare kids for their grade level and beyond
                                </p>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="learning360">
                                <div>
                                    <img src={learning360Img02} alt=""></img>
                                </div>
                                <div className="learning360_content">
                                    <h3>ONLINE PRACTICE (A4ACE)</h3>
                                    <p>A process by which individuals take the initiative with or without the assistance
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="learning360">
                                <div>
                                    <img src={learning360Img03} alt=""></img>
                                </div>
                                <div className="learning360_content">
                                    <h3>VIRTUAL CLASSES</h3>
                                    <p>A guided online process for kids to learn by connecting with a teacher in a virtual classroom
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="learning360">
                                <div>
                                    <img src={learning360Img04} alt=""></img>
                                </div>
                                <div className="learning360_content">
                                    <h3>IN PERSON CLASSES</h3>
                                    <p>A guided methodology trough which kids learn in an in-person classroom setting
                                    </p>
                                </div>
                            </div>
                </div>
            </div>
        </div>
            </section>

            {/* <section className='award_winning_section'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 mb-4'>
                        <div className="chartImage">
                            <img className="mw-100" src={awardWinningImg}></img>
                        </div>
                        </div>

                        <div className='col-md-6 mb-4'>
                        <div className="award_content">
                        <h1>AWARD WINNING</h1>
                        <p> Our award winning programs have made student’s reach their optimum potential leading to best
                            career paths.</p>
                    </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
       
  )
}

export default LearningCategory