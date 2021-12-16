export default function ProductFilter() {
  return (
    <div className="my-10 font-serif text-sm text-gray-500">
      <div className="flex flex-row justify-between">
        <div className="flex gap-5">
          <button className="hover:text-black">ALL</button>
          <button className="hover:text-black">CHAIR</button>
          <button className="hover:text-black">TABLE</button>
          <button className="hover:text-black"> HOME DECOR</button>
          <button className="hover:text-black">LIGHTING</button>
        </div>
        <button className="hover:text-black">FILTER</button>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col items-start">
          <div className="flex flex-col my-3">
            <h4>SORT BY</h4>
            <div className="h-0.5 bg-gray-500 w-10"></div>
          </div>
          <button className="hover:text-black">Default</button>
          <button className="hover:text-black">Popularity</button>
          <button className="hover:text-black">Average Rating</button>
          <button className="hover:text-black">Newness</button>
          <button className="hover:text-black">Price:Low To High</button>
          <button className="hover:text-black">Price:High To Low</button>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-start">
            <div className="flex flex-col my-3">
              <h4>COLOR FILTERS</h4>
              <div className="h-0.5 bg-gray-500 w-10"></div>
            </div>
            <div className="flex flex-row space-x-3">
              <div className="bg-black h-5 w-5 rounded-full shadow-md"></div>
              <button className="hover:text-black">Black</button>
            </div>
            <div className="flex flex-row space-x-3">
              <div className="bg-yellow-900 h-5 w-5 rounded-full shadow-md"></div>
              <button className="hover:text-black">Brown</button>
            </div>
            <div className="flex flex-row space-x-3">
              <div className="bg-yellow-600 h-5 w-5 rounded-full shadow-md"></div>
              <button className="hover:text-black">Orange</button>
            </div>
            <div className="flex flex-row space-x-3">
              <div className="bg-red-600 h-5 w-5 rounded-full shadow-md"></div>
              <button className="hover:text-black">Red</button>
            </div>
            <div className="flex flex-row space-x-3">
              <div className="bg-yellow-400 h-5 w-5 rounded-full shadow-md"></div>
              <button className="hover:text-black">Yellow</button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-start">
              <div className="flex flex-col my-3">
                <h4>PRODUCT TAGS</h4>
                <div className="h-0.5 bg-gray-500 w-10"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-start">
                <div className="flex flex-col my-3">
                  <h4>FILTER BY PRICE</h4>
                  <div className="h-0.5 bg-gray-500 w-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
