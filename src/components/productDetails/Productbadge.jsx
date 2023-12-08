

const Productbadge = ({badge}) => {

    if (badge === 'choice') {
        
        return <span className=' whitespace-nowrap text-sm bg-slate-800 text-white p-2'>
                Amazon's <span className=' text-orange-500'>Choice</span>
        </span>
    }

    else if (badge === 'seller') {
     
        return <span className=' whitespace-nowrap  text-sm bg-[#CC0C39] text-white p-2'>Best Seller products</span>
    }

    else if (badge === 'limited') {
     
        return <span className=' whitespace-nowrap text-sm bg-orange-500 text-white p-2'>Limited Time Deal</span>
    }

  return (
    <span className=' whitespace-nowrap text-sm bg-slate-800 text-white p-2'>Products Showen</span>
  )
}

export default Productbadge