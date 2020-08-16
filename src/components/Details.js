import React,{useContext, useState, useRef} from 'react'
import {useParams} from 'react-router-dom'
import {DataContext} from './DataProvider'
import Colors from './Colors'
import Sizes from './Sizes'
import DetailsThumb from './DetailsThumb'
import {Link} from 'react-router-dom'

export default function Details() {
    const {id} = useParams();
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    
    const [index, setIndex] = useState(0)
    const imgDiv = useRef();


    const details = products.filter((product, index) =>{
        return product._id === id
    })

    const handleMouseMove = e =>{
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }


    return (
        <>
           {
               details.map(product =>(
                   <div className="details" key={product._id}>
                       <div className="img-container" onMouseMove={handleMouseMove}
                       style={{backgroundImage: `url(${product.images[index]})`}} ref={imgDiv} 
                       onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />

                       <div className="box-details">
                           <h2 title={product.title}>{product.title}</h2>
                           <h3>${product.price}</h3>
                           <Colors colors={product.colors} />
                           <Sizes sizes={product.sizes} />
                           <p>{product.description}</p>
                           <p>{product.content}</p>
                           <DetailsThumb images={product.images} setIndex={setIndex} />
                           <Link to="/cart" className="cart" onClick={() => addCart(product._id)}>
                               Add to cart
                            </Link>
                       </div>

                   </div>
               ))
           }
        </>
    )
}
