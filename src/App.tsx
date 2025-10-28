import "./App.css";
import Button from "./components/Button";
import Text from "./components/text";

function App() {
  const isTrue:boolean= false
  return (
    <>
      {isTrue ? (
        <Button value="click" />
      ) : (
        <div>
          <Button value="click" />
          <Text />
        </div>
      )}
    </>
  );
}

export default App;
