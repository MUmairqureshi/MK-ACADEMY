
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

// import { userFeedbackImg } from '../../assets/images';

const QuestionCategory = () => {
  return (
        <>
            <section className='questions_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-10 mx-auto'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-3 col-sm-6 mb-4'>
                                    <div className="single_circle">
                                        <h2>850+</h2>
                                        <h3 className="mt-2">Work Books<br/>&amp;<br/>Practice Test</h3>
                                    </div>
                                </div>

                                <div className='col-lg-3 col-sm-6 mb-4'>
                                    <div className="single_circle">
                                        <h2>10,000</h2>
                                        <h3 className="mt-2">Video lectures</h3>
                                    </div>
                                </div>

                                <div className='col-lg-3 col-sm-6 mb-4'>
                                    <div className="single_circle">
                                        <h2>40,000<FontAwesomeIcon icon={faPlus} /></h2>
                                        <h3 className="mt-2">Video lectures</h3>
                                    </div>
                                </div>

                                <div className='col-lg-3 col-sm-6 mb-4'>
                                    <div className="single_circle">
                                        <h2>Successful admissions</h2>
                                        <h3 className="mt-2">to advanced programs</h3>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                </section>

                {/* <section className='client_say_section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="content mb-md-5">
                                    <h1>what our client’s say</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        <SwiperSlide>
                            <div className="item">
                            <div className="client_card_main">
                                <div className="client_card">
                                    <div style={{position: 'relative'}}>
                                        <div className='img_div'>
                                            <img src={userFeedbackImg} className='placeholder_image'></img>
                                        </div>
                                        <span className="client_card_image"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                                    </div>
                                
                                    <div className="content_div text-center align-self-center" style={{width: 'fit-content'}}>
                                        <h4 className="">asdasd</h4>
                                        <h6>asdsczxc</h6>
                                        
                                                <div className="mt-3">
                                                <button type="button" className="moreless-button review-description" data-toggle="modal" data-target="#exampleModal35" data-content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32" data-id="35">
                                                    Read more
                                                </button>
                                                </div>
                                </div>
                                    
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <div className="client_card_main">
                                    <div className="client_card">
                                        <div style={{position: 'relative'}}>
                                            <div className='img_div'>
                                                <img src={userFeedbackImg} className='placeholder_image'></img>
                                            </div>
                                            <span className="client_card_image"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                                        </div>
                                    
                                        <div className="content_div text-center align-self-center" style={{width: 'fit-content'}}>
                                            <h4 className="">asdasd</h4>
                                            <h6>asdsczxc</h6>
                                            
                                                    <div className="mt-3">
                                                    <button type="button" className="moreless-button review-description" data-toggle="modal" data-target="#exampleModal35" data-content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32" data-id="35">
                                                        Read more
                                                    </button>
                                                    </div>
                                    </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="item">
                            <div className="client_card_main">
                                <div className="client_card">
                                    <div style={{position: 'relative'}}>
                                        <div className='img_div'>
                                            <img src={userFeedbackImg} className='placeholder_image'></img>
                                        </div>
                                        <span className="client_card_image"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                                    </div>
                                
                                    <div className="content_div text-center align-self-center" style={{width: 'fit-content'}}>
                                        <h4 className="">asdasd</h4>
                                        <h6>asdsczxc</h6>
                                        
                                                <div className="mt-3">
                                                <button type="button" className="moreless-button review-description" data-toggle="modal" data-target="#exampleModal35" data-content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32" data-id="35">
                                                    Read more
                                                </button>
                                                </div>
                                </div>
                                    
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="item">
                            <div className="client_card_main">
                                <div className="client_card">
                                    <div style={{position: 'relative'}}>
                                        <div className='img_div'>
                                            <img src={userFeedbackImg} className='placeholder_image'></img>
                                        </div>
                                        <span className="client_card_image"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                                    </div>
                                
                                    <div className="content_div text-center align-self-center" style={{width: 'fit-content'}}>
                                        <h4 className="">asdasd</h4>
                                        <h6>asdsczxc</h6>
                                        
                                                <div className="mt-3">
                                                <button type="button" className="moreless-button review-description" data-toggle="modal" data-target="#exampleModal35" data-content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32" data-id="35">
                                                    Read more
                                                </button>
                                                </div>
                                </div>
                                    
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                            <div className="client_card_main">
                                <div className="client_card">
                                    <div style={{position: 'relative'}}>
                                        <div className='img_div'>
                                            <img src={userFeedbackImg} className='placeholder_image'></img>
                                        </div>
                                        <span className="client_card_image"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                                    </div>
                                
                                    <div className="content_div text-center align-self-center" style={{width: 'fit-content'}}>
                                        <h4 className="">asdasd</h4>
                                        <h6>asdsczxc</h6>
                                        
                                                <div className="mt-3">
                                                <button type="button" className="moreless-button review-description" data-toggle="modal" data-target="#exampleModal35" data-content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32" data-id="35">
                                                    Read more
                                                </button>
                                                </div>
                                </div>
                                    
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        
                        </Swiper>
                    </div>
                </section> */}
        </>
       
  )
}

export default QuestionCategory