import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getStorageItem=()=>{
  let list=localStorage.getItem('list');
  if(list){
    return (list=JSON.parse(localStorage.getItem('list')));
  }else{
    return [];
  }
};

function App() {
  const[name,setName]=useState('');
  const[list,editList]=useState(getStorageItem());
  const[editID,setEditID]=useState(null);     //reflect the item which we want to edit
  const[isEditing,setIsEditing]=useState(false);
  const[alert,editAlert]=useState({show:false,msg:'',type:''});
  
  const formSubmit=(e)=>{
    e.preventDefault();

    if(!name){
      handleAlert(true,'please enter items on empty fields','danger')
    }else if(name && isEditing){
      editList(list.map((item)=>{
        if(editID===item.id){
          return{...item,title:name};
        }
        return item;
      }))
      setName('');
      setEditID(null);
      setIsEditing(false);
      handleAlert(true,'item edited successfully','success')
    }else{
      const newItem={id:new Date().getTime().toString(),title:name};
      editList([...list,newItem])
      setName('')
      handleAlert(true,'item added succesfully','success')
    } 
  }

  const handleAlert=(show=false,msg='',type='')=>{
      editAlert({show:show,msg,type:type});
  }

  const clearItems=()=>{
    handleAlert(true,'list cleared','success');
    editList([]);
  }

  const removeItem=(id)=>{
    const removedItems=list.filter((item)=>{
      return item.id!==id;
    });
    editList(removedItems);
    // editList(list.filter((item)=>item.id!==id))
  }

  const editItem=(id)=>{
    let selectedItem=list.find((item)=>item.id===id);
    setName(selectedItem.title);
    setIsEditing(true);
    setEditID(id);
  };

  //local storage
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list));
  },[list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={formSubmit}>
        {alert.show && <Alert {...alert} handleAlert={handleAlert} list={list}/>}
        <h3>Check List</h3>
        <div className='form-control'>
        <input type='text' className='grocery' placeholder='eg.bread' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button type='submit' className='submit-btn'>{isEditing?'edit':'submit'}</button>
        </div>
      </form>
      {list.length>0 && <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem}/>
        <button className='clear-btn' onClick={clearItems}>clear items</button>
      </div>}
      
    </section>
  )
}

export default App
