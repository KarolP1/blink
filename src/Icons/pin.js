import * as React from 'react';
import {Image, View} from 'react-native';
import Svg, {Mask, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const SVG = props => (
  <Svg
    preserveAspectRatio="xMaxYMid meet"
    viewBox="0 0 50 50"
    style={{width: 'inherit', height: 'inherit'}}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Mask
      id="b"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={36}
      height={36}
      fill="#000">
      <Path fill="#fff" d="M0 0h36v46H0z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.333 17.563c0 5.48-2.679 10.34-6.806 13.354-3.136 2.348-7.555 6.051-8.574 12.012-.108.635-.642 1.128-1.286 1.128-.645 0-1.178-.493-1.287-1.128-1.018-5.96-5.438-9.664-8.573-12.012C3.679 27.902 1 23.043 1 17.562 1 8.415 8.462 1 17.667 1c9.204 0 16.666 7.415 16.666 16.563Z"
      />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.333 17.563c0 5.48-2.679 10.34-6.806 13.354-3.136 2.348-7.555 6.051-8.574 12.012-.108.635-.642 1.128-1.286 1.128-.645 0-1.178-.493-1.287-1.128-1.018-5.96-5.438-9.664-8.573-12.012C3.679 27.902 1 23.043 1 17.562 1 8.415 8.462 1 17.667 1c9.204 0 16.666 7.415 16.666 16.563Z"
      fill={`${props.color ? props.color : 'rgb(25,25,25)'}`}
    />
    <Path
      d="m27.526 30.917-.59-.807-.009.007.6.8ZM18.953 42.93l.986.168-.986-.168Zm-2.573 0-.986.168.986-.168ZM7.807 30.917l.6-.8-.01-.007-.59.807Zm20.31.808c4.372-3.194 7.216-8.347 7.216-14.163h-2c0 5.147-2.514 9.712-6.396 12.548l1.18 1.615Zm-8.178 11.372c.947-5.543 5.064-9.041 8.187-11.38l-1.199-1.6c-3.148 2.357-7.87 6.266-8.96 12.643l1.972.337Zm-2.272 1.96c1.179 0 2.09-.892 2.272-1.96l-1.971-.337c-.035.203-.19.297-.301.297v2Zm-2.273-1.96c.183 1.068 1.094 1.96 2.273 1.96v-2c-.111 0-.267-.094-.301-.297l-1.972.337Zm-8.187-11.38c3.123 2.339 7.24 5.837 8.187 11.38l1.972-.337c-1.09-6.377-5.811-10.286-8.96-12.643l-1.199 1.6ZM0 17.564c0 5.815 2.844 10.968 7.217 14.162l1.18-1.615C4.514 27.274 2 22.71 2 17.563H0ZM17.667 0C7.916 0 0 7.857 0 17.563h2C2 8.973 9.008 2 17.667 2V0Zm17.666 17.563C35.333 7.857 27.418 0 17.667 0v2c8.658 0 15.666 6.973 15.666 15.563h2Z"
      fill="url(#a)"
      mask="url(#b)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={17.667}
        y1={1}
        x2={17.667}
        y2={44.057}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.35} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const PinWitLogo = props => {
  const type = props.type;
  switch (type) {
    case 'pin':
      return (
        <View style={{position: 'relative'}}>
          <SVG
            color={props.color}
            size={props.size}
            style={{width: props.size, height: props.size}}
          />
          <Image
            source={require('../assets/BX.png')}
            style={{
              height: 25,
              width: 25,
              position: 'absolute',
              top: 4,
              left: 3,
            }}
          />
        </View>
      );
    case 'ProfileMan':
      return (
        <View style={{position: 'relative', overflow: 'hidden'}}>
          <SVG
            color={props.color}
            size={props.size}
            style={{width: props.size, height: props.size}}
          />
          <Image
            source={require('../assets/googlemaps/profilePics/man.png')}
            style={{
              height: 20,
              width: 20,
              position: 'absolute',
              top: 5,
              left: 5,
              borderRadius: 20,
              zIndex: 1,
            }}
          />
        </View>
      );
    case 'ProfileWoman':
      return (
        <View style={{position: 'relative', overflow: 'hidden'}}>
          <SVG
            color={props.color}
            size={props.size}
            style={{width: props.size, height: props.size}}
          />
          <Image
            source={require('../assets/googlemaps/profilePics/woman.png')}
            style={{
              height: 20,
              width: 20,
              position: 'absolute',
              top: 5,
              left: 5,
              borderRadius: 20,
              zIndex: 1,
            }}
          />
        </View>
      );
    default:
      return (
        <View style={{position: 'relative'}}>
          <SVG
            color={props.color}
            size={props.size}
            style={{width: props.size, height: props.size}}
          />
        </View>
      );
  }
};

export default PinWitLogo;
