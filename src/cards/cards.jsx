import styles from './cards.module.css'

function Cards(){
    const comments = [
        {name : "Gladis Lennon",
         role : "Head of SEO",
         pro_pic: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
         comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
        },

        {name : "Gladis Lennon",
            role : "Head of SEO",
            pro_pic: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
            comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
           },

           
           {name : "Gladis Lennon",
            role : "Head of SEO",
            pro_pic: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
            comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipitecto et illo minus quo tenetudolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
           },

           
           {name : "Gladis Lennon",
            role : "Head of SEO",
            pro_pic: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
            comment : "Lorem ipsum dolor sit amet consquo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
           },
   
           
           {name : "Gladis Lennon",
            role : "Head of SEO",
            pro_pic: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
            comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aquo tenetur ducimus, enim ad inventore laudantium est illum voluptatem quis."
           },

           
           {name : "Gladis Lennon",
            role : "Head of SEO",
            pro_pic: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
            comment : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae adolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
           },
   

    ]

    return (
        <>
         <div className={styles.container}>
         <div className={styles.comments_container}>
            {
                comments.map((value) =>{
                    return <div className={styles.comment_box}>
                        <div className={styles.comment}>
                            {value.comment}
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.bottom_right}>
                                <img src={value.pro_pic} alt="profile-picture" />
                            </div>
                            <div className={styles.bottom_right}>
                                <h3>{value.name}</h3>
                                <p>{value.role}</p>
                            </div>
                        </div>
                    </div>
                    
                })
            }
          </div>
         </div>
        </>
    )
}

export default Cards;