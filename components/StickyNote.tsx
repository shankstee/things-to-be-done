import React from 'react'
import styles from '../styles/stickyNote.module.css'

export const StickyNote = (props: {}) => {
  return (
    <div className={styles.postIt}>
      <p className={styles.note}>
        {' '}
        Mary, Mary, quite contrary,
        <br />
        How does your garden grow?
        <br />
        With silver bells, and cockle shells,
        <br />
        And pretty maids all in a row.
        <br />
      </p>
    </div>
  )
}
