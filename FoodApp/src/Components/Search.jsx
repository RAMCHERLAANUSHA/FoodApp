import { useEffect, useState } from "react"
import styles from './Search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "07ed4ddf3ad14bcab335dd335c9f0644"

export default function Search({foodData, setFoodData}){
    const [query, setQuery] = useState("pizza")
    useEffect(()=>{
        async function FetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json()
            setFoodData(data.results)
        }
        FetchFood();
    },[query])
    return(
        <div className={styles.searchContainer}>
            <input className={styles.input} value={query} onChange={(e)=>setQuery(e.target.value)} type="text"/>
        </div>
    )
}