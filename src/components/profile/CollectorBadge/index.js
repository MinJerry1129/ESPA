import React from 'react'
import styles from './styles.module.scss'

const CollectorBadge = props => {

  const collectorTypes = {
    'common': {
      style: styles.common,
      text: 'common collector'
    },
    'semi': {
      style: styles.semi,
      text: 'SEMI-RARE SAGE'
    },
    'exclusive': {
      style: styles.exclusive,
      text: 'exclusive ELEMENTALIST'
    },
    'special': {
      style: styles.special,
      text: 'SPECIAL EDITION SAVANT'
    }
  }

  // const badgeList = [
  //   {
  //     ''
  //   }
  // ]

  const { collector, className } = props
  const collectorInfo = collectorTypes[collector || 'common']
  return (
    <div className={[className, styles.collectorWrapper, 'flex', collectorInfo.style].join(' ')}>
      <img src='/profile/collector-badge.png' className={styles.frameImage} />
      <div className={styles.collectorText}>
        {
          collectorInfo.text
        }
      </div>
    </div>    
  )
}

export default CollectorBadge
