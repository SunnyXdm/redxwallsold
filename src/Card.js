import { useRef, useCallback } from 'react'

function Card({wall, lastWall, loadMoreId, id}) {
  const observer = useRef()
  const lastWallRef = useCallback(node => {
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadMoreId(id)
      }
    })
    if (node) observer.current.observe(node)
  })
  
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
