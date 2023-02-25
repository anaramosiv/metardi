import React from 'react'
import wsLogo from 'image/whatsapp.svg'

const WhatsappLogo = () => {
  return (
    <div className="wsContainer">
        <img
        src={wsLogo}
        alt='Whatsapp'
        className="wsLogo"

        />
    </div>
  )
}

export default WhatsappLogo