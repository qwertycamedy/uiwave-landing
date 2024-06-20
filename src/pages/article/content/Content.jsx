import MySection from 'components/_ui/section/MySection';
import cl from './Content.module.scss';

const Content = ({article}) => {
  return (
    <MySection containerCl={'container-small'} innerCl={cl.inner}>
      <div className={cl.content + ' content'} dangerouslySetInnerHTML={{__html: article?.content}} />
    </MySection>
  );
};

export default Content;
