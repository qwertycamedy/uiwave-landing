import MyBtn from 'components/_ui/btn/MyBtn';
import cl from './Card.module.scss';
import { useNavigate } from 'react-router-dom';

const Card = ({ card }) => {
  let navigate = useNavigate();
  const onBtnClick = () => {
    switch (card.name) {
      case 'Free':
        navigate('/auth/up?plan=free');
      case 'Pro':
        navigate('/auth/up?plan=pro');
        break;
      case 'Enterprise':
        navigate('/contact_us?plan=enterprise');
        break;
      default:
        break;
    }
  };

  return (
    <div className={`${cl.card}`}>
      <p className={cl.name}>{card.name}</p>
      <p className={cl.price}>{card.price}</p>
      <p className={cl.period}>{card.period}</p>
      <ul className={cl.list}>
        {card.list?.map((item) => (
          <li className={cl.list__item} key={item.id}>
            <svg
              className="ico-16 fill"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path d="M14.5306 5.39068L6.5306 13.3907C6.46092 13.4606 6.37813 13.5161 6.28696 13.5539C6.1958 13.5918 6.09806 13.6113 5.99935 13.6113C5.90064 13.6113 5.8029 13.5918 5.71173 13.5539C5.62057 13.5161 5.53778 13.4606 5.4681 13.3907L1.9681 9.89068C1.89833 9.82091 1.84299 9.73809 1.80524 9.64694C1.76748 9.55578 1.74805 9.45809 1.74805 9.35943C1.74805 9.26076 1.76748 9.16307 1.80524 9.07192C1.84299 8.98076 1.89833 8.89794 1.9681 8.82818C2.03786 8.75841 2.12069 8.70307 2.21184 8.66531C2.30299 8.62756 2.40069 8.60812 2.49935 8.60812C2.59801 8.60812 2.69571 8.62756 2.78686 8.66531C2.87801 8.70307 2.96083 8.75841 3.0306 8.82818L5.99997 11.7976L13.4693 4.32943C13.6102 4.18853 13.8013 4.10938 14.0006 4.10938C14.1999 4.10938 14.391 4.18853 14.5318 4.32943C14.6727 4.47032 14.7519 4.66142 14.7519 4.86068C14.7519 5.05993 14.6727 5.25103 14.5318 5.39193L14.5306 5.39068Z" />
            </svg>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <MyBtn
        onClick={onBtnClick}
        classNames={cl.btn + ' btn-rect btn-accent w-full'}
      >
        {card.btn.label}
      </MyBtn>
    </div>
  );
};

export default Card;
