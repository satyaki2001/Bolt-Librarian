import React, {useState} from "react";
import axios from 'axios';
function SearchBar(){
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyA4Y4ADMM38nFAe07i-701XXTA14PFHZg0")
    
    function handleChange(event) {
      const book = event.target.value;
      setBook(book);
    }

    function handleSubmit(event){
      event.preventDefault();
      axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
      .then(data =>{
        console.log(data.data.items);
        setResult(data.data.items);
      })
    }
    return(
<div className="searchBar">
      <form onSubmit={handleSubmit} className="d-flex mx-auto w-75" role="search">
        <input className="form-control me-2" type="search" placeholder="Search your books here!" aria-label="Search" onChange={handleChange}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="row flex-wrap justify-content-center text-center grid">
      {result.map(book => (
        <div className="card g-col-sm-5 ">
    <img src={book.volumeInfo.imageLinks!==undefined?book.volumeInfo.imageLinks.thumbnail:''} className="card-img-top" alt={book.title}/>
    <div className="card-body">
      <h5 className="card-title">{book.volumeInfo.title}</h5>
      <p className="card-text"><small className="text-muted">{book.volumeInfo.authors}</small></p>
      <a href={book.volumeInfo.previewLink} class="btn btn-primary stretched-link">Read More</a>
    </div>
  </div>

      ))}
      
   
   </div>

</div>
    )
}

export default SearchBar

