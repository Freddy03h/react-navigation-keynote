// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Code,
  Link,
  S,
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import StackDraw from '../src/components/StackDraw'
import TabDraw from '../src/components/TabDraw'

// Import theme
import createTheme from "./theme";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  freddy: require("../assets/freddy.jpg"),
  twitter: require("../assets/twitter.png"),
  mangacollecSiteHome: require("../assets/mangacollec-site-home.png"),
  mangacollecSiteVolume: require("../assets/mangacollec-site-volume.png"),
  mangacollecAppHome: require("../assets/mangacollec-app-home.jpg"),
  mangacollecAppVolume: require("../assets/mangacollec-app-volume.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

const screenImageStyle = {
  margin: 30,
}

const screenImageStyleAndroid = {
  margin: 30,
  width: 720/2.8,
}

const screenImageStyleIos = {
  margin: 30,
  width: 886/3.6,
}

const screenImageStyleIosBig = {
  margin: 0,
  width: 886/2.8,
}

const screenImageStyleIosContent = {
  margin: '0 30px',
  width: 886/3,
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        progress="bar"
        controls={false}
        theme={theme}
      >
        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            React Navigation
          </Heading>
          <Heading size={1} fit caps textColor="secondary">
            Navigation for React Native
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} fit caps textColor="secondary">
            Why not using React Router ?
          </Heading>
          <Text textColor="tertiary" margin="3.5rem auto 0">
            Navigation logic is different on Mobile App 📱
          </Text>
        </Slide>

        <Slide bgColor="tertiary">
          <img className="content" src={images.mangacollecSiteHome} />
        </Slide>

        <Slide bgColor="tertiary">
          <img className="content" src={images.mangacollecSiteVolume} />
        </Slide>

        <Slide bgColor="tertiary">
          <img className="content" style={screenImageStyleIosContent} src={images.mangacollecAppHome} />
          <img className="content" style={screenImageStyleIosContent} src={images.mangacollecAppVolume} />
        </Slide>

        <Slide>
          <Heading size={3} caps textColor="secondary">
            Other solutions
          </Heading>
          <List textColor="tertiary" margin="1em 0px 1em 13%">
            <ListItem>NavigatorIOS : <S type="italic" textColor="secondary">wrapper around <Code>UINavigationController</Code></S></ListItem>
            <ListItem>Navigator : <S type="italic" textColor="secondary">deprecated since 0.44.0</S></ListItem>
            <ListItem>NavigatorExperimental : <S type="italic" textColor="secondary">experimental JS based solution</S></ListItem>
            <ListItem>ExNavigation : <S type="italic" textColor="secondary">project in maintenance mode</S></ListItem>
            <ListItem>react-native-router-flux : <S type="italic" textColor="secondary">v4 based on React-Navigation</S></ListItem>
            <ListItem>native-navigation : <S type="italic" textColor="secondary">Airbnb native solution</S></ListItem>
            <ListItem>react-native-navigation : <S type="italic" textColor="secondary">Wix native solution</S></ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary">
            StackNavigator
          </Heading>
          <Text textColor="tertiary" textSize={40} margin="1rem auto 0">
            Renders one screen at a time and provides transitions between screens. When a new screen is opened it is placed on top of the stack.
          </Text>
          <div>
            <video src={require("file-loader!../assets/stacknavigator-ios.MP4")} style={screenImageStyleIos} muted autoPlay loop playsInline></video>
            <video src={require("file-loader!../assets/stacknavigator-android.mp4")} style={screenImageStyleAndroid} muted autoPlay loop playsInline></video>
          </div>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/stacknavigator.example")}
          ranges={[
            { loc: [0, 138], title: "StackNavigator" },
            { loc: [0, 1], note: "import StackNavigator" },
            { loc: [107, 108], note: "Create our StackNavigator" },
            { loc: [108, 119], note: "RouteConfigs" },
            { loc: [119, 129], note: "StackNavigatorConfig" },
            { loc: [131, 138] },
            { loc: [2, 6], note: "static navigationOptions" },
            { loc: [7, 13], note: "navigation props" },
            { loc: [28, 35], note: "navigationOptions can be a function"  },
            { loc: [36, 39], note: "goBack" },
            { loc: [44, 51], note: "params" },
            { loc: [66, 82] },
            { loc: [87, 96] },
          ]}
        />

        <Slide>
          <Heading size={2} textColor="secondary">
            TabNavigator
          </Heading>
          <Text textColor="tertiary" textSize={40} margin="1rem auto 0">
            Renders a tab bar that lets the user switch between several screens.
          </Text>
          <div>
            <video src={require("file-loader!../assets/tabnavigator-ios.MP4")} style={screenImageStyleIos} muted autoPlay loop playsInline></video>
            <video src={require("file-loader!../assets/tabnavigator-android.mp4")} style={screenImageStyleAndroid} muted autoPlay loop playsInline></video>
          </div>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/tabnavigator.example")}
          ranges={[
            { loc: [0, 88], title: "TabNavigator" },
            { loc: [65, 80], note: "Create our TabNavigator" },
            { loc: [3, 13] },
          ]}
        />

        <Slide>
          <Heading size={2} textColor="secondary">
            DrawerNavigator
          </Heading>
          <Text textColor="tertiary" textSize={40} margin="1rem auto 0">
            Provides a drawer that slides in from the left of the screen.
          </Text>
          <div>
            <video src={require("file-loader!../assets/drawernavigator-ios.MP4")} style={screenImageStyleIos} muted autoPlay loop playsInline></video>
            <video src={require("file-loader!../assets/drawernavigator-android.mp4")} style={screenImageStyleAndroid} muted autoPlay loop playsInline></video>
          </div>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/drawer.example")}
          ranges={[
            { loc: [0, 86], title: "DrawerNavigator" },
            { loc: [65, 78], note: "Create our DrawerNavigator" },
            { loc: [2, 13] },
          ]}
        />

        <Slide bgColor="secondary">
          <Heading caps size={1} textColor="tertiary" textAlign="left" margin="0.5em auto">
            <div style={{display: 'inline-flex', width: '0.74em', height: '0.74em', marginRight: '0.5em'}}>
              <svg style={{margin: 'auto', fill: 'white', width: '100%', transformOrigin: 'center center', transform: 'scale(1.22)'}} x="0px" y="0px" viewBox="0 0 54.95 53.3" enable-background="new 0 0 54.95 53.3"><path d="M45.3,21.12l9.66-5.52L27.48,0L0,15.6l9.66,5.52L0,26.6l9.66,5.52L0,37.6l27.48,15.7l27.48-15.7l-9.66-5.48  l9.66-5.52L45.3,21.12z M27.48,2.3l23.44,13.31L27.48,29L4.04,15.61L27.48,2.3z M11.67,22.27l15.8,9.03l15.8-9.03l7.63,4.33  L27.48,40L4.04,26.61L11.67,22.27z M50.91,37.61L27.48,51L4.04,37.61l7.63-4.33l15.8,9.03l15.8-9.03L50.91,37.61z"/></svg>
            </div>
            Stack
          </Heading>

          <Heading caps size={1} textColor="tertiary" textAlign="left" margin="0.5em auto">
            <div style={{display: 'inline-flex', width: '0.74em', height: '0.74em', marginRight: '0.5em'}}>
              <svg style={{margin: 'auto', fill: 'white', width: '100%', transformOrigin: 'center 0', transform: 'scale(1.3)'}} x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 48" ><path d="M53,14V7h-7V0H0v34h7v7h7v7h46V14H53z M2,32V2h42v5H7v25H2z M9,39v-5V9h37h5v5H14v25H9z M58,46H16v-5V16h37  h5V46z"/></svg>
            </div>
            Tabs
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Nesting Navigators
          </Heading>
          <Text textColor="tertiary" margin="3.5rem auto 0">
            Compose Stack and Tab Navigators to build your app navigation
          </Text>
        </Slide>

        <Slide bgColor="tertiary">
          <TabDraw minWidth={260} minHeight={390} data={[{title: 'MyStack', stack: [{title: 'Screen A'}, {title: 'Screen B'}]}, {title: 'Screen C'}]} />
        </Slide>

        <Slide className="slide-no-padding">
          <video src={require("file-loader!../assets/nested1-ios.MP4")} style={screenImageStyleIosBig} muted autoPlay loop playsInline></video>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/nested1.example")}
          ranges={[
            { loc: [0, 115], title: "StackNavigator in TabNavigator" },
            { loc: [77, 92] },
            { loc: [93, 107] },
            { loc: [95, 96], note: "use StackNavigator as a TabNavigator view" },
            { loc: [108, 115] },
          ]}
        />

        <Slide bgColor="tertiary">
          <StackDraw minWidth={260} minHeight={390} data={[{title: 'MyTab', tabs: [{title: 'Screen A'}, {title: 'Screen C'}]}, {title: 'Screen B'}]} />
        </Slide>

        <Slide className="slide-no-padding">
          <video src={require("file-loader!../assets/nested2-ios.MP4")} style={screenImageStyleIosBig} muted autoPlay loop playsInline></video>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/nested2.example")}
          ranges={[
            { loc: [0, 115], title: "TabNavigator in StackNavigator" },
            { loc: [77, 91] },
            { loc: [92, 107] },
            { loc: [94, 95], note: "use TabNavigator as a StackNavigator view" },
            { loc: [108, 115] },
          ]}
        />

        <Slide>
          <Heading size={2} caps textColor="secondary">
            Modal use case
          </Heading>
          <Text textColor="tertiary" margin="3.5rem auto 0">
            Use a StackNavigator at the root of your app
          </Text>
          <Text textColor="tertiary" margin="3.5rem auto 0">
            It's better than using <Code>&lt;Modal/&gt;</Code>
          </Text>
        </Slide>

        <Slide bgColor="tertiary">
          <StackDraw data={[
            {title: 'MyTab', tabs: [
              {title: 'MyStack', stack: [
                {title: 'Screen A'},
                {title: 'Screen B'}
              ]},
              {title: 'Screen C'},
            ]},
            {title: 'Modal'},
          ]} />
        </Slide>

        <Slide className="slide-no-padding">
          <video src={require("file-loader!../assets/modal-ios.MP4")} style={screenImageStyleIosBig} muted autoPlay loop playsInline></video>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/modal.example")}
          ranges={[
            { loc: [0, 154], title: "Modal" },
            { loc: [91, 106] },
            { loc: [107, 131] },
            { loc: [111, 123], note: "navigationOptions" },
            { loc: [136, 146] },
          ]}
        />

        <Slide bgColor="tertiary">
          <StackDraw minWidth={100} minHeight={150} data={[
            {title: 'AppTab', tabs: [
              {title: 'AppStack', stack: [
                {title: 'News'},
                {title: 'Volume'},
                {title: 'Edition'},
              ]},
              {title: 'AppStack', stack: [
                {title: 'Planning'},
                {title: 'Volume'},
                {title: 'Serie'},
              ]},
              {title: 'AppStack', stack: [
                {title: 'Catalogue', tabs:[
                  {title: 'Series'},
                  {title: 'Authors'},
                  {title: 'Publishers'},
                ]},
                {title: 'Serie'},
                {title: 'Author'},
                {title: 'Publisher'},
              ]},
            ]},
            {title: 'Modal Login'},
            {title: 'Modal Account'},
          ]} />
        </Slide>

        <Slide>
          <Heading size={3} caps textColor="secondary">
            Navigator
          </Heading>
          <List textColor="tertiary" margin="1em 0px 1em 31%">
            <ListItem>View</ListItem>
            <ListItem>Router</ListItem>
            <ListItem style={{listStyle: 'none'}}>
              <List textColor="tertiary">
                <ListItem>State</ListItem>
                <ListItem>Action</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../src/examples/action.example")}
          ranges={[
            { loc: [0, 30], title: "State and Action" },
            { loc: [0, 2] },
            { loc: [3, 7] },
            { loc: [10, 12] },
            { loc: [13, 29] },
          ]}
        />

        <Slide>
          <Heading size={3} caps textColor="secondary">
            Other things
          </Heading>
          <List textColor="tertiary" margin="1em 0px 1em 20%">
            <ListItem>Declare path for deep linking</ListItem>
            <ListItem>iPhone X support with <Code>&lt;SafeAreaView&gt;</Code></ListItem>
            <ListItem>Build your own Navigator</ListItem>
          </List>
        </Slide>

        {/*<Slide>
          <Heading size={4} caps textColor="secondary" margin="-4rem auto 0.5rem">
            References
          </Heading>

          <Text textAlign="left">Tools</Text>
          <List textColor="tertiary" margin="0px 0px 1em">
            <ListItem><Link href="https://reactnavigation.org/" target="_blank">React Navigation</Link></ListItem>
          </List>

        </Slide>*/}

        <Slide>
          <Heading size={1} caps textColor="tertiary">
            Merci
          </Heading>
          <Heading size={5} caps textColor="secondary" margin="3em 0 0">
            <Link href="https://twitter.com/HarrisFreddy" textColor="secondary">
              <img src={images.twitter} style={{border: 'none', boxShadow: 'none', verticalAlign: 'sub', height: 60, margin: '0 15px 0 0'}} />
              @harrisfreddy
            </Link>
          </Heading>
          <Heading size={6} caps textColor="tertiary" margin="1em 0 0.5em">
            Freelance React Native & React.js
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
