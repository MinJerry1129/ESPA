import React from 'react'
import styles from './styles.module.scss'

const CrewList = props => {
  const { className } = props
  return (
    <div className={['flex flex-row md:flex-row profile-image-container', className].join(' ')}>
      <img className="profile-image" src="/leaderboard/profile.png" />
      <img className="profile-image" src="/leaderboard/profile.png" />
      <img className="profile-image" src="/leaderboard/profile.png" />
      <img className="profile-image" src="/leaderboard/profile.png" />
      <img className="profile-image" src="/leaderboard/profile.png" />
      <img className="profile-image" src="/leaderboard/profile.png" />
      <img className="profile-image" src="/leaderboard/profile.png" />
      <img className="profile-image" src="/leaderboard/profile.png" />
      <img className="profile-image" src="/leaderboard/profile.png" />
      <img className="profile-image" src="/leaderboard/profile.png" />
      <img className="profile-image" src="/leaderboard/profile.png" />
      <img className="profile-image" src="/leaderboard/profile.png" />
      <img className="profile-image" src="/leaderboard/profile.png" />
    </div>
  )
}

export default CrewList