import React, {Component} from 'react';
import api from '../service/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet , Image } from 'react-native';

export default class Main extends Component{
	static navigationOptions = {
		title : " Mangás   ",

	};

	state = {
		data: null
	};

	componentDidMount(){
		this.loadProducts();
	}
	loadProducts = async() => {
		const response = await api.get(`/mangamark/manga`);
		const { data } = response;
		this.setState({ data });
	};
	renderItem = ({item}) => {
		return (
			<View style={styles.productContainer}>


				<Text style={styles.productTitle}>{item.title}</Text>

				<Image source={{url: item.url }} style={{width: 30, height: 30}}/>



				<Text style={styles.productDescription}>{item.description}</Text>
				<TouchableOpacity
				style={styles.productButton}
				onPress={()=>{this.props.navigation.navigate("Product", {product: item});
				}}
			>
				<Text style={styles.productButtonText}>Link</Text>
			</TouchableOpacity>
			</View>
		);
	};
	render(){
		return(
			<View style={styles.container}>
				<FlatList
					contentContainerStyle={styles.list}
					data={this.state.data}
					keyExtractor={item => item._title}
					renderItem={this.renderItem}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	container:{
		flex:1,
		backgroundColor: "#696969"

	},
	list:{
		padding: 20
	},
	productContainer: {
		backgroundColor: "#FFF",
		borderWidth: 1,
		borderColor: "#DDD",
		borderRadius: 5,
		padding: 20,
		marginBottom: 20,
	},
	productTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#000",
		justifyContent:'center',
		alignItems:'center'
	},
	productDescription:{
		fontSize: 16,
		color: "#333",
		marginTop: 5,
		lineHeight: 24
	},
	productButton: {
		height: 42,
		borderWidth: 4,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
		borderColor: "#000",
		backgroundColor: "#000",
		borderRadius: 5,

	},
	productButtonText: {
		fontSize: 15,
		color: "#FAFAFA",
		backgroundColor: "#000",
		fontWeight:"bold"
	},

});