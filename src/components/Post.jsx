import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='http://github.com/yale1995.png' />
                    <div className={styles.authorInfo}>
                        <strong>Yale Araújo</strong>
                        <span>Frontend Developer</span>
                    </div>
                </div>
                <time title='22 de Març ás 22h' dateTime='2023-02-03'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href=''>jane.design/doctorcare</a></p>

                <p>
                    <a href=''>#novoprojeto</a> {' '}
                    <a href=''>#nlw</a> {' '}
                    <a href=''>#rocketseat</a> {' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}