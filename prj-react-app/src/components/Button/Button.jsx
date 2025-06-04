import Modal from '../Modal/Modal.jsx';
import styles from './Button.module.css';
import cn from 'classnames';

export default function Button({
  size,
  btnName,
  backgroundColor,
  click = () => {},
  open,
  clickedToggle,
  toggle,
}) {
  return (
    <>
      <div
        className={cn({
          [styles.button]: true,
          [styles.small]: size === "small", 
          [styles.long]: size === "long"
        })}
        style={{ background : backgroundColor }}
        onClick={open ? clickedToggle : click}
      >
        { btnName }
      </div>
      { open && toggle && <Modal /> }
    </>
  )
}
