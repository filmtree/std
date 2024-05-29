import notify from './notify';

function Splitting() {
  const onClick = () => {
    /* Dynamic Import를 통해 코드 스플리팅.*/
    /* import() 함수는 Promise를 반환하므로, 동적으로 불러온 모듈을 사용하려면 
    async/await 또는 .then() 메서드를 사용 */
    import('./notify').then(result => result.default());
    /* result : Promise가 resolve되면서 전달되는 값 */
    /* result.default() : 동적으로 import된 모듈의 기본 내보내기 값 */
  };

  // async 사용 시
  // const onClick = async () => {
  //   const module = await import('./notify');
  //   module.default();
  // };
  // 또는  
  // const onClick = async () => {
  //   try {
  //     const module = await import('./notify');
  //     module.default();
  //   } catch (error) {
  //     console.error('Error loading module:', error);
  //   }
  // };

  return (
    <div>
      <header>       
        <p onClick={onClick}>Dyamic Import Splitting!</p>
      </header>
    </div>
  );
}

export default Splitting;