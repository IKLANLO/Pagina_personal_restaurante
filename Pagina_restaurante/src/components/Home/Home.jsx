import './Home.styles.scss'

const Home = () => {
  return (
    <div className='home'>
      <h1>Mesón Manuel</h1>
      <h2>Carta</h2>
      <>
        <p>Carrilleras al vino tinto  <span className='home__price'>15€</span></p>
        <p>Merluza a la romana  <span className='home__price'>15€</span></p>
        <p>Rissotto con setas  <span className='home__price'>12€</span></p>
        <p>Gnocchis a la carbonara  <span className='home__price'>14€</span></p>
        <p>Tarta de queso al horno  <span className='home__price'>5€</span></p>
      </>
    </div>
  )
}

export default Home