import React from 'react'
import wsLogo from 'image/wa-icon.png'

const WhatsappLogo = () => {
  return (
    <div className="wsContainer">
        <a href="https://wa.me/5492615660798">
        <img
        src={wsLogo}
        alt='Whatsapp'
        className="wsLogo"

        />
        </a>
    </div>
  )
}

export default WhatsappLogo