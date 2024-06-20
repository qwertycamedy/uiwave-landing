import MyPage from 'components/_ui/page/MyPage';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import cl from './PrivacyPage.module.scss';
import MySection from 'components/_ui/section/MySection';
import MyBgCircle from 'components/_ui/bgCircle/MyBgCircle';

const PrivacyPage = () => {
  return (
    <>
      <Header />
      <MyPage
        metaTitle="UIWave | Privacy Policy"
        metaDescr="UIWave Privacy Policy"
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
            <h1 className={`${cl.title} title-section`}>Privacy policy</h1>
            <p className={`${cl.subtitle} subtitle-section`}>
              Effective Date: 12/20/2023
            </p>
          </div>
          <div className={cl.content + ' content'}>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              Introduction
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              This Privacy Policy describes how UIWave collects, uses, and
              shares personal information when you use our A/B testing and UI
              experimentation services.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              Information We Collect
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              We collect the following types of personal information:
              <ul className="content-list">
                <li className="content-list-item">
                  <b>Information you provide directly:</b> When you create an
                  account or configure experiments, you may provide us with your
                  name, email address, organization name, and IP address.
                </li>
                <li className="content-list-item">
                  <b>Information collected through embedded code:</b> When you
                  embed our code into your apps, it sends requests to our
                  servers that include a hashed unique user identifier, which
                  you define and provide. We do not collect any sensitive
                  information, IP addresses, cookies, or other personally
                  identifiable information beyond the hashed identifier.
                </li>
              </ul>
            </p>

            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              How We Use Your Information
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              We use your personal information to:
              <ul className="content-list">
                <li className="content-list-item">
                  Provide our A/B testing and UI experimentation services
                </li>
                <li className="content-list-item">Customize your experience</li>
                <li className="content-list-item">
                  Analyze and improve our services
                </li>
                <li className="content-list-item">
                  Conduct standard marketing and analytics processes
                </li>
              </ul>
            </p>

            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              Data Sharing
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              We do not share your personal information with any third parties,
              except when required by law enforcement with a valid court order
              or warrant.
            </p>
            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              Security
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              We take security measures to protect your personal information,
              including:
              <ul className="content-list">
                <li className="content-list-item">Encrypting user passwords</li>
                <li className="content-list-item">
                  Securing databases with industry-standard practices
                </li>
                <li className="content-list-item">
                  Implementing access controls
                </li>
              </ul>
            </p>

            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              Your Choices
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              You have the following choices regarding your personal
              information:
              <ul className="content-list">
                <li className="content-list-item">
                  Access your information through the settings page
                </li>
                <li className="content-list-item">
                  Update your information through the settings page
                </li>
                <li className="content-list-item">
                  Permanently delete your information through the settings page
                  or by contacting us at through our contact form.
                </li>
              </ul>
            </p>

            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              Compliance with Laws
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              Proper organization of files in Figma is more than just a good
              habit. It helps to make collaboration more efficient, optimize
              workflows and increase overall team productivity. In today's
              article, a Bolt designer shares his observations and tips on this
              subject.
            </p>
            <p className={cl.content__text + ' content-text text-16'}>
              We may update this Privacy Policy from time to time. If we make
              any material changes, we will notify you by email or through a
              notice on our website.
            </p>

            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              Contact Us
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              If you have any questions about this Privacy Policy, please
              contact us through our contact form.
            </p>

            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              Additional Information
            </h4>

            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              Do Not Track
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              We do not currently respond to Do Not Track signals.
            </p>

            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              Children's Privacy
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              Our services are not intended for children under the age of 13.
            </p>

            <h4
              className={cl.content__title + ` content-title title title-block`}
            >
              California Residents
            </h4>
            <p className={cl.content__text + ' content-text text-16'}>
              Under the California Consumer Privacy Act (CCPA), California
              residents have the right to:
              <ul className="content-list">
                <li className="content-list-item">
                  Know what personal information we collect about them
                </li>
                <li className="content-list-item">
                  Request a copy of their personal information
                </li>
                <li className="content-list-item">
                  Request that we delete their personal information
                </li>
                <li className="content-list-item">
                  Opt out of the sale of their personal information
                </li>
              </ul>
              To exercise these rights, please contact us through our contact
              form
            </p>
          </div>
        </MySection>
      </MyPage>
      <Footer />
    </>
  );
};

export default PrivacyPage;
