import { useState } from "react"
import Search from "./Components/Search"
import FoodList from "./Components/FoodList"
import Navbar from "./Components/Nav"
import './App.css'
import Container from "./Components/Container"
import InnerContainer from "./Components/InnerContainer"
import FoodDetails from "./Components/FoodDetail"
function App() {
  const [foodData,setFoodData] = useState([])
  const [foodID, setFoodID] = useState("656329")
  return (
      <div>
        <Navbar/>
        <Search foodData = {foodData} setFoodData = {setFoodData}/>
        <Container>
          <InnerContainer>
            <FoodList foodData = {foodData} setFoodID={setFoodID}/>
          </InnerContainer>
          <InnerContainer>
            <FoodDetails  foodID = {foodID}/>
          </InnerContainer>
        </Container>
      </div>
  )
}

export default App
