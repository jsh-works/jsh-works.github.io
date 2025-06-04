import styles from './Contents.module.css';
import ourClients from '../../assets/images/our-clients.png';

export default function Contents() {
  return (
    <div className={styles.contents}>
      <h3>Our Clients</h3>
      <p>We have been working with some Fortune 500+ clients</p>
      <img
        src={ourClients}
        width={801}
        alt="ourClients"
        style={{ marginBottom : '40px' }}
      />
      <h3>Manage your entire community in a single system</h3>
      <p style={{ marginBottom : '40px' }}>Who is Nextcent suitable for?</p>
      <div className={styles.flexible}>
        <div className={styles.items}>
          <img src="" alt="" />
          <h4>Membership Organisations</h4>
          <span>
            Our membership management software provides
            full automation of membership renewals and payments
          </span>
        </div>

        <div className={styles.items}>
          <img src="" alt="" />
          <h4>National Associations</h4>
          <span>
            Our membership management software provides
            full automation of membership renewals and payments
          </span>
        </div>

        <div className={styles.items}>
          <img src="" alt="" />
          <h4>Clubs And Groups</h4>
          <span>
            Our membership management software provides
            full automation of membership renewals and payments
          </span>
        </div>
      </div>


    </div>
  )
}
