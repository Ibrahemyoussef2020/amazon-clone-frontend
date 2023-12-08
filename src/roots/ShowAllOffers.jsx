
import {Offers} from "../components";


const ShowAllOffers = () => {
    return (
        <div className="all-offers py-8 px-4  bg-[#eee]">
            <Offers  allOffers={true} />
            <Offers offers="offers_two"  allOffers={true} />
            <Offers offers="offers_three" allOffers={true}  />
        </div>
    )
}

export default ShowAllOffers