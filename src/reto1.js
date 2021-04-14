import React from 'react'

function reto1() {
  return (
    <div className="cuerpo">
        <h1>
          Solution:
        </h1>
        <ul>
            {(n=20) => {
              const elements = [];
              for (let i=0; i<n; i++){
                elements.push(<li>{i}</li>)
              }
            }}
        </ul>
      </div>
  )
}

export default reto1
