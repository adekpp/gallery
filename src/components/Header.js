

const Header = (props) => {

  

  return (
    <div className="flex-initial ">
    <div className="header w-full  bg-purple-300 bg-opacity-50 flex flex-col justify-center items-center mb-8 text-gray-100">
      <h1 className="text-3xl font-bold my-1 drop-shadow-md">Images search</h1>
      <h4 className="text-lg drop-shadow-md"> powered by Unsplash API </h4>

      {props.children}
      
    </div>
    </div>
  );
};

export default Header;
