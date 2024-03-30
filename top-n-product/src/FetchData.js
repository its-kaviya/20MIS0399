import React, { useState, useEffect } from 'react';

function FetchDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://20.244.56.144/test/companies/AMZ/categories/Laptop/product?top=10&minPrice=1&maxPrice=10000',{headers:{'Authorization':'Bearer'+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzExNzk2NzUzLCJpYXQiOjE3MTE3OTY0NTMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE5NjUzOTg3LWRlMDctNGI5Zi1hMDAyLWEyMzE3OTI0MTdkZSIsInN1YiI6Iml0c2thdml5YWtyaXNoQGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiMTk2NTM5ODctZGUwNy00YjlmLWEwMDItYTIzMTc5MjQxN2RlIiwiY2xpZW50U2VjcmV0IjoiaVllVmtKYUZMVkRMbW11SSIsIm93bmVyTmFtZSI6Ikthdml5YSIsIm93bmVyRW1haWwiOiJpdHNrYXZpeWFrcmlzaEBnbWFpbC5jb20iLCJyb2xsTm8iOiIyME1JUzAzOTkifQ.uwLP4WXcJjRWk5XB7QPMCDKjyTatwhtNbovSdGmULTY'}});
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div>
      <h1>Here is the fetched data:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchDataComponent;
