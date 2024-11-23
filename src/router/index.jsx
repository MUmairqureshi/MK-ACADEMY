/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 15/09/2023 - 22:24:43
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 15/09/2023
 * - Author          : Saif
 * - Modification    :
 **/
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "../views/Home";

import Login from "../views/Auth/Login";
import RegistrationForm from "../views/Auth/RegistrationForm";
import ForgetPassword from "../views/Auth/ForgetPassword";
import OTPModule from "../views/Auth/ForgetPassword2";
import UpdatePassword from "../views/Auth/ForgetPassword3";
import { Blogs } from "../views/Blogs";
import { BlogDetail } from "../views/Blogs/BlogDetail/BlogDetail.jsx";

import ContactUs from "../views/ContactUs";
import Books from "../views/Books";
import BookDetail from "../views/Books/BookDetail";
import { Cart } from "../views/Cart";
import InPerson from "../views/InPerson/InPerson";
import CourseListing from "../views/course/CourseListing";
import CourseDetail from "../views/course/CourseDetail/CourseDetail";
import VideoLearning from "../views/VideoLearning/VideoLearning";
import CheckOut from "../views/CheckOut";
import MyAccount from "../views/MyAccount/MyAccount.jsx";

export const AppRouter = () => {
  return (
    <BrowserRouter basename="/mathKnots">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-registration" element={<RegistrationForm />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/otp-step" element={<OTPModule />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/add-to-cart" element={<Cart />} />
        <Route path="/courses-listing" element={<CourseListing />} />{" "}
        <Route path="/courses-listing/:id" element={<CourseDetail />} />{" "}
        <Route path="/video-learning" element={<VideoLearning />} />{" "}
        <Route path="/inPerson" element={<InPerson />} />
        <Route path="/blog-listing" element={<Blogs />} />
        <Route path="/blog-details/:id" element={<BlogDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/check-out" element={<CheckOut />} />
        <Route path="/my-account" element={<MyAccount />} />
        {/* protected routes  */}
        {/* <Route path='/user-dashboard' element={<ProtectedRoutes Components={UserScreen} />} />
          <Route path='/proivder-list/provider-details/:id' element={<ProtectedRoutes Components={ProviderDetails} />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
