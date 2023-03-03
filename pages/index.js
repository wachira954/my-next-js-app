import Link from 'next/link'
import  styles  from  "../styles/index.module.scss"

export default function Index () {
  return (
    <>
    <header className={styles.Nav}>
     
        <Link href="/">
          <a className={styles.Navitem} >Home</a>
        </Link>

        <Link href="/about">
          <a className={styles.Navitem}>About</a>
        </Link>
    </header>
    <main className={styles.Main}>
<div className={styles.Article}> Article</div>
<div className={styles.Sidebar}> Sidebar</div>

    </main>
<footer className={styles.Footer}> @copyright By <a className={styles.FooterCopyRight} > Alex Wachira </a>  </footer>

    </>
  )
}