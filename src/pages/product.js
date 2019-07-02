
import React from 'react';

import { Text, WebView } from 'react-native';

const Mangas = ({ navigation }) => (
  <WebView source={{ uri: navigation.state.params.product.url }}/>
);

Mangas.navigationOptions = ({ navigation }) => ({
title: navigation.state.params.product.title
});

export default Mangas;
