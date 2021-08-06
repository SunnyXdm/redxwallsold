import Card from "./Card"
import axios from "axios"
import { useState, useEffect } from 'react'

function Wallpapers({ data }) {
  const [walls, setWalls] = useState([])
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get('https://www.reddit.com/r/wallpaper/hot.json?&limit=10&raw_json=1')
      const resultData = []
      result.data.data.children.map((post) => (
        resultData.push({
          preview:post.data.preview.images[0].resolutions[3].url,
          title:post.data.title,
          author:post.data.author,
          ups:post.data.ups
        })
      ))
      // result.data.data.children.forEach((child) => {
      //   resultData.push({
      //     preview:child.data.preview.images[0].resolutions[3].url
      //   });
      // });
      console.log(resultData)
      setWalls(resultData)
      }
      fetchItems()
  }, [])
  
  return (
    <div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {walls.map((post) =>
            <li className="bg-white rounded-lg shadow-xl overflow-hidden">
              <Card wall={post}/>
            </li>
          )}
        </ul>
    </div>
  );
}

export default Wallpapers;