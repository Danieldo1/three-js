import Canvas from "./canvas"
import Custom from "./pages/Custom"
import Home from "./pages/Home"

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Custom />
    </main>
  )
}

export default App
