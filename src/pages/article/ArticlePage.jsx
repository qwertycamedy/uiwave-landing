import MyPage from 'components/_ui/page/MyPage';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Head from './head/Head';
import Content from './content/Content';
import { useEffect } from 'react';
import { blogSel, getArticle } from 'store/slices/blog/blogSlice';

const ArticlePage = () => {
  const dispatch = useDispatch();
  const {article} = useSelector(blogSel);
  const {id} = useParams();

  console.log(article)

  useEffect(() => {
    dispatch(getArticle({articleId: id}))
  }, [])

  console.log(typeof article)

  return (
    <>
      <Header />
      <MyPage
        metaTitle="UIWave | Article"
        metaDescr="UIWave Article"
        classNames={'main-other'}
      >
        <Head article={article} />
        <Content article={article} />
      </MyPage>
      <Footer />
    </>
  );
};

export default ArticlePage;
