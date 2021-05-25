import React from 'react'
import styles from './styles.module.scss'

const DigiIDList = props => {
  const { idList, className } = props
  return (
    <div className={[styles.wrapper, 'flex flex-row md:flex-row ', className].join(' ')}>
      {
        idList.map(item => {
          return (
            <div className={[styles.idFrame, 'pl-5 pr-5 md:pl-10 md:pl-10'].join(' ')}>
              <img src='/profile/profile-frame.png' />      
              <div className={styles.label}>
                {
                  item.gameName + ' ID'
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default DigiIDList