import { clsx } from 'clsx';
import cl from './Item.module.scss';
import { useSpring, animated } from 'react-spring';
import { useRef } from 'react';

const Item = ({ item, curItem, onItem }) => {
  const contentRef = useRef(null);

  const springProps = useSpring({
    opacity: item?.id === curItem?.id ? '1' : '0',
    maxHeight:
      item?.id === curItem?.id
        ? contentRef.current !== null
          ? contentRef.current.scrollHeight + 20 + 'px'
          : '0'
        : '0',
    config: { duration: 200 },
  });

  return (
    <li
      className={clsx(cl.item, { [cl.item__active]: item?.id === curItem?.id })}
      onClick={() => onItem(item)}
    >
      <button className={cl.head}>
        <span className={cl.head__title}>{item.title}</span>
        <svg
          className={`ico-40 stroke ${cl.head__ico}`}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 8.3335L20 31.6668"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.33594 19.9998L31.6693 19.9998"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <animated.div className={cl.content} style={springProps} ref={contentRef}>
        <span className={cl.content__text}>{item.text}</span>
      </animated.div>
    </li>
  );
};

export default Item;
