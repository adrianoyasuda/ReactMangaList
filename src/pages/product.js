
import React from 'react';

import { Text, WebView } from 'react-native';

const Product = ({ navigation }) => (
  <WebView source={{ uri: navigation.state.params.product.attributes.posterImage.original }}/>
);

Product.navigationOptions = ({ navigation }) => ({
title: navigation.state.params.product.title
});

export default Product;
