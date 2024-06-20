import MyPage from 'components/_ui/page/MyPage';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import cl from './FeedbackPage.module.scss';
import MySection from 'components/_ui/section/MySection';
import MyBgCircle from 'components/_ui/bgCircle/MyBgCircle';
import Info from './info/Info';
import Form from './form/Form';

const FeedbackPage = () => {
  return (
    <>
      <Header />
      <MyPage
        metaTitle="UIWave | Contact"
        metaDescr="UIWave Contact"
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
            <h1 className={`${cl.title} title-section`}>Contact</h1>
            <p className={`${cl.subtitle} subtitle-section`}>
              Let's get in touch.
            </p>
          </div>
          <div className={cl.flex}>
            <Info />
            <Form />
          </div>
        </MySection>
      </MyPage>
      <Footer />
    </>
  );
};

export default FeedbackPage;
