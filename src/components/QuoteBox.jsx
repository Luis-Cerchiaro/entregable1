import "./styles/QuoteBox.css"

const QuoteBox = ({ handleChangeQuote, quote }) => {
  return (
    <section className="quoteBox">
      <h1>Fortune Cookie</h1>

      <section>
        <button onClick = {handleChangeQuote}>Try Luck</button>
        <article>
          <p>{quote.phrase}</p>
        </article>
      </section>

      <footer>
        <h4>{quote.author}</h4>
      </footer>
    </section>
  );
};

export default QuoteBox