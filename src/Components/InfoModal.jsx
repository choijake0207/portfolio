import React from 'react'

export default function InfoModal({info}) {
  return (
    <div className='modal-overlay'>
        <div className="info-modal">
            {info}
        </div>
    </div>
  )
}
