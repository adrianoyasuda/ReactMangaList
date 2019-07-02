
// adb kill-server
// adb start-server

import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  Image,
  ImageBackground, 
  TextInput, 
  Button,
  ActivityIndicator } from 'react-native';

import axios from 'axios';

export default class Log extends Component {

  constructor(props) {
    super(props);

    this.state = {
      login: "  ",
      senha: " ",
      loading: false,
      user : [],
    };
  }

  onChange(key, value) {
    this.setState({
      [key] : value,
    })
  }

  onPress() {

    const dados = {
      login: this.state.login,
      senha: this.state.senha,
    };

    this.setState({ loading : true });

    setTimeout(() => {

      axios({
          method: 'post',
          url: 'http://www.gileduardo.com.br/react/api_charadas/rest.php/auth',
          data: dados,
          headers:{
            "Content-Type": "application/json"
          },
        }).then(response => {

          if(response.data.id < 0) {
            alert(response.data.nome)
            this.setState({
              login : "",
              senha : "",
            })
          }
          else {
            alert('[OK] Autenticação efetuada com sucesso!')
          }

          this.setState({ loading : false });

        }).catch(error => {
          alert("[ERROR] Houve um problema ao acessar a API!");
          this.setState({ loading : false });
        });

    }, 1000);
  }



  render() {
    return (
        <View style={styles.container} >
          <ImageBackground
              source={ require('../img/ichigo.png') }
              style={{width: '100%', height: '100%'}}>
            <Button style={{ marginBottom: 200}}
                    onPress={()=>{this.props.navigation.navigate("Main");}}
                    title="Pressione Aqui para Avançar"
                    color="#696969"
            />
          </ImageBackground>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    alignItems: 'center',
    color: '#000'

  },
});