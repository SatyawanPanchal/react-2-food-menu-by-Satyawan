import React from 'react'
 
const Categories = ({categories,setchoice}) => {
  return (
    <div>
      <div className='btnContainer'>
      {categories.map((foodtype) => 
     
     <div key={foodtype}   >
        
        <button className='btn' onClick={()=>setchoice(foodtype)} > {foodtype}   </button>

      </div> )}
      </div>
    </div>
  )
}

export default Categories;
