import MySection from 'components/_ui/section/MySection';
import cl from './Hero.module.scss';
import heroImgWrapper from 'assets/img/hero-img-wrapper.svg';
import heroImg from 'assets/img/hero-img.png';
import bg1 from 'assets/img/hero-bg-1.svg';
import bg2 from 'assets/img/hero-bg-2.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSel } from 'store/slices/auth/authSlice';

const Hero = () => {
  const {registerLink} = useSelector(authSel);
  return (
    <MySection
      classNames={cl.hero}
      containerCl={cl.container}
      innerCl={cl.inner}
    >
      <img className={`${cl.bg} ${cl.bg__1}`} src={bg1} alt="bg" />
      <img className={`${cl.bg} ${cl.bg__2}`} src={bg2} alt="bg" />
      <div className={cl.info}>
        <h1 className={`${cl.title} title title-main`}>
          Make Waves
          <br />
          With UIWave
        </h1>
        <p className={cl.subtitle}>
          Discover the science behind data-driven decisions by leveraging our
          A/B Testing and UI Experimentation platform
        </p>
        <div className={cl.btns}>
          <Link className={`${cl.btn} btn btn-light`} to={registerLink} target='_blank'>
            Get Started
          </Link>
          <Link className={`${cl.btn} btn btn-trans`}>See demo</Link>
        </div>
      </div>
      <div className={cl.img__outer}>
        <img
          className={cl.img__wrapper}
          src={heroImgWrapper}
          alt="hero img wrapper"
          width="800"
          height="584"
        />
        <img
          className={cl.img}
          src={heroImg}
          alt="hero img"
          width="799"
          height="514"
        />
      </div>
    </MySection>
  );
};

export default Hero;
