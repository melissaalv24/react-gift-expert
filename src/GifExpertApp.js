import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    
    //let categories = ['One punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One punch'])
    /*const handleAdd = () => {
        setCategories([...categories, 'melissa hermosa'])
    }*/
    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories} />
            <hr />

            <ul>
                {
                    categories.map( (x, i) => <GifGrid key={x} category={x}/>)
                }
            </ul>

        </div>
    )

}