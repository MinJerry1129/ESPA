import React from 'react'
import styles from './styles.module.scss'

const TextFrame = props => {
  const { style, caption, children, captionWidth, small, className } = props
  return (
    <div className={[styles.textFrameWrapper, className].join(' ')} style={style}>
      <img src={`/profile/${small ? 'text-frame-small' : 'text-frame'}.png`} className={styles.imgBackground}/>
      <div className={styles.captionBackground}
        style={{
          width: captionWidth
        }}
      >
      </div>
      <div className={styles.caption}>
        { caption }
      </div>
      {
        children
      }
    </div>
  )
}

export default TextFrame