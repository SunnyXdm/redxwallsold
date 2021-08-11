import Wallpapers from "./Wallpapers";
import Header from "./Header";
import TgProfilePic from "./TgProfilePic"
import axios from "axios"
import { useState, useEffect} from 'react'

function App() {
  const [walls, setWalls] = useState([])
  const [id, setId] = useState('')
  const [loadMoreId, setLoadMoreId] = useState('')
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get('https://www.reddit.com/r/wallpaper/hot.json?&limit=30&raw_json=1')
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
      setId(resultData[resultData.length-1].id)
      // alternative method
      
      // result.data.data.children.forEach((post) => {
      //   post.data.preview ? resultData.push({
      //     preview:post.data.preview.images[0].resolutions[3].url,
      //     title:post.data.title,
      //     author:post.data.author,
      //     ups:post.data.ups
      //   }) : ''
      // });
      
      setWalls(resultData)
      }
      fetchItems()
  }, [])
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`https://www.reddit.com/r/wallpaper/hot.json?&limit=30&raw_json=1&after=t3_${loadMoreId}`)
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
      setId(resultData[resultData.length-1].id)
      setWalls([...walls, ...resultData])
      console.log(walls)
      }
      fetchItems()
  }, [loadMoreId])
  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center">
        <div className="flex-1 mx-auto p-4">
          <Wallpapers data={walls} loadMoreId={setLoadMoreId} id={id}/>
        </div>
      </div>
    </div>
  );
}

export default App;