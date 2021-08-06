import Wallpapers from "./Wallpapers";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center">
        <div className="flex-1 mx-auto p-4">
          <Wallpapers />
        </div>
      </div>
    </div>
  );
}

export default App;