import React from 'react';
import {
  Container,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'

export default function Footer() {
  return (
    <Segment inverted vertical
      style={{
        backgroundColor :'rgb(236, 236, 236)',
      }}
    >
      <Container textAlign='center'>
        <Image centered size='mini' src='/qoala2.svg' />
        <List horizontal divided link size='large'>
          <List.Item as='a' href='https://www.instagram.com/mohmedak_/' target="_blank">
            <i className="instagram blue icon large"></i>
          </List.Item>
          <List.Item as='a' href='https://www.linkedin.com/in/mohmedak/' target="_blank">
            <i className="linkedin blue icon large"></i>
          </List.Item>
          <List.Item as='a' href='https://github.com/MohammedAK1991' target="_blank">
            <i className="github icon large"></i>
          </List.Item>
          <List.Item as='a' href='https://mohammedak1991.github.io/mohammedak.github.io/' target="_blank">
            <i className="user secret icon large"></i>
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}
