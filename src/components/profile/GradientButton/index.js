import React from 'react'
import styles from './styles.module.scss'

const GradientButton = props => {
  const { children, onClick, type } = props

  const classNames = [
    styles.type1,
    styles.type2,
    styles.type3,
    styles.type4,
    styles.type5
  ]

  console.log('type: ', type)
  console.log(`${type}: ${classNames[type - 1]}`)

  return (
    <button onClick={onClick} className={[styles.gradientButton, classNames[type || 0]].join(' ')}>
      {
        children
      }
    </button>
  )
}

export default GradientButton