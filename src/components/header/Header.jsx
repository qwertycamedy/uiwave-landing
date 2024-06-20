import cl from './Header.module.scss';
import Logo from 'components/logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { headerSel, setBurger } from 'store/slices/header/headerSlice';
import { clsx } from 'clsx';
import { disableScroll } from 'hooks/disableScroll';
import { enableScroll } from 'hooks/enableScroll';
import { Link, useLocation } from 'react-router-dom';
import { navSel } from 'store/slices/nav/navSlice';
import { authSel } from 'store/slices/auth/authSlice';

const Header = ({ headerCl, containerCl, innerCl }) => {
  const dispatch = useDispatch();
  const { burger } = useSelector(headerSel);
  const { links, defLink, activeLink } = useSelector(navSel);
  const {loginLink, registerLink} = useSelector(authSel);
  const { pathname } = useLocation();

  const toggleBurger = () => {
    if (!burger) {
      dispatch(setBurger(true));
      disableScroll();
    } else {
      dispatch(setBurger(false));
      enableScroll();
    }
  };

  const closeBurger = () => {
    dispatch(setBurger(false));
    enableScroll();
  };

  const openBurger = () => {
    dispatch(setBurger(true));
    disableScroll();
  };

  return (
    <>
      <header className={`${cl.header} ${headerCl} fixed-block`}>
        <div
          className={`${containerCl} ${cl.container} container container-big`}
        >
          <div className={`${innerCl} ${cl.inner}`}>
            <Logo
              classNames={cl.logo}
              icoCl={cl.logo__ico}
              textCl={cl.logo__text}
              onClick={closeBurger}
            />
            <div className={clsx(cl.menu, { [cl.menu__active]: burger })}>
              <nav className={cl.list__outer}>
                <ul className={cl.list}>
                  {links.map((link) => (
                    <li className={cl.list__item} key={link.label}>
                      <Link
                        className={clsx(`${defLink} ${cl.list__link}`, {
                          [activeLink]: pathname === link.to,
                        })}
                        onClick={closeBurger}
                        to={link.to}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className={cl.btns}>
                <Link
                  className={cl.in + ' link link-accent'}
                  to={loginLink}
                  onClick={closeBurger}
                  target='_blank'
                >
                  Log in
                </Link>
                <Link
                  className={cl.up + ' btn btn-light'}
                  to={registerLink}
                  onClick={closeBurger}
                  target='_blank'
                >
                  Sign up
                </Link>
              </div>
            </div>
            <button
              className={clsx(cl.burger, { [cl.burger__active]: burger })}
              onClick={toggleBurger}
            ></button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
