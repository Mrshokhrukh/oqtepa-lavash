import ld from "./loading.module.scss";
const Loading = () => {
  return (
    <div className={ld.loading}>
      <div className={ld.wrapper}>
        <div className={`${ld.ball} ${ld.ball_one}`}></div>
        <div className={`${ld.ball} ${ld.ball_two}`}></div>
        <div className={`${ld.ball} ${ld.ball_three}`}></div>
      </div>
    </div>
  );
};

export default Loading;
