import React from 'react';
import ReactDom from 'react-dom';

//css
import './index.css';
//setting up variables
import {data} from './books';

import Book from './Book';

function BookList()
{
  return(
    <section className="booklist">
    {data.map(book => {
     // const {img, title, author}=book;
      return (
        <Book key={book.id} {...book} />
      );
    })}
    </section>
    );
}



ReactDom.render(<BookList/>, document.getElementById('root'));