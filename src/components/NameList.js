import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            _id: 1,
            name: "bruce",
            age: 30,
            skill: "react"
        }, {
            _id: 2,
            name: "clark",
            age: 30,
            skill: "Angular"
        }, {
            _id: 3,
            name: "diana",
            age: 25, 
            skill: "Nodejs"
        },
    ]
    const personsList = persons.map(person =>  <Person key={person._id} person={person}   /> )
    return (
        <div>{
            personsList
        }
        </div>
    )
}
export default NameList