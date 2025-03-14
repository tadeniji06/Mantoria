const Card = ({ title, children, className }) => {
  return (
    <div className={`${className}shadow-md p-4 rounded-lg`}>
      <p className="font-bold text-primary-green">{title}</p>
      {children}
    </div>
  );
};

export default Card;
