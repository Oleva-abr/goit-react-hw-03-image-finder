import style from './button.module.css';

const Button = ({ onClick }) => {
  return (
    <div className={style.ButtonOverlay}>
      <button type="button" className={style.Button} onClick={onClick}>
        <span>loade more</span>
      </button>
    </div>
  );
};

export default Button;
