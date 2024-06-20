import MyPage from 'components/_ui/page/MyPage';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import cl from './FaqPage.module.scss';
import MySection from 'components/_ui/section/MySection';
import MyBgCircle from 'components/_ui/bgCircle/MyBgCircle';
import Form from 'components/faq/form/Form';
import List from 'components/faq/list/List';
import { useSelector } from 'react-redux';
import { faqSel, setCurItem } from 'store/slices/faq/faqSlice';

const FaqPage = () => {
  const { list, curItem } = useSelector(faqSel);

  return (
    <>
      <Header />
      <MyPage
        metaTitle="UIWave | FAQ"
        metaDescr="UIWave FAQ"
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
            <h1 className={`${cl.title} title-section`}>FAQ</h1>
            <p className={`${cl.subtitle} subtitle-section`}>
              If you have any questions, you may find the answer here.
              Otherwise, scroll down to submit your own question.
            </p>
          </div>
          <div className={cl.flex}>
            <List list={list} curItem={curItem} setCurItem={setCurItem} />
            <p className={`${cl.subtitle} subtitle-section`}>
              Didn't find an answer? Submit a question using the form below and
              we'll get back to you as soon as possible.
            </p>
            <Form />
          </div>
        </MySection>
      </MyPage>
      <Footer />
    </>
  );
};

export default FaqPage;
