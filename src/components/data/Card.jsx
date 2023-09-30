import styles from '../../assets/sass/modules/portfolio.module.scss'

export default function Card(props){

    return (
        <div className={styles.card}>
            <img className={styles.img} src={props.url} alt={props.alt} />
            <div className={styles.desc}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )

}