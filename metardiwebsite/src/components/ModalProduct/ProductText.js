import React from 'react'
import DataProductsList from 'components/data/DataProductsList';
import Cotizar from 'components/Buttons/Cotizar';

const ProductText = ({indice}) => {
    const {id, tittle, alternativeText, description, thumbnails, applicationsInfo, moreInfo, sizeInfo} = DataProductsList[indice-1]
  return (
    <>
        <h3 className='toUpper'>{tittle}</h3>
        <p>{description}</p>
        </>
  )
}

export default ProductText