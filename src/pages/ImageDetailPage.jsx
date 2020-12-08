import React, {useEffect, useState} from 'react'
import ImageItem from '../components/ImageItem'

export default function ImageDetailPage(props) {
  const [imageData, setImageData] = useState(null)

  useEffect(() => {
    const id = props.match.params.id
    const url = `https://image-mock-data.firebaseio.com/images/${id}.json`
    fetch(url)
    .then(res => res.json())
    .then(data => setImageData(data))
  }, [])

  return (
    <div>
      <h2>Image Detail Page</h2>
      
      {imageData && (
        <ImageItem imageItem={imageData} />
      )}

      {!imageData && (
        <p>Loading</p>
      )}
    </div>
  )
}
