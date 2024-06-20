import MyPage from 'components/_ui/page/MyPage';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import cl from './BlogPage.module.scss';
import MySection from 'components/_ui/section/MySection';
import MyBgCircle from 'components/_ui/bgCircle/MyBgCircle';
import Cards from './cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import {
  blogSel,
  getBlogPosts,
  getMorePosts,
  previewMorePosts,
} from 'store/slices/blog/blogSlice';
import MyBtn from 'components/_ui/btn/MyBtn';
import { useEffect } from 'react';

const BlogPage = () => {
  const dispatch = useDispatch();
  const { cards, showMoreBtn } = useSelector(blogSel);

  console.log(cards);

  useEffect(() => {
    dispatch(getBlogPosts());
  }, []);

  useEffect(() => {
    if (cards) {
      dispatch(
        previewMorePosts({ startingIndex: Number(cards?.at(-1).id) + 1 }),
      );
    }
  }, [cards]);

  const seeMore = () => {
    dispatch(getMorePosts({ startingIndex: Number(cards?.at(-1).id) + 1 }));
  };

  return (
    <>
      <Header />
      <MyPage
        metaTitle="UIWave | Blog"
        metaDescr="UIWave Blog"
        classNames={'main-other'}
      >
        <MySection
          classNames={cl.section}
          containerCl={cl.container}
          innerCl={cl.inner + ' z-1 pos-r'}
        >
          <MyBgCircle
            classNames={cl.circle + ` ${cl.circle__1} circle__1`}
            bgColor={'#944FE9'}
          />
          <MyBgCircle
            classNames={cl.circle + ` ${cl.circle__2} circle__2`}
            bgColor={'#CB4BB3'}
          />
          <div className={cl.head + ' section-head'}>
            <h1 className={`${cl.title} title-section`}>Blog</h1>
            <p className={`${cl.subtitle} subtitle-section`}>Latest Updates</p>
          </div>
          <Cards cards={cards} />
          {showMoreBtn && (
            <MyBtn
              classNames={cl.more + ' btn-trans'}
              onClick={seeMore}
              disabled={true}
            >
              See more
            </MyBtn>
          )}
        </MySection>
      </MyPage>
      <Footer />
    </>
  );
};

export default BlogPage;
