import React, { Component } from 'react';
import {
  PixelRatio,
} from 'react-native';

import {GiftedMessenger, Message, Composer, GiftedAvatar} from './react-native-gifted-messenger/GiftedMessenger';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
      ],
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        messages: [
          {key: Math.round(Math.random() * 100000), user: {
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
            id: 1,
          }, position: 'left', text: 'See you soon', time: new Date(Date.UTC(2016, 5, 11, 17, 30, 0))},


          {key: Math.round(Math.random() * 100000), user: {
            name: 'Farid Safi',
            id: 2,
          }, position: 'right', location: {longitude: -122.04120235, latitude: 37.33756603}, time: new Date(Date.UTC(2016, 5, 11, 17, 10, 0))},

          {key: Math.round(Math.random() * 100000), user: {
            name: 'Farid Safi',
            id: 2,
          }, position: 'right', text: 'I am here', time: new Date(Date.UTC(2016, 5, 11, 17, 0, 0))},

          {key: Math.round(Math.random() * 100000), user: {
            name: 'Club Mate',
            id: 3,
          }, position: 'left', text: 'Where are you?', time: new Date(Date.UTC(2016, 5, 11, 17, 0, 0))},


          // {key: Math.round(Math.random() * 100000), position: 'right', text: 'Message', time: new Date(Date.UTC(2016, 5, 5, 17, 0, 0))},
          // {key: Math.round(Math.random() * 100000), position: 'right', text: 'Message', time: new Date(Date.UTC(2016, 5, 4, 17, 0, 0))},
          // {key: Math.round(Math.random() * 100000), position: 'right', text: 'Message', time: new Date(Date.UTC(2016, 5, 3, 17, 0, 0))},
          // {key: Math.round(Math.random() * 100000), position: 'right', text: 'Message', time: new Date(Date.UTC(2016, 5, 2, 17, 0, 0))},
          // {key: Math.round(Math.random() * 100000), position: 'right', text: '1 june', time: new Date(Date.UTC(2016, 5, 1, 17, 0, 0))},
          // {key: Math.round(Math.random() * 100000), position: 'right', text: '20 may', time: new Date(Date.UTC(2016, 4, 20, 17, 0, 0))},
          {key: Math.round(Math.random() * 100000), position: 'left', text: 'Oldest Message', time: new Date(Date.UTC(2016, 4, 1, 17, 0, 0))},
        ]
      });
    }, 0); // simulating network

  }

  componentDidMount() {
    // setTimeout(() => {
    //   const messages = this.state.messages.slice(0);
    //   messages.shift();
    //
    //   this.setState({
    //     messages: messages,
    //   })
    // }, 2000);

    //
    // setTimeout(() => {
    //   this.setState({
    //     messages: GiftedMessenger.append(this.state.messages, {
    //       text: 'Hello Farid',
    //       time: new Date(),
    //       user: {
    //         id: 1,
    //         name: 'React Native',
    //         avatar: 'https://facebook.github.io/react/img/logo_og.png',
    //       },
    //       key: Math.round(Math.random() * 100000),
    //     }),
    //   });
    // }, 2000);
  }

  render() {
    return (
      <GiftedMessenger
        theme={{
          Composer: {
            container: {
              borderTopWidth: 1 / PixelRatio.get(),
              borderTopColor: '#E6E6E6',
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              alignItems: 'flex-end',
            },
            textInput: {
              flex: 1,
              // paddingLeft: 15,
              marginLeft: 10,
              fontSize: 17,
            },
            actionsButton: {
              justifyContent: 'center',
              alignItems: 'center',
              width: 30,
              height: 30,
              // borderRadius: 15,
              // borderWidth: 2,
              // borderColor: '#6699CC',
              marginLeft: 10,
              marginBottom: 12,
            },
            actionsText: {
              fontSize: 20,
              fontWeight: '700',
              lineHeight: 20,
              color: '#6699CC',
            },
            sendButton: {
              paddingLeft: 10,
              paddingRight: 10,
              marginBottom: 17,
            },
            sendButtonText: {
              color: '#6699CC',
              fontWeight: '600',
              fontSize: 17,
            },
          }
        }}
        messages={this.state.messages}
        onSend={this.onSend.bind(this)}
        renderAvatar={(props) => {
          return (
            <GiftedAvatar {...props} onPress={(user) => {
              console.log(user);
            }}/>
          );
        }}
        renderComposer={(props) => {
          return (
            <Composer {...props} actions={true}/>
          );
        }}
        renderMessage={(props) => {
          return (
            <Message {...props}
              stylesCommon={{
                bubble: {
                  // borderRadius: 30,
                }
              }}
              stylesLeft={{
                bubble: {
                  // backgroundColor: 'red',
                }
              }}
              stylesRight={{
                bubble: {
                  // backgroundColor: 'green',
                }
              }}
            />
          );
        }}
      />
    );
  }

  // TODO
  // onPressUrl
  // onPressEmail
  // onPressAccessory

  onSend(message) {
    console.log(message);

    this.setState({
      messages: GiftedMessenger.append(this.state.messages, {
        ...message,
        time: new Date(),
        user: {
          name: 'Developer',
          // avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
        key: Math.round(Math.random() * 100000),
      }),
    });
  }
}

export default App;