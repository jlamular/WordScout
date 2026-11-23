
import './App.css'
import Dictionary from './pages/Dictionary.jsx'
import WordOfTheDay from './pages/WordOfTheDay.jsx'

function App() {
  return (
    <div className="app">
      <header className="header">
        <header className="header">
          <div className="brand">WordScout.</div>
          <p>Explore new words and discover their meanings.</p>
        </header>
      </header>

      <main>
        <section className="dictionary-card">
          <div className="section-heading">
            <span className="tag">EXPLORE</span>
            <h2>Dictionary</h2>
            <p>Find the meaning of any English word.</p>
          </div>

          <Dictionary />
        </section>

        <section className="daily-card">
          <div className="daily-content">
            <span className="tag">DAILY VOCABULARY</span>
            <h2>Word of the Day</h2>
            <p className="daily-subtitle">
              Learn something new every day.
            </p>
            <div className="daily-result">
              <WordOfTheDay />
            </div>
          </div>
          <div className="daily-decoration">Aa</div>
        </section>
      </main>

    </div>
  )
}

export default App
