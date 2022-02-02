import React from 'react';

const Categories = ({allCategories,filterFunction}) => {
  return (
    <div className='btn-container'>
      {allCategories.map((btns_name,index)=>{
        return (
          <button className='filter-btn' key={index} onClick={()=>filterFunction(btns_name)}>{btns_name}</button>
        )
      })}
    </div>
  );
};

export default Categories;
