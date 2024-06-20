import React from 'react'

const Menu = ({ items }) => {
    return (
        <div className="card_container">



            {items.map((item) => {
                const { id, title, category, price, img, desc } = item;
                return <div className='card' key={id}>
                    <div className="img_container">
                        <img src={img} alt={title} />
                    </div>

                    <div className="info_container">
                        <h3>{title} </h3>
                        <span style={{color:"red",fontSize:'15px'}}>{category}</span>
                        <button>{price}</button>
                    </div>

                    <div className="desc_container">
                        <p>{desc}</p>
                    </div>

                </div>

            })}

        </div>
    )
}

export default Menu
