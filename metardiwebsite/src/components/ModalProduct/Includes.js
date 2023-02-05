import React from 'react'
import DataProductsList from 'components/data/DataProductsList'

const Includes = ({indice}) => {
    const {id, tittle, alternativeText, description, thumbnails, aplicationsInfo, moreInfo, sizeInfo} = DataProductsList[indice-1]

  return (
    <div>
    <h5>Qué Incluye</h5>
      
        {moreInfo.map((includesText)=>{
    return(
        <p id='noBullet'>{includesText}</p>           
        
    )
})}
   
</div>
  )
}

export default Includes