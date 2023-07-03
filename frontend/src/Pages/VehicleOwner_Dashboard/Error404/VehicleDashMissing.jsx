import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../../../components/com.style/missing.module.css'

const VehicleDashMissing = () => {
  return (
    <div>
      <div className={styles.page404}>
        <div className={styles.errorcode}>
          <h1>404</h1>
        </div>
        <div className={styles.errormsg}>
          <h3>Looks Like You're Lost</h3>
          <p>The page you are looking for not available</p>
          <Link to='' className={styles.link}>Back to Dashboard</Link>
        </div>
      </div>
    </div>
  )
}

export default VehicleDashMissing