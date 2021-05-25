const Button = props => {
  const { className, buttonstyle = 'default' } = props
  let buttonClasses = ''
  if (buttonstyle === 'fill') {
    buttonClasses = 'font-bold espa-border-yellow espa-bg-yellow hover:bg-transparent hover:espa-border-yellow-2 hover:espa-text-yellow-2'
  } else if (buttonstyle === 'selected') {
    buttonClasses = 'font-bold espa-border-yellow-2 espa-text-yellow-2'
  } else if (buttonstyle === 'default') {
    buttonClasses = 'font-bold border-white hover:espa-border-yellow-2 hover:espa-text-yellow-2'
  } else if (buttonstyle === "overlay") {
    buttonClasses = 'font-bold border-white'
  }

  return (
    <button
      {...props}
      className={`${className} border-2 py-3 px-2 text-center ${buttonClasses}`}
    ></button>
  );
};

export default Button;
