import React, { useRef, useState } from 'react'
import { Input, Menu, Segment, Sticky } from 'semantic-ui-react';
import ImageList from './ImageList';

type MainProps = {
  images: any;
  onSubmit: (term: string) => void;
  isLoading: boolean;
}

const Main: React.FC <MainProps> = ({ images, onSubmit, isLoading }) => {
  const contextRef = useRef();

  const [term, setTerm] = useState('');

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(term);
  }

  return (
    <div ref={contextRef} style={{ fontFamily: 'Avenir' }}>
      <Sticky context={contextRef}>
        <Menu
          stackable
          attached='top'
          tabular
          style={{ backgroundColor: '#83c5be', paddingTop: '0em' }}
        >
          <Menu.Item as='a' href="/">
            <img src="/qoala.svg" alt="logo" style={{width:'50px'}} />
            <span style={{ fontFamily: 'Avenir', marginLeft: '1.4vw', fontSize: '24px', fontWeight: 800, marginBottom:0 }}>
              Qoala Assignment
            </span>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <form onSubmit={onFormSubmit} >
                <Input
                  autoFocus
                  id="search"
                  action={{ icon: 'search', color:'orange', circular : true }}
                  style={{ maxWidth: '320px', minWidth: '320px'}}
                  value={term}
                  onChange={(event) => setTerm(event.target.value)}
                  placeholder="Search for collection..."
                />
              </form>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Sticky>
      <Segment attached='bottom'>
        <ImageList images={images} isLoading={isLoading} />
      </Segment>
    </div>
  )
}

export default Main;
