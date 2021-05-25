const Input = (props) => {
  return (
    <input
      {...props}
      className={`border border-white outline-none bg-transparent hover:border-yellow-400 focus:shadow-none text-yellow-400 py-3 px-8 ${props.className}`}
    ></input>
  );
};

export default Input;
