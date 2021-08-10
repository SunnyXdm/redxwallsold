import Wallpapers from "./Wallpapers";
import Header from "./Header";
import TgProfilePic from "./TgProfilePic"
import axios from "axios"
import { useState, useEffect } from 'react'

function App() {
  const [walls, setWalls] = useState([])
  const [id, setId] = useState('')
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get('https://www.reddit.com/r/wallpaper/hot.json?&limit=30&raw_json=1&after=t3_oz36l6')
      const resultData = []
      result.data.data.children.map((post) => (
        post.data.preview ? resultData.push({
          preview:post.data.preview.images[0].resolutions[3].url,
          title:post.data.title,
          author:post.data.author,
          ups:post.data.ups,
          id:post.data.id
        }) : ''
      ))
      // alternative method
      
      // result.data.data.children.forEach((post) => {
      //   post.data.preview ? resultData.push({
      //     preview:post.data.preview.images[0].resolutions[3].url,
      //     title:post.data.title,
      //     author:post.data.author,
      //     ups:post.data.ups
      //   }) : ''
      // });
      
      console.log(resultData)
      setWalls(resultData)
      }
      fetchItems()
  }, [])
  
  return (
    <div>
      <Header />
      <TgProfilePic />
      <div className="min-h-screen flex items-center">
        <div className="flex-1 mx-auto p-4">
          <Wallpapers data={walls} />
        </div>
      </div>
    </div>
  );
}

export default App;