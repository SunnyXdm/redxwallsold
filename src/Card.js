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
  console.log(wall.permalink)
  return (
    <>
    {lastWall ?
    <div ref={lastWallRef}>
      <img className="object-cover object-center h-full w-full rounded shadow-xl" src={`${wall.preview}`} alt=""></img>
      <div className="py-1">
        <div className="text-lg select-none text-black font-poppins font-semibold">{wall.title}</div>
        <div className="text-sm select-none text-black font-poppins">by ~ {wall.author}</div>
        <div className="bg-purple-700 w-24 h-8 font-semibold text-white font-poppins flex items-center justify-center select-none ">
          <a
            href={wall.url}
            download
          >
          Download
          </a>
        </div>
      </div>
    </div> :
    <div>
      <img className="object-cover object-center h-full w-full rounded shadow-xl" src={`${wall.preview}`} alt=""></img>
      <div className="py-1">
        <div className="text-lg select-none text-black font-poppins font-semibold">{wall.title}</div>
        <div className="text-sm select-none text-black font-poppins">by ~ {wall.author}</div>
        
      </div>
      <div className="rounded-sm bg-purple-700 w-24 h-8 font-semibold text-white font-poppins flex items-center justify-center select-none">
          <a
            href={wall.url}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
          Download
          </a>
        </div>
    </div>
    }
    </>
  );
}

export default Card;
