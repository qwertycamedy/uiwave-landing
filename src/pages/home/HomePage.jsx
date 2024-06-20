import MyPage from 'components/_ui/page/MyPage';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Hero from './hero/Hero';
import Advantages from './advantages/Advantages';
import Pricing from './pricing/Pricing';
import Goals from './goals/Goals';

const HomePage = () => {
  return (
    <>
      <Header />
      <MyPage
        metaTitle="UIWave - UI Experimentation and A/B Testing"
        metaDescr="Discover the science behind data-driven decisions"
      >
        <Hero />
        <Advantages />
        <Pricing />
        <Goals />
      </MyPage>
      <Footer />
    </>
  );
};

export default HomePage;
