import React from 'react';


const Search = (props) => {


    return(
        <div>
          <input onChange={ props.search } type='text' placeholder='Search' />
          <button onClick={ props.click } >Go!</button>
        </div>
    )
}


export default Search;