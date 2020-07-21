import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ImageBackground,
  FlatList,
  Alert,
} from 'react-native';

class NewsScreen extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  getListViewItem = (item) => {
    var author = 'Author : ';
    var author = author.concat(item.author);
    Alert.alert(author, item.description);
    // Alert.alert()
  };

  fetchData = async () => {
    const response = await fetch(
      'http://newsapi.org/v2/top-headlines?country=in&apiKey=32c550b61d004b6aaddb8476cffe287e',
    );
    const json = await response.json();
    this.setState({data: json.articles});
    // console.log(this.state.data);
  };
  render() {
    return (
      <View style={styles.background}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <Text onPress={this.getListViewItem.bind(this, item)}>
              {item.title}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
        />
        <View style={styles.registerButton}>
          <Button
            title="Go to Welcome Screen"
            onPress={() => this.props.navigation.navigate('Welcome')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  punchline: {
    color: 'white',
    fontSize: 30,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'transparent',
  },
});

export default NewsScreen;
