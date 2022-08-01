import { useState, useEffect } from "react";
import {CardImage} from './CardImage'
import {ImageCarousel} from './ImgCarousel'
import {SearchImages}from './searchImages'
import {getImages} from '../../service/api.js'
import {LoadSpinner} from '../layout/loadSpinner/LoadSpinner'

export function Gallery(){
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');

  const searchImages = async () => {
    setLoading(true);
    const response = await getImages(search);
    console.log(response);
    setImages(response);
    setLoading(false);
    setSearch('');
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    getImages().then(res => {
      setLoading(true);
      console.log(res);
      setImages(res)
      setLoading(false);
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="bg-slate-800 text-white">
      <h1 className="text-2xl font-bold">MI GALERIA</h1>
      <div className="flex flex-wrap justify-center mt-10">
      <ImageCarousel />
      </div>
      <div className="flex flex-wrap justify-center mt-10">
      <SearchImages searchImages={searchImages} handleSearch={handleSearch} valueSearch={search}/>
      </div>
      <div className="grid lg:grid-cols-4 mt-10">
        {loading ? (
          <LoadSpinner />) : (
          images.map(image => (
            <CardImage key={image.id} image={image} />
          ))
        )}
      </div>
    </div>
  )
}

{/*
          images.map(image => {
            return <CardImage key={image.id} image={image} />
          })*/
        }
        {/*[1,2,3,4,5,6,7,8,9,10].map((item, index) => (
          <CardImage key={index}/>
        ))*/}