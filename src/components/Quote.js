import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'bY6NsfYwO/MyoayoGl44OQ==MMB8EQDEQ73HAd48';
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=happiness&limit=1';

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setQuote(data[0].quote);
        } else {
          throw new Error('No quotes found for the specified category.');
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div>
      <h2>Random Quote:</h2>
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
