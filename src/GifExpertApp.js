import React , {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

// const categories=['One Punch', 'Samuria', ' Naruto'];


 const [categories, setcategories] = useState(['One Punch']);

// const handleAdd= () => {
// setcategories([...categories,'Hunter' ]);

// }

    return (
        <>
            
    <h2>GifExpertApp</h2>

    <AddCategory setcategories = {setcategories}/>
    <hr />

    
   
     
     <ol>
        { 
        categories.map((category, i) => ( 
        <GifGrid
        
        key={category}
        category={category}
        
        />
        )) 
        
        }

     </ol>

        </>
    )
}
