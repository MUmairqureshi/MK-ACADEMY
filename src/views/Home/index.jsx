/**
 * @description      :
 * @author           : Saif
 * @group            :
 * @created          : 01/03/2024 - 21:47:37
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 01/03/2024
 * - Author          : Saif
 * - Modification    :
 **/
import { UserLayout } from "../Layout";
import { HomeBanner } from "../../components/HomeBanner";
import { HomeCategory } from "../../components/Categories";
import Mkacademy from "../../components/MkacademyCategory";
import SubscribeCategory from "../../components/SubscribeCategory";
import RecentBlogs from "../../components/RecentBlogs";
import LearningCategory from "../../components/LearningCategory";
import AwardWinnning from "../../components/AwardWinningCategory";
import QuestionCategory from "../../components/QuestionSection";
import ClientFeedback from "../../components/ClientFeedback";
import { Plans } from "../../components/Plans";
import { VideoHome } from "../../components/VideoHome";
import { useEffect } from "react";
import { fetchCartItems } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  return (
    <UserLayout>
      <HomeBanner />
      <HomeCategory head="true" />
      <Mkacademy />
      <SubscribeCategory />
      <RecentBlogs />
      <LearningCategory />
      <AwardWinnning />
      <QuestionCategory />
      <ClientFeedback />
    </UserLayout>
  );
};
