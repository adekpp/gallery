import React from "react";



function SearchForm({imageSearchHandler, inputText, setInputText}) {


  
  return (
    <>
      <form className="flex content-center my-4	" onSubmit={imageSearchHandler}>
        
        <input className=" mr-2 pl-2 focus:outline-none  focus:ring-2 focus:ring-fuchsia-500 text-gray-800 font-semibold tracking-wide" type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} />
        <button className=" font-normal rounded-none py-1 px-4  tracking-wide transition ease-in-out delay-150 bg-blue-500 hover:bg-indigo-500 duration-200" type="submit">
        <div className=" flex content-center"><ion-icon class="mt-1" name="search-outline"></ion-icon>
         <p className="ml-1">Search</p></div>
        </button>

      </form>
      
    </>
    
  );
};

export default SearchForm;
