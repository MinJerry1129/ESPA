import React from 'react'
import styles from './styles.module.scss'
import TextFrame from '@components/profile/TextFrame'
import CollectorBadge from '@components/profile/CollectorBadge'

const ProfileCard = props => {
  const { className } = props
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={styles.cardWrapper}>
        <img src='/profile/profile-frame.png' className={styles.profileFrame} />
        <div className={styles.rightSide}>
          <TextFrame
            caption='meta id'
            style={{
              width: '90%',
              height: '18%',
              marginTop: '5%',
            }}
          >
            <div className={styles.textDiv}>
              EMMA LEE
            </div>
          </TextFrame>
          <TextFrame
            caption='meta rank'
            style={{
              width: '90%',
              height: '20%',
              marginTop: '5%'
            }}
          >
            <div className={styles.textDiv}>
              TIER ONE
            </div>
          </TextFrame>
          <TextFrame
            caption='metaversal id'
            style={{
              width: '90%',
              height: '20%',
              marginTop: '5%'
            }}
          >
            <div className={styles.textDiv}>
              SPACE ROOKIE
            </div>
          </TextFrame>
          <div className={styles.subWrapper}>
            <TextFrame
              caption='$MONA EARNED'
              small
              style={{
                width: '45%',
                height: '100%',
                marginTop: '5%',
                marginRight: '5%'
              }}
              captionWidth="88%"
            >
              <div className={styles.textDiv}>
                100
              </div>
            </TextFrame>
            <TextFrame
              caption='XP'
              small
              style={{
                width: '45%',
                height: '100%',
                marginTop: '5%'
              }}
              captionWidth="88%"
            >
              <div className={styles.textDiv}>
                100
              </div>
            </TextFrame>
          </div>
        </div>
      </div>
      <CollectorBadge className={styles.collectorBadge} />
    </div>
  )
}

export default ProfileCard