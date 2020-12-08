import React, {useState, useEffect} from 'react'
import ImageItem from '../components/ImageItem'


export default function ImageListPage() {
  const [imageList, setImageList] = useState([])

  // function fetchImageList() {
  //   fetch("https://image-mock-data.firebaseio.com/images.json")
  //   .then( response => response.json() )
  //   .then( data => setImageList(data) )
  // }

  async function fetchImageList() {
    const response = await fetch("https://image-mock-data.firebaseio.com/images.json")
    const data = await response.json()
    setImageList(data)
  }

  useEffect( () => {
    fetchImageList()
  }, [])

  /*
    useEffect( ()=> {}, []  )
  */

  return (
    <>
      <h2>Instagram</h2>
      
      <div className="row">
        {imageList.map( (imageItem, index) => {
          return <ImageItem 
            imageIndex={index}
            key={imageItem.id} 
            imageItem={imageItem} 
          />
        } )}
      </div>
    </>
  )
}
