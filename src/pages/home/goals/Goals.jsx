import MySection from 'components/_ui/section/MySection';
import cl from './Goals.module.scss';
import MyBgCircle from 'components/_ui/bgCircle/MyBgCircle';
import img from 'assets/img/goals-img.png';

const Goals = () => {
  return (
    <MySection
      classNames={cl.advantages}
      containerCl={cl.container}
      innerCl={cl.inner + ' z-1 pos-r'}
    >
      <MyBgCircle classNames={cl.circle} bgColor={'#944FE9'} />
      <div className={cl.head + ' section-head'}>
        <p className={`${cl.suptitle} suptitle-section`}>OUR MISSION</p>
        <h3 className={`${cl.title} title-section`}>
          <span className="color-gradient">Bridging the Innovation Gap</span>{' '}
          <br />
          with Leading-Edge Technology
        </h3>
        <p className={`${cl.subtitle} subtitle-section`}>
          Our mission is to empower businesses of all sizes with the
          cutting-edge tools and expertise they need to revolutionize user
          experiences and unlock groundbreaking innovation. We help eliminate
          the barriers to UI/UX advancements, transforming every entrepreneur,
          builder, and dreamer into an interface architect, crafting experiences
          that captivate and inspire.
        </p>
      </div>
      <img className={cl.img} src={img} alt="goals img" />
    </MySection>
  );
};

export default Goals;
