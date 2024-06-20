import { useSelector } from 'react-redux';
import cl from './Footer.module.scss';
import Logo from 'components/logo/Logo';
import { navSel } from 'store/slices/nav/navSlice';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  const { links, defLink, activeLink, social } = useSelector(navSel);

  return (
    <footer className={cl.footer + ' footer'}>
      <div className="container container-big">
        <div className={cl.inner}>
          <div className={cl.top}>
            <Logo
              classNames={cl.logo}
              icoCl={cl.logo__ico}
              withText={false}
              icoWidth={113}
              icoHeight={114}
            />
            <nav className={cl.list__outer}>
              <ul className={cl.list}>
                {links.map((link) => (
                  <li className={cl.list__item} key={link.label}>
                    <NavLink
                      className={({ isAcitve }) =>
                        isAcitve ? activeLink : defLink
                      }
                      to={link.to}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ul className={cl.socials}>
              {social.map((link) => (
                <li key={link.label}>
                  <Link
                    className={`${cl.socials__link} btn btn-ico`}
                    to={link.to}
                    dangerouslySetInnerHTML={{ __html: link.ico }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={cl.bot}>
            <p className={cl.rights}>
              © {new Date().getFullYear()} UIWave LLC. All rights reserved.
            </p>
            <div className={cl.privacy__outer}>
              <Link className={cl.privacy + ' link link-accent'} to="/terms">
                Terms of Use
              </Link>
              <Link className={cl.privacy + ' link link-accent'} to="/privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
