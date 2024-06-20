import MyPage from 'components/_ui/page/MyPage';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import cl from './TermsPage.module.scss';
import MySection from 'components/_ui/section/MySection';
import MyBgCircle from 'components/_ui/bgCircle/MyBgCircle';
import { Link } from 'react-router-dom';

const TermsPage = () => {
  return (
    <>
      <Header />
      <MyPage
        metaTitle="UIWave | Terms of Use"
        metaDescr="UIWave Terms of Use"
        classNames={'main-other'}
      >
        <MySection
          classNames={cl.section}
          containerCl={cl.container + ' container-small'}
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
            <h1 className={`${cl.title} title-section`}>Terms of Use</h1>
            <p className={`${cl.subtitle} subtitle-section`}>
              Last updated: 01/04/2023
            </p>
          </div>
          <div className={cl.content + ' content'}>
            <p className={cl.content__text + ' content-text text-16'}>
              Welcome to UIWave. By accessing or using our services, located at
              www.uiwave.io and app.uiwave.io, you agree to be bound by these
              Terms of Use and our Privacy Policy. If you do not agree to these
              terms, please do not use our services.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              1. Acceptance of Terms
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              UIWave provides its service to you, subject to the following Terms
              of Use, which may be updated from time to time without notice to
              you.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              2. Description of Service
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              UIWave provides A/B testing and UI experiments services. You can
              create experiments, run them, and analyze the results using our
              dashboard. In order to integrate our service into your website,
              you need to add a special code snippet to your website's code.
              This snippet will be making network requests to our servers
              sending us the unique user identifier and the experiment id. Our
              servers will then respond with the treatment that the user should
              be seeing.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              3. User Obligations
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              You agree to use the service only for lawful purposes and in a way
              that does not infringe the rights of, restrict or inhibit anyone
              else's use of the service.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              4. Privacy Policy
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              Your use of our website/service is also subject to our Privacy
              Policy. Please review our Privacy Policy, which also governs the
              website/service and informs users of our data collection
              practices.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              5. Modification of Terms
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              We reserve the right to change or modify these Terms of Use at any
              time and in our sole discretion.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              6. Intellectual Property
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              All content included on this site, such as text, graphics, logos,
              images, as well as the compilation thereof, and any software used
              on the site, is the property of UIWave, LLC or its suppliers and
              protected by copyright and international treaties.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              7. User Conduct
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              You agree to use the service only for lawful purposes and in a way
              that does not infringe the rights of, restrict or inhibit anyone
              else's use of the service.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              8. Disclaimer of Warranties
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              The site and its content and services are presented "as is." We
              make no representations or warranties of any kind.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              9. Limitation of Liability
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              UIWave LLC will not be liable for any damages arising out of or in
              connection with the use of our site or service. By accepting these
              terms and conditions you acknowlegde the risks involved in using
              our service and agree to not hold us liable for any financial
              loss, your service outage, or degraded user experience.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              10. Governing Law
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              These terms shall be governed and construed in accordance with the
              laws of the United States of America, without regard to its
              conflict of law provisions.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              11. Contact Information
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              For any questions regarding these Terms of Use, please contact us
              at{' '}
              <Link className={'link link-accent-a'} to={'/contact_us'}>
                www.uiwave.io/contact_us
              </Link>
            </p>
          </div>
        </MySection>
      </MyPage>
      <Footer />
    </>
  );
};

export default TermsPage;
