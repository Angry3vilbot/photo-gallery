import PictureGallery from './components/PictureGallery'
import "./App.css"
import "yet-another-react-lightbox/styles.css";

function App() {

  return (
    <div id='app'>
      <h1>8 и 9-Вайфон</h1>
      <h2>Коллекция Пикч</h2>
      <h4><em>"Ебать у тебя компромата на всех"</em> – Евгений Гогунский</h4>
      <PictureGallery/>
      <footer>
        <p>© Angry3vilbot</p>
        <a href='https://github.com/Angry3vilbot/photo-gallery' target='#blank'><i></i></a>
        <a href="https://github.com/Angry3vilbot/photo-gallery/raw/main/content.zip"><button>Загрузить весь контент</button></a>
      </footer>
    </div>
  )
}

export default App
