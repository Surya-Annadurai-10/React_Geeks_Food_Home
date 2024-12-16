import styles from './hero.module.css'
function Hero(){
    return <>
       <div className={styles.container}>
            <div className={styles.inner}>
                <h2>Let us find your</h2>
                <h2 className={styles.forever}>Forever Food.</h2>
                <p>Lorem ipsum dolor sits odio officia eligendi cupiditate culpa magnam facere aliquam dolores quaerat voluptatum!</p>
                <button className={styles.search}>Search Now</button>
                <button className={styles.know}>Know more</button>
            </div>
       </div>
    </>
}

export default Hero;