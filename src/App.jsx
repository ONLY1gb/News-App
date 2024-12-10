import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import "./App.css";


const App = () => {

  const [category,setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory}></Navbar>
      <NewsBoard category={category}></NewsBoard>
    </div>
  )
}

export default App;
