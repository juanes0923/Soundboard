import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  CardItem,
  ListItem,
  List,
  Text
} from "native-base";

export default class Library extends Component {
    static navigationOptions ={
        title: "Library",
      };

      
  render() {
    return (
      <Container>
        <Content>
          <Text>***** Under development *****</Text>
        </Content>
      </Container>
    );
  }
}
