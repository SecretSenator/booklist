import React from 'react';
import ReactDom from 'react-dom';

//css
import './index.css';
//setting up variables
const book=[
  {
  img:'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg',
  author:'Hector Garcia',
  title:'Ikigai: THe Japanese secret...',
},
{
  img:'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg',
  author:'James Clear',
  title:'Atomic Habits',
},
]


function BookList()
{
  return(
    <section className="booklist">
    {book.map(book => {
     // const {img, title, author}=book;
      return (
        <Book book={book} />
      );
    })}
    </section>
    );
}

const Book=(props) =>
{
  //console.log(props);
  const {img, title, author} = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1> 
      <h4 >
          {author}
      </h4>
    </article>
    
  );
} 

ReactDom.render(<BookList/>, document.getElementById('root'));
