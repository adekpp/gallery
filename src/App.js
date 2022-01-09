import React from "react";
import Header from "./components/Header";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SearchForm from "./components/SearchForm";
import { useState } from "react";
import './imagehover.css'
import './index.css';




function App() {

  const [inputText, setInputText] = useState("");
  const [images, setImages] = useState([]);
  

  // accessKey: 'ElMcP6xVcBjEXwp36rSMvyTeU7PSRk0A8fceBqfafho',

  const imageSearchHandler = (e) => {
    e.preventDefault();
   
    fetch(`https://api.unsplash.com/search/photos?query=${inputText}&per_page=100`, {
      method: "GET",
      headers: {
        Authorization: "Client-ID ElMcP6xVcBjEXwp36rSMvyTeU7PSRk0A8fceBqfafho",
      },
    })
      .then((data) => data.json())
      .then((result) => {
        
        setImages(result.results);
        
      });
      
    setInputText("");
  
  };
 
  
  return (
    <div className="App ">
     
     <Header>
        <SearchForm
          imageSearchHandler={imageSearchHandler}
          inputText={inputText}
          setInputText={setInputText}
        ></SearchForm>
      </Header>
      
      
      {(images.length > 0) ?
      
        <div className="flex-auto w-5/6 justify-center mx-auto">
      
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }} >
    
            <Masonry columnsCount={3} gutter="10px" >
            {images.map((photo) => (  
              

                              <figure className="imghvr-slide-up" key={photo.id}>
                              <img className="cursor-pointer w-4/5"
                            
                  src={photo.urls.small}
                  style={{ width: "100%", display: "block" }}
                  alt={photo.description}/>

                    <figcaption>
                        <p className="drop-shadow-md">Author: <span className=" font-bold">{photo.user.name}</span></p>
                    </figcaption>

                    <a href={photo.urls.regular} target="_blank" ></a>
                </figure>

                
                              
              

                 
                ))}
              
            </Masonry>
    
          </ResponsiveMasonry> 

   

              
          

          </div> : <div className="flex-auto w-full  flex flex-col justify-center items-center"><h1 className="font-bold text-4xl opacity-20 text-gray-50">Use search bar</h1></div>
          }
           

    </div>
  );
}

export default App;
