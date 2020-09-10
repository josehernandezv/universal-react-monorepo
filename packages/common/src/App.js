import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, ActivityIndicator, Card, Paragraph } from 'react-native-paper';
import useApod from './useApod';
import Layout from './Layout';

const App = () => {
    const { result, isLoading } = useApod();

    return (
        <Layout>
            {isLoading && <ActivityIndicator />}
            {result && (
                <Card>
                    <Card.Cover source={{ uri: result.url }} />
                    <Card.Title
                        title={result.title}
                        subtitle={result.copyright}
                    />
                    <Card.Content>
                        <Paragraph>{result.explanation}</Paragraph>
                    </Card.Content>
                </Card>
            )}
        </Layout>
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
