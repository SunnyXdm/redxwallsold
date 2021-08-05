import Card from "./Card"
function Wallpapers() {
  return (
    <div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          <li className="bg-white rounded-lg shadow-xl overflow-hidden"><Card /></li>
          <li className="bg-white rounded-lg shadow-xl overflow-hidden"><Card /></li>
          <li className="bg-white rounded-lg shadow-xl overflow-hidden"><Card /></li>
          <li className="bg-white rounded-lg shadow-xl overflow-hidden"><Card /></li>
          <li className="bg-white rounded-lg shadow-xl overflow-hidden"><Card /></li>
          <li className="bg-white rounded-lg shadow-xl overflow-hidden"><Card /></li>
          <li className="bg-white rounded-lg shadow-xl overflow-hidden"><Card /></li>
          <li className="bg-white rounded-lg shadow-xl overflow-hidden"><Card /></li>
          <li className="bg-white rounded-lg shadow-xl overflow-hidden"><Card /></li>
          <li className="bg-white rounded-lg shadow-xl overflow-hidden"><Card /></li>
          <li className="bg-white rounded-lg shadow-xl overflow-hidden"><Card /></li>
          <li className="bg-white rounded-lg shadow-xl overflow-hidden"><Card /></li>
        </ul>
    </div>
  );
}

export default Wallpapers;