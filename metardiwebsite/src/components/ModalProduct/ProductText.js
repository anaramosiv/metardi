import React from 'react'
import DataProductsList from 'components/data/DataProductsList';

const ProductText = ({indice}) => {
    const {id, tittle, alternativeText, description, thumbnails, applicationsInfo, moreInfo, sizeInfo} = DataProductsList[indice-1]
  return (
    <div>
        <h2>{tittle}</h2>
        <p>{description}</p>
        <button>Solicitar Cotización</button>

    </div>
  )
}

export default ProductText