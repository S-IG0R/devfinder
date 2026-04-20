import styles from './NotFound.module.scss';
import { LuSearchX } from "react-icons/lu";

import React from 'react'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <LuSearchX className={styles.icon}/>
      Nothing found
    </div>
  )
}

export default NotFound