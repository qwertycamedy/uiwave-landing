import cl from './Info.module.scss';

const Info = () => {
  return (
    <div className={cl.info}>
      <div className="content">
        <h3 className={cl.title + ' content-title title title-block'}>
          We're here for you.
        </h3>
        <p className={cl.text + ' content-text text-16'}>
          Whether you have a question, a comment, or just want to say hello,
          we're here to listen. Reach out to us using any of the methods below,
          and we'll get back to you as soon as we can.
        </p>
      </div>
      <div className="content">
        <h3 className={cl.title + ' content-title title title-block'}>
          We thrive on feedback.
        </h3>
        <p className={cl.text + ' content-text text-16'}>
          We value your feedback and are committed to providing you with an
          exceptional experience. So don't hesitate to reach out—we're always
          happy to help!
        </p>
      </div>
    </div>
  );
};

export default Info;
