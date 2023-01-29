import React from 'react'
import DataProductsList from 'components/data/DataProductsList'

const Thumbs = ({indice, primaryImage, setPrimaryImage}) => {
    const {id, tittle, alternativeText, description, thumbnails, applicationsInfo, moreInfo, sizeInfo} = DataProductsList[indice-1]

  return (
    <div>
        {thumbnails.map((miniatura)=>{
            return(
                <>
               
                <img
                onClick={()=>{setPrimaryImage(miniatura)}}
                src={miniatura}
                alt="..."
                width= {50}                
                />
                 {console.log(miniatura)}
                
                </>
            )
        })}

    </div>
  )
}

export default Thumbs