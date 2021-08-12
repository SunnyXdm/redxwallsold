import Wallpapers from "./Wallpapers";
import Header from "./Header";

function App() {
  return (
    <div className="bg-black">
      <div className="min-h-screen flex items-center">
        <div className="flex-1 mx-auto p-4">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          <Wallpapers />
          </ul>
        </div>
      </div>
      <div className="flex justify-center p-4">
        <div style={{borderTopColor:"transparent"}} className="w-16 h-16 border-8 border-purple-700 border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default App;