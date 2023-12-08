import { useSelector } from "react-redux";
  

const Layer = () => {
  
const {isOppend} = useSelector(state => state.aside)

  return (
    <div className={`layer absolute top-0 left-0 bottom-0 right-0 z-20 bg-[#111] opacity-75 ${isOppend ? 'block' : 'hidden'}`}></div>
  )
}

export default Layer