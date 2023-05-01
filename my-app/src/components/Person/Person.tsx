import React from 'react'
import { Name, PersonProps } from '../../utils/Person.types'


const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}

export default Person
