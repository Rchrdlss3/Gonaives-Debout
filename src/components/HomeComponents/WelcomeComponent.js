import React from 'react'

function WelcomeComponent() {
  return (
    <div>
        <div>
            <img 
            alt = "Welcome Image (If Wanted)" 
            src = "https://visithaiti.com/wp-content/uploads/2021/11/3town-hall-gonai%CC%88ves-jean-oscar-augustin.jpg"
            style = {{
                width: '100%',
                height: '350px',
                objectFit: 'cover'
            }}
            ></img>
            <h2 style = {{
                padding: '0px',
                margin: '0px'
            }}>Welcome to Gonaives Debout</h2>
        </div>
    </div>
  )
}

export default WelcomeComponent