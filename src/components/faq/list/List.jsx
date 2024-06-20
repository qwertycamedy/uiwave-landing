import { useDispatch } from 'react-redux';
import Item from './item/Item';
import cl from './List.module.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const List = ({ list, curItem, setCurItem, classNames }) => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  useEffect(() => {
      dispatch(setCurItem(null));
  }, [pathname]);

  const onItem = (item) => {
    if (curItem?.id === item?.id) {
      dispatch(setCurItem(null));
    } else {
        dispatch(setCurItem(item))
    }
  };

  return (
    <ul className={classNames + ` ${cl.list}`}>
      {list?.map((item) => (
        <Item item={item} curItem={curItem} onItem={onItem} key={item.id} />
      ))}
    </ul>
  );
};

export default List;
