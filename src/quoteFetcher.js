import React, { useState } from 'react';
import axios from 'axios';

// Conditional rendring based on props
function Quote({ quote, author }) {
  if (!quote || !author) {
    return <p>No quote available.</p>; 
  }

  return (
    <div>
      <p><strong>"{quote}"</strong></p>
      <p>- {author}</p>
    </div>
  );
}

function QuoteFetcher() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (err) {
      setError('Failed to fetch quote.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="QuoteFetcher">
      <button onClick={fetchQuote} className="fetch-button">
        Get a Quote
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {/* Pass quote and author as props to Quote component */}
      <Quote quote={quote} author={author} />
    </div>
  );
}

export default QuoteFetcher;
