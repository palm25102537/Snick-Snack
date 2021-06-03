import React from 'react'

function Category(props) {

  const { item: { name, thumbnail } } = props
  return (
    <div>
      <h3>{name}</h3>
      <img className='product-style' src={thumbnail} />
    </div>

  )
}

export default Category
