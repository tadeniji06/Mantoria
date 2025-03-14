const Button = ({ className, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} px-2 py-2 rounded-md`}
    >
      <p className={`${className}`}>{title}</p>
    </button>
  );
};

export default Button;
