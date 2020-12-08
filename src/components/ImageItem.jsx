import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

import Comments from './Comments'

export default function ImageItem({imageItem, imageIndex}) {
  const [likes, setLikes] = useState(imageItem.likes)

  function handleOnClick() {
    setLikes(likes + 1)
  }

  useEffect(() => {
    console.log("Likes")
  }, [likes])

  return (
    <div className="col-md-6 mb-5">
      <img
        className="img-fluid" 
        src={imageItem.imageURL} 
        alt={imageItem.description}
      />
      {console.log(imageIndex)}
      
      {isNaN(imageIndex)
      ?
        <strong>{imageItem.title}</strong>
      :
      <Link to={`/instagram/${imageIndex}`}>
        <strong>{imageItem.title}</strong>
      </Link>
        
      }

      {/* {imageIndex || imageIndex === 0
      ?
        <Link to={`/instagram/${imageIndex}`}>
          <strong>{imageItem.title}</strong>
        </Link>
      :
        <strong>{imageItem.title}</strong>
      } */}

      <p>
        {imageItem.description}
      </p>
      <div onClick={handleOnClick} >
        ♥️ {likes}
      </div>
      <Comments />
    </div>
  )
}
