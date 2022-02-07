import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const{isSideBarOpen,closeSideBar}=useGlobalContext();
  return (
    <aside className={`${isSideBarOpen?'sidebar-wrapper show':'sidebar-wrapper'}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSideBar}>
          <FaTimes/>
        </button>
        <div className='sidebar -links'>
          {sublinks.map((item,index)=>{
            const{links,page}=item;
            return <article key={index}>
              <h3>{page}</h3>
              <div className='sidebar-sublinks'>
                {links.map((item,index)=>{
                  const{label,icon,url}=item;
                  return <a href='url' key={index}>{icon}{label}</a>
                })}
              </div>
            </article>
          })}
        </div>
      </div>
    </aside>
  )
}
export default Sidebar
