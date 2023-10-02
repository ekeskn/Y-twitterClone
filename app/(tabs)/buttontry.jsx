import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing ,ScrollView} from 'react-native';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const buttonOpacity = new Animated.Value(1);

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    // Eşik değerini istediğiniz şekilde ayarlayın (örneğin, 100)
    const threshold = 100;

    if (offsetY > threshold && !isScrolled) {
      // Kullanıcı aşağı kaydırıyor
      setIsScrolled(true);
      Animated.timing(buttonOpacity, {
        toValue: 0.5,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    } else if (offsetY <= threshold && isScrolled) {
      // Kullanıcı yukarı kaydırıyor
      setIsScrolled(false);
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View>
      <ScrollView onScroll={handleScroll}>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
        <Text>hellow</Text>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          position: 'absolute',
          bottom: 20,
          right: 20,
          opacity: buttonOpacity,
        }}
        onPress={() => {
          null
        }}>
        <Text style={{ color: 'black' }}>Düğme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
