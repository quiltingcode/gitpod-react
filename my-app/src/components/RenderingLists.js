import React from 'react'
import Book from './Book'

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
                        <Book
                        bookTitle={book.title}
                        bookAuthor={book.author}
                        bookPages={book.pages}/>
                    </div>
                )
                
            })
        }
    </div>
  )
}

export default RenderingLists

