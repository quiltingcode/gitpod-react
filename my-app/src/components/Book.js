import React from 'react'

function Book(props) {
  return (
    <div>
        <h5>{props.bookTitle}</h5>
        <p>{props.bookAuthor}</p>
        <p>{props.bookPages}</p>
    </div>
  )
}

export default Book