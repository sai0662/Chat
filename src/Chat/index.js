/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ImageBackground, Image, TextInput} from 'react-native';
import Back from 'react-native-vector-icons/AntDesign';
import Down from 'react-native-vector-icons/AntDesign';
import Send from 'react-native-vector-icons/Feather';

const Chat = () => {
  return (
    <View>
      <View
        style={{
          height: '99%',
          width: '100%',
          backgroundColor: 'white',
        }}>
        <ImageBackground
          source={require('../Assets/images/background.jpeg')}
          resizeMode="cover"
          style={{height: '70%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginLeft: 10,
            }}>
            <Back size={18} color="white" name="left" />
            <Text style={{color: 'white', fontSize: 18, marginLeft: 10}}>Carrier Session</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'white',
              height: 120,
              width: 80,
              marginLeft: 300,
              marginTop: -20,
              borderRadius: 10,
            }}>
            <Image
              source={require('../Assets/images/call.jpeg')}
              style={{height: 117, width: 76, borderRadius: 10}}
            />
          </View>
          <View
            style={{
              height: 100,
              flexDirection: 'row',
              marginTop: 100,
              marginLeft: 25,
            }}>
            <View
              style={{
                marginTop: 40,
                backgroundColor: 'white',
                width: 62,
                height: 25,
                marginLeft: 10,
                borderRadius: 13,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: 'red',
                  borderRadius: 10,
                  height: 10,
                  width: 10,
                  marginLeft: 5,
                }}
              />
              <Text style={{fontSize: 13, marginLeft: 3}}>18:34</Text>
            </View>

            <Image
              source={require('../Assets/images/callend.png')}
              style={{width: 60, height: 60, marginLeft: 80, marginTop: 30}}
            />

            <View
              style={{
                height: 36,
                width: 36,
                backgroundColor: 'white',
                marginTop: 37,
                marginLeft: 100,
                borderRadius: 20,
              }}>
              <Down
                name="down"
                color="black"
                size={22}
                style={{marginLeft: 6, marginTop: 6}}
              />
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: 'white',
            height: 460,
            marginTop: -190,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View
            style={{
              width: 30,
              borderColor: '#B0B0B0',
              borderWidth: 1,
              marginTop: 10,
              marginLeft: 190,
            }}
          />
          <View style={{marginLeft: 20, marginTop: 10}}>
            <Text style={{color: '#B0B0B0', fontSize: 12}}>Meeting Room</Text>
            <Text style={{fontSize: 20}}>Carrier Session</Text>
            <Text style={{color: '#8A2BE2'}}>2 participants online</Text>
          </View>
          <View style={{width: 400, height: 345, marginLeft: 6, marginTop: 6}}>
            <Text style={{marginLeft: 250, marginBottom: -20, fontSize: 12}}>
              Miles Tone
            </Text>
            <Image
              source={require('../Assets/images/call.jpeg')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 18,
                marginLeft: 340,
                marginTop: 4,
              }}
            />
            <View
              style={{
                width: 220,
                backgroundColor: '#8A2BE2',
                height: 45,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                marginLeft: 100,
                marginTop: -20,
              }}>
              <Text
                style={{color: 'white', alignSelf: 'center', marginTop: 10}}>
                Suspendisse consectetur
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{marginLeft: 50, marginBottom: -20, fontSize: 12}}>
                Hilary Ouse
              </Text>
              <Image
                source={require('../Assets/images/call.jpeg')}
                style={{width: 40, height: 40, borderRadius: 18, marginTop: 4}}
              />
              <View
                style={{
                  width: 220,
                  backgroundColor: '#B0B0B0',
                  height: 45,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopRightRadius: 10,
                  marginLeft: 50,
                  marginTop: -20,
                }}>
                <Text
                  style={{color: 'black', alignSelf: 'center', marginTop: 10}}>
                  Suspendisse consectetur
                </Text>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{marginLeft: 250, marginBottom: -20, fontSize: 12}}>
                Miles Tone
              </Text>
              <Image
                source={require('../Assets/images/call.jpeg')}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 18,
                  marginLeft: 340,
                  marginTop: 4,
                }}
              />
              <View
                style={{
                  width: 220,
                  backgroundColor: '#8A2BE2',
                  height: 45,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  marginLeft: 100,
                  marginTop: -20,
                }}>
                <Text
                  style={{color: 'white', alignSelf: 'center', marginTop: 10}}>
                  Suspendisse consectetur
                </Text>
              </View>
            </View>
            <View>
              <Text style={{color: '#D8D8D8', marginLeft: 18, marginTop: 20}}>
                Miles is typing
              </Text>
              <View>
                <TextInput
                  placeholder="Type something"
                  style={{
                    height: 45,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 25,
                    width: 360,
                    borderColor: '#F0F0F0',
                  }}
                />
                <View
                  style={{
                    width: 45,
                    height: 43,
                    borderRadius: 25,
                    backgroundColor: '#8A2BE2',
                    marginTop: -56,
                    marginLeft: 326,
                  }}>
                  <Send
                    color="white"
                    size={28}
                    name="send"
                    style={{marginLeft: 8, marginTop: 8}}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Chat;
