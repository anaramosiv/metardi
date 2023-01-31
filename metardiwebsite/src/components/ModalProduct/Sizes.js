import React from 'react';
import DataProductsList from 'components/data/DataProductsList'

const Sizes = ({indice}) => {

    const {id, tittle, alternativeText, description, thumbnails, aplicationsInfo, moreInfo, sizeInfo} = DataProductsList[indice-1]
  return (
    <div>
        <h5>Tamaños</h5>
    <ul>
    {sizeInfo.map((sizeText)=>{
        return(
            <li>{sizeText}</li>           
            
        )
    })}

</ul>
</div>
  )
}

export default Sizes