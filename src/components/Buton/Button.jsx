import style from './button.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" className={style.Button} onClick={onClick}>
      <span>loade more</span>
    </button>
  );
};

export default Button;
