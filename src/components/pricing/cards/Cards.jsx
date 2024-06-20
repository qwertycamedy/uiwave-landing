import cl from './Cards.module.scss';
import Card from './card/Card';

const Cards = ({ classNames, cards }) => {
  return (
    <div className={cl.cards + ` ${classNames}`}>
      {cards?.map((card) => (
        <Card card={card} key={card.name} />
      ))}
    </div>
  );
};

export default Cards;
