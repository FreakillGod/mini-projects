import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories=['all',...new Set(items.map((item)=>{
  return item.category;
}))]

function App() {

  const[menuItems,setMenuItems]=useState(items)
  const[categories,setCategories]=useState(allCategories)

  const filterFunction=(category)=>{
    if(category==='all'){
      return setMenuItems(items)
    }
    const newItems=items.filter((item)=>category===item.category)
    setMenuItems(newItems)
  }
  
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories allCategories={allCategories} filterFunction={filterFunction}/>
        <Menu items={menuItems}/>

      </section>
    </main>
  );
}

export default App;
