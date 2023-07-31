import { useState } from "react";
import "./App.css";
import db from "./db/famousPhrases.json";
import { getRandom } from "./utils/random";
import QuoteBox from "./components/QuoteBox";

const listBg = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  const [quote, setQuote] = useState(getRandom(db));
  const [currentBg, setCurrentBg] = useState(getRandom(listBg))

  const handleChangeQuote = () => {
    setQuote(getRandom(db));
    setCurrentBg(getRandom(listBg))
  };

  return (
    <main className = {`App ${currentBg}`}>
      <QuoteBox handleChangeQuote = {handleChangeQuote} quote = {quote} />
    </main>
  );
}

export default App;
