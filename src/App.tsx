import React, {useEffect, useState} from 'react';
import unsplash from './api/unsplash';
import shuffle from "lodash/shuffle";

const App: React.FC = () => {

  let collectionNames: string[] = ['kids', 'food', 'travel', 'dogs', 'beer', 'guitar', 'books', 'video games'];
  collectionNames = shuffle(collectionNames);

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    unsplash
      .get('/search/collections', {
        params: {
          query: collectionNames.pop().toString(),
          per_page: 6//eslint-disable-line
        },
      })
      .then((res) => {
        setImages(res.data.results);
      })
      .then(() => {
        unsplash
          .get('/search/collections', {
            params: {
              query: collectionNames.pop().toString(),
              per_page: 6//eslint-disable-line
            },
          })
          .then((res) => {
            setImages(images => [...images, ...res.data.results]);
          })
      })
      .then(() => {
        unsplash
          .get('/search/collections', {
            params: {
              query: collectionNames.pop().toString(),
              per_page: 6 //eslint-disable-line
            },
          })
          .then((res) => {
            setIsLoading(false);
            setImages(images => [...images, ...res.data.results]);
          })
      })
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
