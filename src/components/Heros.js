import React from 'react'

function Heros({heroname})
 {   
      if(heroname === "joker"){
        throw new Error('not a hero')
    }
    return (
        <div>
        {heroname}
        </div>
    )
}

export default Heros
