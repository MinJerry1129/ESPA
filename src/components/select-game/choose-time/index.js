import React, { useEffect, useState } from 'react'
import Button from '../../Button'
import styles from './styles.module.scss'

const ChooseTime = props => {
  const { onChoose, chooseList, onSubmit } = props
  const [currentIndex, setCurrentIndex] = useState(-1)

  return (
    <div className="w-full flex flex-col justify-center px-12 md:px-20 py-12">
      <div className="flex flex-col md:mx-40">
        <p className="md:text-2xl mb-10 text-center">
          select time slot
        </p>
        <div className="flex justify-center">
          {
            chooseList.map((item, index) => {
              return (
                <div className={styles.timeSlot}
                  id={index}
                  key={index}
                >
                  <div className={styles.label}>{item.label}</div>
                  <Button
                    buttonstyle={currentIndex === index ? 'selected' : 'fill'}
                    className='mx-10 px-10 text-lg font-inter max-w-xs'
                    onClick={() => {
                      setCurrentIndex(index)
                      onChoose(index)
                    }}
                  >
                    {item.caption}
                  </Button>
                </div>
              )
            })
          }
        </div>
        <div className="flex justify-center mt-10">
          <Button
            buttonstyle='none'
            className='text-base px-16 max-w-xs'
            onClick={() => {
              onSubmit()
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChooseTime;
