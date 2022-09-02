import ReactNative, {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React, {ReactNode} from 'react';

const ImageBg = ({children}: {children: ReactNode}) => {
  let ScreenHeight = Dimensions.get('window').height;
  function _scrollToInput(reactNode: any) {
    // Add a 'scroll' ref to your ScrollView
    reactNode.scroll.props.scrollToFocusedInput(reactNode);
  }
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      enabled
      renderToHardwareTextureAndroid>
      <ScrollView
        keyboardDismissMode="on-drag"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ImageBg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
