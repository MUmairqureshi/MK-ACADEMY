import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Link } from "react-router-dom";

import {
  recentBlogsImg01,
  recentBlogsImg02,
  recentBlogsImg03,
} from "../../assets/images";

// import { learning360Img01, learning360Img02, learning360Img03, learning360Img04 } from '../../assets/images';

const RecentBlogs = () => {
  return (
    <>
      <section className="recent_blogs_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content_div">
                <div className="d-flex justify-content-between align-items-center">
                  <h1>RECENT BLOGS</h1>
                  <div className="actionBtn mt-3">
                    <Link href="https://custom3.mystagingserver.site/gowri_vemuri/public/blogs-listing">
                      Explore All
                    </Link>
                    {/* <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/blogs-listing">Explore All</a> */}
                  </div>
                </div>
                <p>
                  Engaging Math concepts unlocks the power of mathematics for
                  students. Visual cues such as numbers, words, symbols,
                  diagrams, charts, and graphs, this multi-sensory approach
                  makes it easier for students to understand complex
                  mathematical concepts and develop critical problem-solving
                  skills.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="main">
                    <div className="cards recent_blogs_card">
                      <div className="for_image">
                        <img
                          src={recentBlogsImg01}
                          className="img-fluid"
                          alt=""
                        ></img>
                      </div>
                      <div className="card01_content">
                        <div className="dummy">
                          <p className="dummy_text"></p>
                          <p className="date">Nov 30</p>
                        </div>
                        <h3>
                          Middle and high school math classes that are fun and
                          engaging
                        </h3>

                        <div className="content-blog d-none"></div>
                        <div className="new-content">
                          Math is a tiresome chore for many middle and high
                          school students. To others, it is the most intriguing
                          subject in the world. No matter how a student feels
                          about math, it is an essential field of education.
                          Moreover, math is inescapable. Contrary to popular
                          belief, mathematical concepts also apply to real-world
                          concepts. Numbers and logic are an integral part of
                          our lives. Thus, being good at math is a huge
                          flex.However, most middle, and high school math
                          classes are hard. As a result, students can quickly
                          lose interest and motivation. Ultimately, this leads
                          to poor understanding of concepts and
                          performance.Types of math classes in middle and high
                          schoolThere are multiple kinds of math classes in
                          middle and high school. However, they generally follow
                          a specific order. The order of math classes in middle
                          and high school is as follows:Algebra 1 –&nbsp;This is
                          the start of a student’s high school mathematical
                          journey. While Algebra 1 is typically taken in 9th
                          grade, many students attempt it in middle school. This
                          class isn’t as tricky as the rest of the math classes.
                          This is the foundation course for the rest of high
                          school math courses. Algebra 1 concepts are important
                          to do well on PSAT, SAT and ACT tests.Geometry
                          –&nbsp;The next class in line is geometry. Geometry is
                          about shapes, proofs, logic, and reasoning with
                          real-world geometrical applications. Geometry concepts
                          are important to do well on PSAT, SAT and ACT
                          tests.Algebra 2/Trigonometry –&nbsp;This is where the
                          math starts getting tricky. Students now need to solve
                          complex problems. Moreover, they must learn concepts
                          like complex inequalities, graphs, quadratics,
                          probability, polynomials, and much more. Algebra 2
                          concepts are important to do well on PSAT, SAT and ACT
                          tests.Pre-Calculus –&nbsp;As the name suggests, this
                          math class helps prepare students for Calculus. This
                          class covers series and sequences, limits,
                          probability, derivatives, vectors, functions, and
                          more.Calculus –&nbsp;This is the last step in the math
                          learning journey. This course is an extension of the
                          knowledge you’ve gained in Pre-calculus, studying
                          curves, differentiation, limits, and functions.How to
                          make middle and high school math classes fun and
                          engaging?To make math classes fun and engaging, try
                          Math-Knots. Math-Knots offers all the learning
                          material your child needs to excel in math. From
                          virtual classes to in-person classes and books,
                          Math-Knots provides a multi-faceted approach to
                          learning math.Consequently, Math-Knots makes math a
                          fun and easy learning subject!
                        </div>
                      </div>
                      <div className="actionBtn mt-3">
                        <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/blog-detail/8">
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="main">
                    <div className="cards recent_blogs_card">
                      <div className="for_image">
                        <img
                          src={recentBlogsImg02}
                          className="img-fluid"
                          alt=""
                        ></img>
                      </div>
                      <div className="card01_content">
                        <div className="dummy">
                          <p className="dummy_text"></p>
                          <p className="date">Nov 30</p>
                        </div>
                        <h3>
                          Middle and high school math classes that are fun and
                          engaging
                        </h3>

                        <div className="content-blog d-none"></div>
                        <div className="new-content">
                          Math is a tiresome chore for many middle and high
                          school students. To others, it is the most intriguing
                          subject in the world. No matter how a student feels
                          about math, it is an essential field of education.
                          Moreover, math is inescapable. Contrary to popular
                          belief, mathematical concepts also apply to real-world
                          concepts. Numbers and logic are an integral part of
                          our lives. Thus, being good at math is a huge
                          flex.However, most middle, and high school math
                          classes are hard. As a result, students can quickly
                          lose interest and motivation. Ultimately, this leads
                          to poor understanding of concepts and
                          performance.Types of math classes in middle and high
                          schoolThere are multiple kinds of math classes in
                          middle and high school. However, they generally follow
                          a specific order. The order of math classes in middle
                          and high school is as follows:Algebra 1 –&nbsp;This is
                          the start of a student’s high school mathematical
                          journey. While Algebra 1 is typically taken in 9th
                          grade, many students attempt it in middle school. This
                          class isn’t as tricky as the rest of the math classes.
                          This is the foundation course for the rest of high
                          school math courses. Algebra 1 concepts are important
                          to do well on PSAT, SAT and ACT tests.Geometry
                          –&nbsp;The next class in line is geometry. Geometry is
                          about shapes, proofs, logic, and reasoning with
                          real-world geometrical applications. Geometry concepts
                          are important to do well on PSAT, SAT and ACT
                          tests.Algebra 2/Trigonometry –&nbsp;This is where the
                          math starts getting tricky. Students now need to solve
                          complex problems. Moreover, they must learn concepts
                          like complex inequalities, graphs, quadratics,
                          probability, polynomials, and much more. Algebra 2
                          concepts are important to do well on PSAT, SAT and ACT
                          tests.Pre-Calculus –&nbsp;As the name suggests, this
                          math class helps prepare students for Calculus. This
                          class covers series and sequences, limits,
                          probability, derivatives, vectors, functions, and
                          more.Calculus –&nbsp;This is the last step in the math
                          learning journey. This course is an extension of the
                          knowledge you’ve gained in Pre-calculus, studying
                          curves, differentiation, limits, and functions.How to
                          make middle and high school math classes fun and
                          engaging?To make math classes fun and engaging, try
                          Math-Knots. Math-Knots offers all the learning
                          material your child needs to excel in math. From
                          virtual classes to in-person classes and books,
                          Math-Knots provides a multi-faceted approach to
                          learning math.Consequently, Math-Knots makes math a
                          fun and easy learning subject!
                        </div>
                      </div>
                      <div className="actionBtn mt-3">
                        <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/blog-detail/8">
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="main">
                    <div className="cards recent_blogs_card">
                      <div className="for_image">
                        <img
                          src={recentBlogsImg03}
                          className="img-fluid"
                          alt=""
                        ></img>
                      </div>
                      <div className="card01_content">
                        <div className="dummy">
                          <p className="dummy_text"></p>
                          <p className="date">Nov 30</p>
                        </div>
                        <h3>
                          Middle and high school math classes that are fun and
                          engaging
                        </h3>

                        <div className="content-blog d-none"></div>
                        <div className="new-content">
                          Math is a tiresome chore for many middle and high
                          school students. To others, it is the most intriguing
                          subject in the world. No matter how a student feels
                          about math, it is an essential field of education.
                          Moreover, math is inescapable. Contrary to popular
                          belief, mathematical concepts also apply to real-world
                          concepts. Numbers and logic are an integral part of
                          our lives. Thus, being good at math is a huge
                          flex.However, most middle, and high school math
                          classes are hard. As a result, students can quickly
                          lose interest and motivation. Ultimately, this leads
                          to poor understanding of concepts and
                          performance.Types of math classes in middle and high
                          schoolThere are multiple kinds of math classes in
                          middle and high school. However, they generally follow
                          a specific order. The order of math classes in middle
                          and high school is as follows:Algebra 1 –&nbsp;This is
                          the start of a student’s high school mathematical
                          journey. While Algebra 1 is typically taken in 9th
                          grade, many students attempt it in middle school. This
                          class isn’t as tricky as the rest of the math classes.
                          This is the foundation course for the rest of high
                          school math courses. Algebra 1 concepts are important
                          to do well on PSAT, SAT and ACT tests.Geometry
                          –&nbsp;The next class in line is geometry. Geometry is
                          about shapes, proofs, logic, and reasoning with
                          real-world geometrical applications. Geometry concepts
                          are important to do well on PSAT, SAT and ACT
                          tests.Algebra 2/Trigonometry –&nbsp;This is where the
                          math starts getting tricky. Students now need to solve
                          complex problems. Moreover, they must learn concepts
                          like complex inequalities, graphs, quadratics,
                          probability, polynomials, and much more. Algebra 2
                          concepts are important to do well on PSAT, SAT and ACT
                          tests.Pre-Calculus –&nbsp;As the name suggests, this
                          math class helps prepare students for Calculus. This
                          class covers series and sequences, limits,
                          probability, derivatives, vectors, functions, and
                          more.Calculus –&nbsp;This is the last step in the math
                          learning journey. This course is an extension of the
                          knowledge you’ve gained in Pre-calculus, studying
                          curves, differentiation, limits, and functions.How to
                          make middle and high school math classes fun and
                          engaging?To make math classes fun and engaging, try
                          Math-Knots. Math-Knots offers all the learning
                          material your child needs to excel in math. From
                          virtual classes to in-person classes and books,
                          Math-Knots provides a multi-faceted approach to
                          learning math.Consequently, Math-Knots makes math a
                          fun and easy learning subject!
                        </div>
                      </div>
                      <div className="actionBtn mt-3">
                        <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/blog-detail/8">
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="main">
                    <div className="cards recent_blogs_card">
                      <div className="for_image">
                        <img
                          src={recentBlogsImg01}
                          className="img-fluid"
                          alt=""
                        ></img>
                      </div>
                      <div className="card01_content">
                        <div className="dummy">
                          <p className="dummy_text"></p>
                          <p className="date">Nov 30</p>
                        </div>
                        <h3>
                          Middle and high school math classes that are fun and
                          engaging
                        </h3>

                        <div className="content-blog d-none"></div>
                        <div className="new-content">
                          Math is a tiresome chore for many middle and high
                          school students. To others, it is the most intriguing
                          subject in the world. No matter how a student feels
                          about math, it is an essential field of education.
                          Moreover, math is inescapable. Contrary to popular
                          belief, mathematical concepts also apply to real-world
                          concepts. Numbers and logic are an integral part of
                          our lives. Thus, being good at math is a huge
                          flex.However, most middle, and high school math
                          classes are hard. As a result, students can quickly
                          lose interest and motivation. Ultimately, this leads
                          to poor understanding of concepts and
                          performance.Types of math classes in middle and high
                          schoolThere are multiple kinds of math classes in
                          middle and high school. However, they generally follow
                          a specific order. The order of math classes in middle
                          and high school is as follows:Algebra 1 –&nbsp;This is
                          the start of a student’s high school mathematical
                          journey. While Algebra 1 is typically taken in 9th
                          grade, many students attempt it in middle school. This
                          class isn’t as tricky as the rest of the math classes.
                          This is the foundation course for the rest of high
                          school math courses. Algebra 1 concepts are important
                          to do well on PSAT, SAT and ACT tests.Geometry
                          –&nbsp;The next class in line is geometry. Geometry is
                          about shapes, proofs, logic, and reasoning with
                          real-world geometrical applications. Geometry concepts
                          are important to do well on PSAT, SAT and ACT
                          tests.Algebra 2/Trigonometry –&nbsp;This is where the
                          math starts getting tricky. Students now need to solve
                          complex problems. Moreover, they must learn concepts
                          like complex inequalities, graphs, quadratics,
                          probability, polynomials, and much more. Algebra 2
                          concepts are important to do well on PSAT, SAT and ACT
                          tests.Pre-Calculus –&nbsp;As the name suggests, this
                          math class helps prepare students for Calculus. This
                          class covers series and sequences, limits,
                          probability, derivatives, vectors, functions, and
                          more.Calculus –&nbsp;This is the last step in the math
                          learning journey. This course is an extension of the
                          knowledge you’ve gained in Pre-calculus, studying
                          curves, differentiation, limits, and functions.How to
                          make middle and high school math classes fun and
                          engaging?To make math classes fun and engaging, try
                          Math-Knots. Math-Knots offers all the learning
                          material your child needs to excel in math. From
                          virtual classes to in-person classes and books,
                          Math-Knots provides a multi-faceted approach to
                          learning math.Consequently, Math-Knots makes math a
                          fun and easy learning subject!
                        </div>
                      </div>
                      <div className="actionBtn mt-3">
                        <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/blog-detail/8">
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='learning_section'>
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
            </section> */}
    </>
  );
};

export default RecentBlogs;
