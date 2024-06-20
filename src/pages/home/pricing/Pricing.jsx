import MySection from 'components/_ui/section/MySection';
import cl from './Pricing.module.scss';
import MyBgCircle from 'components/_ui/bgCircle/MyBgCircle';
import MyBtn from 'components/_ui/btn/MyBtn';
import Cards from 'components/pricing/cards/Cards';
import { useSelector } from 'react-redux';
import { pricingSel } from 'store/slices/pricing/pricingSlice';

const Pricing = () => {
  const { cards } = useSelector(pricingSel);

  return (
    <MySection
      classNames={cl.advantages}
      containerCl={cl.container}
      innerCl={cl.inner + ' z-1 pos-r'}
    >
      <MyBgCircle classNames={cl.circle} bgColor={'#944FE9'} />
      <div className={cl.head + ' section-head'}>
        <p className={`${cl.suptitle} suptitle-section`}>WORKSPACE PRICING</p>
        <h3 className={`${cl.title} title-section`}>
          <span className="color-gradient">Start for free</span> and upgrade to
          unlock more features
        </h3>
        <p className={`${cl.subtitle} subtitle-section`}>
          Choose a plan suitable for your business needs
        </p>
      </div>
      <Cards classNames={cl.cards} cards={cards} />
    </MySection>
  );
};

export default Pricing;
