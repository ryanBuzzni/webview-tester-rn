import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import WebView from 'react-native-webview';

export default function WebviewScreen() {
  useEffect(() => {
    request(PERMISSIONS.IOS.SPEECH_RECOGNITION).then(result => {
      // Alert.alert(result);
      console.log(result);
    });
    request(PERMISSIONS.IOS.MICROPHONE).then(result => {
      // Alert.alert(result);
      console.log(result);
    });

    request(PERMISSIONS.ANDROID.RECORD_AUDIO).then(result => {
      // Alert.alert(result);
      console.log(result);
    });
  }, []);

  // test33@buzzni.com
  // 431ffefc60f894c27a46d47d65c4dcb627c9c8c1
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        key={3}
        style={styles.container}
        // source={{uri: 'http://192.168.2.7:3000/chat?d_key=test'}}
        // source={{uri: 'http://127.0.0.1:3000/chat?d_key=test'}}
        source={{
          // uri: 'https://ba80-222-112-203-51.ngrok-free.app/chat?d_key=test&is_debugging=true',
          uri: 'https://oksoon-stage.buzzni.com/chat?d_key=test&is_debugging=true',
        }}
        // originWhitelist={['*']}
        // source={{uri: 'https://oksoon.buzzni.com/chat?d_key=test'}}
        // useWebView2
        // webviewDebuggingEnabled
        // javaScriptCanOpenWindowsAutomatically
        // mediaPlaybackRequiresUserAction
        // remoteDebuggingEnabled
        // allowsInlineMediaPlayback
        // allowsAirPlayForMediaPlayback
        // mediaCapturePermissionGrantType="grant"
        // javaScriptEnabled
        // userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.15"
        // userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
        // mixedContentMode="always"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
