import Link from 'next/link'
import  styles  from  "../styles/index.module.scss"

export default function Index () {
  return <>
  <header className={styles.Nav}>
   
      <Link href="/" className={styles.Navitem}>
        Home
      </Link>

      <Link href="/about" className={styles.Navitem}>
        About
      </Link>
  </header>
  <main className={styles.Main}>
<div className={styles.Article}> Article</div>
<div className={styles.Sidebar}> Sidebar</div>

  </main>
<footer className={styles.Footer}> @copyright By <a className={styles.FooterCopyRight} > Alex Wachira </a>  </footer>

  </>;
}