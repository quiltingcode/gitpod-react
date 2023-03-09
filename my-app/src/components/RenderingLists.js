import React from 'react'

function RenderingLists() {
    const bookList = [
        'To kill a mockingbird',
        'The great gatsby',
        'The catcher in the rye'
    ]

    const books = [
        {
            title: 'To kill a mockingbird',
            author: 'harper lee',
            pages: 281
        },
        {
            title: 'The great gatsby',
            author: 'f.scott fitzgerald',
            pages: 218
        },
        {
            title: 'The catcher in the rye',
            author: 'j.d.salinger',
            pages: 234
        }
    ]
  return (
    <div>
        {bookList.map(book => {
            return <h2>{book}</h2>
        })}
        <hr></hr>
        {
            books.map(book => {
                return (
                    <div>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                )
                
            })
        }
    </div>
  )
}

export default RenderingLists

