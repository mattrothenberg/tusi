import { Stage } from "./components/stage";
import { Basic } from "./variations/basic";
import { Dots } from "./variations/dots";

function App() {
  return (
    <div className="grid gap-8 grid-cols-2 p-4 max-w-3xl mx-auto">
      <div className="aspect-square relative">
        <Stage
          render={(size) => {
            return <Basic radius={size.width / 3} size={size} />;
          }}
        ></Stage>
      </div>
      <div className="aspect-square relative">
        <Stage
          render={(size) => {
            return <Dots radius={size.width / 3} size={size} />;
          }}
        ></Stage>
      </div>
    </div>
  );
}

export default App;
