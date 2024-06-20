import MySection from 'components/_ui/section/MySection';
import cl from './Advantages.module.scss';

import adv1 from 'assets/img/adv-1.png';
import adv2 from 'assets/img/adv-2.png';
import adv3 from 'assets/img/adv-3.png';
import MyBgCircle from 'components/_ui/bgCircle/MyBgCircle';

const Advantages = () => {
  return (
    <MySection
      classNames={cl.advantages}
      containerCl={cl.container}
      innerCl={cl.inner + ' z-1 pos-r'}
    >
      <MyBgCircle classNames={cl.circle} bgColor={'#CB4BB3'} />
      <div className={cl.head + ' section-head'}>
        <p className={`${cl.suptitle} suptitle-section`}>Advantages</p>
        <h3 className={`${cl.title} title-section`}>
          <span className="color-gradient">Ease of use</span> at every step of
          the way
        </h3>
        <p className={`${cl.subtitle} subtitle-section`}>
          Kick off your UI experimentation with just a few clicks
        </p>
      </div>
      <div className={cl.card__outer}>
        <div className={`${cl.card} ${cl.card__1}`}>
          <img className={cl.card__img} src={adv1} alt="advantages img" />
          <h5 className={cl.card__title + ' title'}>Intuitive Interface</h5>
          <p className={cl.card__subtitle}>
            Quickly set up your first experiment in just a few minutes
          </p>
        </div>
        <div className={`${cl.card} ${cl.card__2}`}>
          <img className={cl.card__img} src={adv2} alt="advantages img" />
          <h5 className={cl.card__title + ' title'}>Easy Integration</h5>
          <p className={cl.card__subtitle}>
            Seemlessly add our solution to your existing tech stack
          </p>
        </div>
        <div className={`${cl.card} ${cl.card__3}`}>
          <img className={cl.card__img} src={adv3} alt="advantages img" />
          <h5 className={cl.card__title + ' title'}>Advanced Analytics</h5>
          <p className={cl.card__subtitle}>
            Uncover insights in your analytics data
          </p>
        </div>
      </div>
    </MySection>
  );
};

export default Advantages;
