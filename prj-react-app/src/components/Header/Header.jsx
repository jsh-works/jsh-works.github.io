import Button from '../Button/Button.jsx';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <h1>
          <a href="/"></a>
        </h1>
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Features">Features</a>
          </li>
          <li>
            <a href="/Community">Community</a>
          </li>
          <li>
            <a href="/Blog">Blog</a>
          </li>
          <li>
            <a href="/Pricing">Pricing</a>
          </li>
          <li>
            <Button
              size="long"
              btnName="Register Now"
              backgroundColor="var(--greenColor)"
              click={() => alert("Register Now!!")}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
