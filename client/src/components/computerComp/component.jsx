import {useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {setComponents} from '../../redux/actions';

export default function Components() {
 // const [components,setComponents] = useState([]);
  const dispatch = useDispatch();
  const components = useSelector(state => state.components);
  const getComponents = async () => {
    const result = await fetch('http://localhost:8000/api/v1/keyboard/')
    const data = await result.json();
    //setComponents(data);
    dispatch(setComponents(data));
    console.log(data);
  }
  useEffect(() => {
    getComponents();
  }, []);
  return (
    <div className="h-screen bg-slate-800 text-white flex flex-col items-center justify-center">
      
      <form className="bg-slate-50 p-10">
        <h1 className="text-2xl font-bold my-2 text-black">Componentes</h1>
        <input
          name="message"
          type="text"
          placeholder="datos"
          className="border-2 border-zinc-500 p-2 w-full text-black"
          autoFocus
        />

        <ul className="h-80 overflow-y-auto">
          {components.map((data, index) => (
            <li
              key={index}
              className="border-2 border-zinc-500 p-2 w-full text-black"
            >
              {data.type_component}-{data.description}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}