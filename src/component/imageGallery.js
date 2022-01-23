import React, {useState} from 'react';
import './App.css';
import Menu from "./MenuItem";
import ItemMenu from './TabMenu/itemMenu';
import CatMenu from './TabMenu/CatMenu';




const allCatValues=[...new Set(Menu.map((element)=>{return element.category;})),"all"]
console.log(allCatValues);

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    const [catItems, setcatItems] = useState(allCatValues);
    
    const filterItem = (categItem) => {
        if(categItem ==="all"){
            setItems(Menu)
            return;
        }
        else{
         const updatedItems = Menu.filter((curElem) => {
                return curElem.category === categItem;
            });
    
            setItems(updatedItems);
        }
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            {/* Menu List Will Define Here  */}
            <CatMenu filterItem={filterItem} catItems={catItems}/>
        

            {/* my main items section  */}
            <ItemMenu items={items}/>
        </>
    )
}

export default GalleryReact;