import React from 'react'
import DataProductsList from 'components/data/DataProductsList'

const Thumbs = ({indice, primaryImage, setPrimaryImage}) => {
    const {id, tittle, alternativeText, description, thumbnails, applicationsInfo, moreInfo, sizeInfo} = DataProductsList[indice-1]

  return (
    <div className= 'd-flex flex-lg-column justify-content-sm-center'>
        {thumbnails.map((miniatura)=>{
            return(
                <>
               
                <img
                onClick={()=>{setPrimaryImage(miniatura)}}
                src={miniatura}
                alt="..."
                width= {60}  
                className=' p-sm-2'              
                />
                 {console.log(miniatura)}
                
                </>
            )
        })}

    </div>
  )
}

export default Thumbs