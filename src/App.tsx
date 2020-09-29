import React, {useEffect, useState} from 'react';
import unsplash from './api/unsplash';
import Footer from './components/Footer';
import Main from './components/Main';
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
          per_page: 6
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
              per_page: 6
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
              per_page: 6
            },
          })
          .then((res) => {
            setIsLoading(false);
            setImages(images => [...images, ...res.data.results]);
          })
      })
  }, []);//eslint-disable-line

  const onSubmit = (term:string) => {
    setIsLoading(true);
    unsplash
      .get('/search/collections', {
        params: {
          query: term.toString(),
          per_page: 15
        },
      })
      .then((res) => {
        setImages(res.data.results);
        setIsLoading(false);
        console.log(res.data.results);
      })
  }

  return (
    <div style={{ marginTop: 0 }}>
      <Main
        images={shuffle(images)}
        isLoading={isLoading}
        onSubmit={onSubmit}
      />
      <Footer/>
    </div>
  );
}

export default App;
