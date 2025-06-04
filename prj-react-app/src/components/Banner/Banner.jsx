import Button from '../Button/Button.jsx';
import styles from './Banner.module.css';
import BaanerIMG from '../../assets/images/banner_imgs.png';
import cn from 'classnames';

export default function Banner({
  open,
  clickedToggle,
  toggle,
}) {
  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <div
          className={cn({
            [styles.leftBox]: true,
            [styles.text]: true
          })}
        >
          <h2>
            Lessons and insights<br/>
            <span>from 8 years</span>
          </h2>
          <p>
            Where to grow your business as a
            photographer: site or social media?
          </p>
          <Button
            size="small"
            btnName="get started"
            backgroundColor="var(--greenColor)"
            open={open}
            clickedToggle={clickedToggle}
            toggle={toggle}
          />
        </div>
        <img src={BaanerIMG} height={283} alt="베너이벤트 이미지" />
      </div>
    </div>
  )
}
