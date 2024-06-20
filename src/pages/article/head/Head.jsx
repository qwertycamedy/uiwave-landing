import MyBgCircle from 'components/_ui/bgCircle/MyBgCircle';
import MySection from 'components/_ui/section/MySection';
import cl from './Head.module.scss';

const Head = ({ article }) => {
  return (
    <>
      <MySection
        classNames={cl.section__head}
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
          <h1 className={`${cl.title} title-section`}>
            {article?.title}
          </h1>
          <div className={cl.flex}>
            <p className={cl.date}>{article?.date}</p>
            <div className={cl.views}>
              <svg
                className="ico-14 fill"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z" />
                <path d="M13.5361 6.85125C13.0215 5.52022 12.1282 4.36914 10.9665 3.54029C9.80489 2.71143 8.42584 2.24113 6.99981 2.1875C5.57379 2.24113 4.19473 2.71143 3.03309 3.54029C1.87145 4.36914 0.978134 5.52022 0.463564 6.85125C0.428812 6.94737 0.428812 7.05263 0.463564 7.14875C0.978134 8.47978 1.87145 9.63086 3.03309 10.4597C4.19473 11.2886 5.57379 11.7589 6.99981 11.8125C8.42584 11.7589 9.80489 11.2886 10.9665 10.4597C12.1282 9.63086 13.0215 8.47978 13.5361 7.14875C13.5708 7.05263 13.5708 6.94737 13.5361 6.85125ZM6.99981 9.84375C6.43737 9.84375 5.88756 9.67697 5.41991 9.36449C4.95226 9.05202 4.58777 8.60788 4.37253 8.08826C4.15729 7.56863 4.10098 6.99685 4.21071 6.44521C4.32043 5.89358 4.59127 5.38687 4.98898 4.98917C5.38668 4.59146 5.89339 4.32062 6.44503 4.21089C6.99666 4.10117 7.56844 4.15748 8.08807 4.37272C8.6077 4.58795 9.05183 4.95245 9.3643 5.4201C9.67678 5.88775 9.84356 6.43756 9.84356 7C9.84241 7.75385 9.54243 8.4765 9.00937 9.00956C8.47631 9.54261 7.75367 9.84259 6.99981 9.84375Z" />
              </svg>
              <span>{article?.views}</span>
            </div>
          </div>
        </div>
      </MySection>
      <MySection classNames={cl.section__img} containerCl={'container-big'}>
        <img className={cl.img} src={article?.imageUrl} alt="big" />
      </MySection>
    </>
  );
};

export default Head;
