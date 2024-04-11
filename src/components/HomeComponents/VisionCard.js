import React from 'react'

function VisionCard({title}) {
  return (
    <div>
        <div style = {{
            width: '300px',
            height: '200px',
            border: `1px solid black`
        }}>
             <h2>{title}</h2>
        </div>
    </div>
  )
}

export default VisionCard