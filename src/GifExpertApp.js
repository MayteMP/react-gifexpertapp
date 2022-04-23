import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const[categories, setCategories] = useState(['One Punch']);

  /*
  const handleAdd = () => {
    //setCategories([...categories, 'One Piece']);
    // setCategories(['One Piece', ...categories ]);
    setCategories(cats => [...cats, 'One Piece']);
    
  }*/

  console.log(categories)

  return (
      <>
        <h4>GitExpertApp</h4>
        
        <AddCategory setCategories = { setCategories } />
        <hr/>
        <ol>
          { 
            categories.map( category => (
              <GifGrid category={category}
                key={category}
              />
            ))
          }
        </ol>
        
      </>
  );
};
