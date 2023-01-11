import Counter from './components/Counter/Counter'
import './App.css'
import Reader from './components/Counter/Reader'

function App() {
  return (
    <div className="App">
      {/* Estos componentes son hermanos y pueden leer el contador gracias a redux toolkit */}
      <Reader />
      <Counter />
    </div>
  )
}

export default App
