import React from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, Surface } from 'react-native-paper';

const Layout = ({ children }) => (
    <PaperProvider>
        <React.Fragment>
            {Platform.OS === 'web' ? (
                <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
            ) : null}
            <Appbar.Header>
                <Appbar.Content
                    title="Astronomy Picture of the Day"
                    subtitle="Discover the cosmos!"
                />
            </Appbar.Header>
            <ScrollView>
                <View style={styles.container}>{children}</View>
            </ScrollView>
        </React.Fragment>
    </PaperProvider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
});

export default Layout;
