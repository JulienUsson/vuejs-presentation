/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import createTheme from 'spectacle-theme-nova/bundle';

import {
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  Slide,
  Table,
  TableHeader,
  TableHeaderItem,
  TableBody,
  TableRow,
  TableItem,
  Text,
} from "spectacle";

const theme = createTheme();

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck transition={['zoom', 'slide']} theme={theme} transitionDuration={500}>
        <Slide>
          <Heading>Vue.js</Heading>
          <Text>The Progressive JavaScript Framework</Text>
        </Slide>

        <Slide>
          <Heading size={2}>Trendings</Heading>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem></TableHeaderItem>
                <TableHeaderItem>Vue</TableHeaderItem>
                <TableHeaderItem>React</TableHeaderItem>
                <TableHeaderItem>Angular</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>Github stars</TableItem>
                <TableItem>71 717</TableItem>
                <TableItem>79 445</TableItem>
                <TableItem>29 169</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Github forks</TableItem>
                <TableItem>10 439</TableItem>
                <TableItem>15 061</TableItem>
                <TableItem>7 272</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Github contributors</TableItem>
                <TableItem>148</TableItem>
                <TableItem>1 110</TableItem>
                <TableItem>514</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide>
          <Heading size={2}>Informations</Heading>
          <List>
            <ListItem>Developed by Evan You</ListItem>
            <ListItem>The last version is 2.5.2 (13/10/2017)</ListItem>
            <ListItem>Progressive framework</ListItem>
            <ListItem>Component oriented</ListItem>
            <ListItem>Mix the best of React and Angular</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Vue-loader</Heading>
          <List>
            <ListItem>.vue files</ListItem>
            <ListItem>html, css and js in one place</ListItem>
            <ListItem>One component one file</ListItem>
            <ListItem>Scoped css</ListItem>
            <ListItem>many langages supported</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Directives</Heading>
          <List>
            <ListItem>Like in Angular</ListItem>
            <ListItem>v-for, v-if, v-else, v-show, ...</ListItem>
            <ListItem>You can create yours</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Server-side Rendering (SSR)</Heading>
          <List>
            <ListItem>Nuxt.js the Vue.js version of Next.js</ListItem>
            <ListItem>SSR with few efforts</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Native app</Heading>
          <List>
            <ListItem>NativeScript now support Vue.js</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Vuex</Heading>
          <List>
            <ListItem>Redux for Vue.js</ListItem>
            <ListItem>Redux, Redux-thunk and selector in one lib</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2}>Examples</Heading>
          <List>
            <ListItem><Link href='https://github.com/JulienUsson/vue-workshop'>Todo App</Link></ListItem>
            <ListItem><Link href='https://github.com/JulienUsson/terminal-resume'>Terminal CV</Link></ListItem>
          </List>
        </Slide>
      </Deck >
    );
  }
}