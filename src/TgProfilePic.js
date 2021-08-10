import axios from "axios"
import { useState, useEffect } from 'react'

function TgProfilePic() {
  const user_id = 1823176896
  const bot_token = "967655852:AAGyGxT1VzeR7pKBh6WhkS-gWZKTV22JksI"
  const [profile, setProfile] = useState('')
  
  useEffect(() => {
    const fetchProfile = async () => {
      const profiles = await axios.get(`https://api.telegram.org/bot${bot_token}/getUserProfilePhotos?user_id=${user_id}`)
      const file_path = await axios.get(`https://api.telegram.org/bot${bot_token}/getFile?file_id=${profiles.data.result.photos[0][2].file_id}`)
      setProfile(`https://api.telegram.org/file/bot${bot_token}/${file_path.data.result.file_path}`)
    }
    fetchProfile()
  }, [])
  
  return (
    <div>
      <img className="" src={profile} alt=""></img>
    </div>
  );
}

export default TgProfilePic;