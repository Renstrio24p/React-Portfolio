import { Link } from "react-router-dom";
import styles from '../../assets/sass/modules/navbar.module.scss';

export default function Navbar(){

    return (
        <nav className={styles.navbar}>
            <div className={styles['logo-div']}>
                <div className={styles['logo-box']}>
                <img src="logo.png" alt="logo" className={styles.logo} />
                </div>
                <p>Architecture Matters</p>
            </div>
            <ul className="nav-links">
                <Link className={styles.links} to={'/'}>Home</Link>
                <Link className={styles.links} to={'/portfolio'}>Portfolio</Link>
            </ul>
        </nav>
    )

}