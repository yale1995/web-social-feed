import styles from './Comment.module.css'

import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='http://github.com/yale1995.png' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Yale Araújo</strong>
                            <time title='22 de Març ás 22h' dateTime='2023-02-03'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Very Well Devon, congratulations!! 👏🏼👏🏼</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={24} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}