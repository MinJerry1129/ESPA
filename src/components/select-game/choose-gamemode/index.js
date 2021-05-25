import React from 'react';
import Button from "../../Button";

const ChooseGameMode = props => {
  const { onChoose, chooseList, title, description, buttonStyle='default', titleClassName} = props;

  return (
    <div className="w-full flex flex-col justify-center px-12 md:px-20 py-12">
      <div className="flex flex-col md:mx-40">
        <p className={`md:text-2xl mb-5 text-center ${titleClassName}`}>
          { title }
        </p>
        {
          description && <p className="md:text-base mb-10 text-center espa-text-yellow-2">
            { description }
          </p>
        }
        <div className="flex justify-center">
          {
            chooseList.map((item, index) => {
              return (
                <Button
                  buttonstyle={buttonStyle}
                  id={index}
                  key={index}
                  className='mx-10 md:px-20 text-base'
                  onClick={() => onChoose(index)}
                >
                  {item.label}
                </Button>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ChooseGameMode;
