import React from 'react'
import DataProductsList from 'components/data/DataProductsList'

const ImgGrande = ({indice, primaryImage, setPrimaryImage}) => {
    const {id, tittle, alternativeText, description, thumbnails, applicationsInfo, moreInfo, sizeInfo} = DataProductsList[indice-1]

  return (
    <div className='d-flex justify-content-center py-5 mt-md-5 mt-lg-0'>
        <img src={primaryImage}
        alt= "Servicios"
        className="centerImg shadowBoxes"
       
        />
    </div>
  )
}

export default ImgGrande