import styles from './mainSection.module.css'

function MainSection(){
    return (
        <>
         <div className={styles.main_container}>
         <div className={styles.main}>
             <div className={styles.left_box}>
                <img src={"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"} alt="home" />
             </div>
             <div className={styles.right_box}>
                <div className={styles.inner}>
                    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, deleniti.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque illo, libero delectus eum cum voluptas repudiandae alias necessitatibus, magni quisquam, sed earum labore adipisci porro voluptates sapiente. Tempore, sequi.</p>
                    <button>Get in Touch</button>
                </div>
             </div>
         </div>

         </div>
        </>
    )
}

export default MainSection;
