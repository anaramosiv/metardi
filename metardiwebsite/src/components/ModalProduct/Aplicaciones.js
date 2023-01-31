import React from 'react'
import DataProductsList from 'components/data/DataProductsList'


const Aplicaciones = ({indice}) => {
    const {id, tittle, alternativeText, description, thumbnails, aplicationsInfo, moreInfo, sizeInfo} = DataProductsList[indice-1]
  return (
    <div>
        <h5>Aplicaciones</h5>
    <ul>
    {aplicationsInfo.map((appText)=>{
        return(
            <li>{appText}</li>           
            
        )
    })}

</ul>
</div>
  )
}

export default Aplicaciones