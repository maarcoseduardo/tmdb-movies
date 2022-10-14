import { BsSearch } from "react-icons/bs";
import { HeartStraight, ShoppingCart } from "phosphor-react";
export function Header() {
  return (
    <>
      <header className="bg-green-light-200">
        <div className="max-w-7xl w-full h-28 mx-auto px-4 flex flex-wrap sm:h-20 justify-between items-center">
          <div className="">Movies</div>
          <div className="flex items-center w-96 px-2 bg-[#fff] rounded">
            <input
              className="w-full h-10 px-2 border-none focus:outline-none"
              type="text"
              placeholder="Pesquisa"
            />
            <BsSearch size="18" />
          </div>
          <nav className="flex justify-between w-24">
            <div>
              <HeartStraight size={32} color="white" />
            </div>
            <div>
              <ShoppingCart size={32} color="white" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
