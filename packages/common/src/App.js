import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Hello universe</Text>
            <Button
                icon="camera"
                mode="contained"
                onPress={() => console.log('Pressed')}
            >
                Press me
            </Button>
            <Icon name="home" size={30} color="#900" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
