import MyPage from 'components/_ui/page/MyPage';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import cl from './PricingPage.module.scss';
import MySection from 'components/_ui/section/MySection';
import MyBgCircle from 'components/_ui/bgCircle/MyBgCircle';
import Cards from 'components/pricing/cards/Cards';
import { pricingSel } from 'store/slices/pricing/pricingSlice';
import { useSelector } from 'react-redux';

const PricingPage = () => {
  const { cards } = useSelector(pricingSel);

  return (
    <>
      <Header />
      <MyPage
        metaTitle="UIWave | Pricing"
        metaDescr="UIWave Pricing"
        classNames={'main-other'}
      >
        <MySection
          classNames={cl.section}
          containerCl={cl.container}
          innerCl={cl.inner + ' z-1 pos-r'}
        >
          <MyBgCircle
            classNames={cl.circle + ` ${cl.circle__1} circle__1`}
            bgColor={'#944FE9'}
          />
          <MyBgCircle
            classNames={cl.circle + ` ${cl.circle__2} circle__2`}
            bgColor={'#CB4BB3'}
          />
          <div className={cl.head + ' section-head'}>
            <h1 className={`${cl.title} title-section`}>
              <span className="color-gradient">Start for free</span> and upgrade
              to unlock more features
            </h1>
            <p className={`${cl.subtitle} subtitle-section`}>
              Choose a plan suitable for your business needs
            </p>
          </div>
          <Cards classNames={cl.cards} cards={cards} />
        </MySection>
        <MySection innerCl={cl.inner + ' z-1 pos-r'}>
          <MyBgCircle
            classNames={cl.circle + ` ${cl.circle__3}`}
            bgColor={'#944FE9'}
          />
          <MyBgCircle
            classNames={cl.circle + ` ${cl.circle__4}`}
            bgColor={'#6949E0'}
          />
        </MySection>
      </MyPage>
      <Footer />
    </>
  );
};

export default PricingPage;
