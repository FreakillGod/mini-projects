import React from 'react';
import { links, social } from './data'

export const Sidebar = () => {
  return <div>
      {links.map((link)=>{
        const {id,url,text}=link;
        return(<div key={id}>
            <a href={url}>{text}</a>
            </div>
        )
      })}
  </div>;
};
