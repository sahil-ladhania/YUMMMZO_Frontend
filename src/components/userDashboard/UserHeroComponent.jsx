import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function UserHeroComponent() {
  return (
    <div className="text-white mt-10 mb-10 flex flex-col justify-between h-auto">
      {/* Moat Heading Section */}
      <h1 className="text-7xl tracking-wide text-start roboto-regular mb-10">
        Satisfy Your Hunger in <span className="text-orange-400 font-bold roboto-regular">10 Minutes !</span>
      </h1>
      <p className="w-3/12 mb-10 text-neutral-400 text-sm roboto-regular">
          Enjoy fresh, delicious meals delivered to you in minutes, all through our easy to use app.
      </p>
      <div className="flex">
        <Link to="/user/about-us">
          <Button className='bg-orange-400 text-black mr-2 hover:bg-black hover:text-orange-400 roboto-regular'>About Us</Button>
        </Link>
        <Link to="/user/restaurants">
          <Button className='bg-black text-white border border-orange-400 hover:bg-black roboto-regular'>Order Now</Button>
        </Link>
      </div>
    </div>
  )
}

export default UserHeroComponent;