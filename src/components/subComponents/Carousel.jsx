import {useState} from 'react'
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"


const Carousel = ({children: src}) => {

  const [ curr, setCurr ] = useState(0)

  return (
		<div className="overflow-hidden relative">

      <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${ curr * 100 }%)`}}>{src}</div>
      
        <div className="absolute inset-0 flex items-center justify-between  p-4 index-4">
					<button className="p-2 rounded-full shadow bg-gray-100 text-gray-800 hover:bg-white"
					onClick={() => setCurr((curr) => (curr === 0 ? src.length -1 : curr - 1))}>
						<BsChevronLeft size={30} />
					</button>
					<button className="p-2 rounded-full shadow bg-gray-100 text-gray-800 hover:bg-white"
					onClick={() => setCurr((curr) => (curr === src.length - 1 ? 0 : curr + 1))}>
						<BsChevronRight size={30} />
					</button>
				</div>
      </div>
  )
}

export default Carousel