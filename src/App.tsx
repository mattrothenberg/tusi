import { Stage } from "./components/stage";
import { Basic } from "./variations/basic";

function App() {
  return (
    <div className="grid grid-cols-2 p-4">
      <div className="aspect-square relative">
        <Stage
          render={(size) => {
            return <Basic radius={size.width / 3} size={size} />;
          }}
        ></Stage>
      </div>
    </div>
  );
}

export default App;
