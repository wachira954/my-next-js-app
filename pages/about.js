import Link from 'next/link'

import  styles  from  "../styles/about.module.scss"


export default function AboutPage() {
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
<div className={styles.Article}> 
      <p>
      Hey, My Name is Alex Wachira. In this Next.js Series Part, We Learn How to Add sass/scss in the next.js App.
      </p>
       <p>
Next.js frame-work provides Not Direct Support In Sass. But Add Some Exter Node.js Package and Plugin To extend CSS Ability.
        </p>
<a className={styles.readMore} href="#"> read More </a>
</div>

  </main>
  <footer className={styles.Footer}> @copyright By 
     <a className={styles.FooterCopyRight} href="#" > 
        Alex Wachira 
     </a> 
  </footer>
</>;
}
