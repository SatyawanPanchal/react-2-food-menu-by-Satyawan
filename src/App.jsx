import items from './data'
import Title from './Title'
import Categories from "./Categories"
import Menu from './Menu'
import "./style.css"
import { useState } from 'react'

const App = () => {
  //fetching the categories of food from menu
  
  const categories = new Set(items.map((item) => item.category))
  const allCategories = [`all`, ...categories]


  //------------------------------

  const [whatToShow, setWhatToshow] = useState(allCategories)
  const [itemsInSelectedCategory, setItemsInSelectedCategory] = useState(items)

  function setchoice(choice) {
    console.log("you selected ", choice);
    setItemsInSelectedCategory(
      () => {
        if (choice === 'all') {
          return items;
        }
        else {
          const fooditemsSelected = items.filter((item) => item.category === choice)
          console.log("my selected items are ", fooditemsSelected);
          return fooditemsSelected
        }

      })
  }

  return <>

    <Title />
    <Categories categories={allCategories} setchoice={setchoice} />
    <Menu items={itemsInSelectedCategory} />

  </>

};
export default App;
