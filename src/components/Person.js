import React from 'react'

export default function Person({person}) {
    return (
        <div>
            <h1>I am {person.name}.I am {person.age} year Old.I know {person.skill}</h1>
        </div>
    )
}
