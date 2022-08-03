import { useState, useEffect } from "react";
import {CardImage} from './CardImage'
import {ImageCarousel} from './ImgCarousel'
import {SearchImages}from './searchImages'
import {getImages} from '../../service/api.js'
import {LoadSpinner} from '../layout/loadSpinner/LoadSpinner'

//redux 
//import {connect} from 'react-redux'
import { useSelector, useDispatch} from "react-redux";
//import { setImages as setImagesActions } from "../../redux/actions";//connecti
import { setImages} from "../../redux/actions";
//function Gallery({images, setImages})
export default function Gallery() {
  const [loading, setLoading] = useState(true);
  //const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');

  const images = useSelector(state => state.images);
  const dispatch = useDispatch();

  const searchImages = async () => {
    setLoading(true);
    const response = await getImages(search);
    console.log(response);
    //setImages(response);
    dispatch(setImages(response));
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
     // setImages(res)
      dispatch(setImages(res));
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

/**
 * 
 * funcion que recive el state y lo retorna en un objeto como prop
 */
const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

/**
 * 
 * connect: es una funcion que recibe un componente y retorna un componente
 */

const mapDipsatchToProps = (dispatch) => {
  return {
    setImages: (value) => dispatch(setImagesActions(value))
  }
}

//export default connect(mapStateToProps, mapDipsatchToProps)(Gallery);



{/*
          images.map(image => {
            return <CardImage key={image.id} image={image} />
          })*/
        }
        {/*[1,2,3,4,5,6,7,8,9,10].map((item, index) => (
          <CardImage key={index}/>
        ))*/}