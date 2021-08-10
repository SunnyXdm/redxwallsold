// id={item.data.id}
// title={item.data.title}
// url={item.data.url}
// author={item.data.author}
// small_img={parent_img}
// ups={item.data.ups}item.data.preview.images[0].resolutions[3].url
// permalink={item.data.permalink}
import { useState, useEffect, useRef, useCallback } from 'react'

function Card({wall, lastWall}) {
  const lastWallRef = useCallback(node => {
    console.log(node)
  })
  console.log(lastWall)
  return (
    <>
    {lastWall ?
    <div ref={lastWallRef}>
      <img className="object-cover object-center h-full w-full rounded shadow-xl" src={`${wall.preview}`} alt=""></img>
      
      <div className="py-1">
        <div className="text-lg select-none text-black font-poppins font-semibold">{wall.title}</div>
        <div className="text-sm select-none text-black font-poppins">by ~ {wall.author}</div>
      </div>
    </div> :
    <div>
      <img className="object-cover object-center h-full w-full rounded shadow-xl" src={`${wall.preview}`} alt=""></img>
      
      <div className="py-1">
        <div className="text-lg select-none text-black font-poppins font-semibold">{wall.title}</div>
        <div className="text-sm select-none text-black font-poppins">by ~ {wall.author}</div>
      </div>
    </div>
    }
    </>
  );
}

export default Card;
