import styles from '../../assets/sass/modules/portfolio.module.scss'

export default function Card(props){

    return (
        <div className={styles.card}>
            <img className={styles.img} src={props.url} alt={props.alt} />
        </div>
    )

}