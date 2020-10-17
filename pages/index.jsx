import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactMe from '../components/ContactMe';
import ContactModal from '../components/ContactModal';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <>
      <Head>
        <title>Frontend Developer Test</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Header />
      <main className="container">
        <section className={"billboard"}>
          <img className={"billboard__image"} src="/main-image.jpg" />
          <div className={"billboard__intro"}>
            <h1>Hola, soy Jonas Kahnwald, diseñador de interiores</h1>
            <a className="button" href="#about">
              Sobre mí
            </a>
          </div>
        </section>
        <section id="about" className={styles.aboutSection}>
          <div className="grid">
            <div className={`column ${styles.imageWrapper}`}>
              <img src="/profile.jpg" className={styles.image}/>
            </div>
            <div className={`column ${styles.content}`}>
              <h2>Sobre mí</h2>
              <p>
                Mi visión: esa creación, cualquiera que sea la forma que adopte, debe mejorar la
                vida de tantas personas. como sea posible. Creo con vehemencia que este deber
                poético y político, rebelde y benevolente, pragmático y subversivo debe ser
                compartido por todos.
              </p>
              <p>
                A los ojos de este consumado ciudadano del mundo, compartir su visión ética y
                humanista de un planeta más igualitario es un deber, si no un imperativo moral, que
                se traduce en proyectos poco convencionales que traen fértiles sorpresas. Es fácil
                adivinar su curso de acción: un objeto debe ser útil antes de ser hermoso.
              </p>
              <Link href="/portfolio">
                <a className={`button button--hollow ${styles.link}`}>Ver mi portfolio</a>
              </Link>
            </div>
          </div>
        </section>
        <ContactMe />
      </main>
      <ContactModal />
      <Footer />
    </>
  );
};

export default Home;
