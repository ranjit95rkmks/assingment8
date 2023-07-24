import { BrowserRouter, Routes, Route} from "react-router-dom"
import ExpensePage from "./page/ExpensePage"
import IncomePage from "./page/IncomePage"
import HomePage from "./page/Home"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/income" element={<IncomePage/>} />
      <Route path="/expense" element={<ExpensePage/>} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
