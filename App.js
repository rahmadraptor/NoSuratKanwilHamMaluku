import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <WebView
        injectedJavaScript={`document.getElementById('warning').remove()`}
        startInLoadingState={true}
        source={{ uri: 'https://script.google.com/macros/s/AKfycbxcMocKunmvcFoLcTOMiQpnBcwjsuOeW6cbBW0a1DNXzEEIVe8qMPj37iW1zNSszg2Z/exec' }}
        style={{ margin:0 }}
      />
    );
  }
}

export default App;
