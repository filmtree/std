import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
    <>
      <div className={styles.wrapper}>
        안녕하세요, 저는 <span className='something'>CSS Module!</span>
      </div>
      {/* 모듈 클래스 두개이상 사용방법 */}
      <div className={`${styles.wrapper} ${styles.inverted}`}>
      {/*  or <div className={[styles.wrapper, styles.inverted].join(' ')}> */}
        안녕하세요, 저는 클래스 두개 쓰는 <span className='something'>CSS Module!</span>
      </div>
    </>
  );
};

export default CSSModule;
