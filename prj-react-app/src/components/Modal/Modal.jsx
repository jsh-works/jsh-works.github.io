import styles from './Modal.module.css';
import cn from 'classnames';

export default function Modal() {
  return (
    <div className={styles.modal}>
      <div className={styles.inner}>
        Modal 오픈입니다!
      </div>
    </div>
  )
}
