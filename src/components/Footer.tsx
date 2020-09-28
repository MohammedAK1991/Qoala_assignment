import React from 'react';
import {
  Container,
  List,
  Segment,
} from 'semantic-ui-react'

export default function Footer() {
  return (
    <Segment inverted vertical
      style={{
        backgroundColor :'#e85d04',
      }}
    >
      <Container textAlign='center'>
        <h4 style={{color:'black'}}>Follow Me!</h4>
        <List horizontal divided link size='large'>
          <List.Item as='a' href='https://www.instagram.com/mohmedak_/' target="_blank">
            <i className="instagram icon big"></i>
          </List.Item>
          <List.Item as='a' href='https://www.linkedin.com/in/mohmedak/' target="_blank">
            <i className="linkedin icon big"></i>
          </List.Item>
          <List.Item as='a' href='https://github.com/MohammedAK1991' target="_blank">
            <i className="github icon big"></i>
          </List.Item>
          <List.Item as='a' href='https://mohammedak1991.github.io/mohammedak.github.io/' target="_blank">
            <i className="user secret icon big"></i>
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}
