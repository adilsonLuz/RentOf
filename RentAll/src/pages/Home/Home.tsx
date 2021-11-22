import React from "react";
import { View, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './StyleHome';
import New from '../../components/New';


export default function Home() {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#fff', }}
        >
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name="search" size={24} color="#000"/>
                    <TextInput
                    placeholder="O Que está procurando?"
                    style={styles.input}
                    />
                </View>
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, }}>
                <New
                cover={require('../../assets/house1.jpg')}
                name="Casa de Praia"
                description="Casa a uma quadra do mar, lugar seguro e monitorado 24 horas"
                onPress={() => {}}
                />

                <New
                cover={require('../../assets/house1.jpg')}
                name="Casa de Praia"
                description="Casa a uma quadra do mar, lugar seguro e monitorado 24 horas"
                onPress={() => {}}
                />

                <New
                cover={require('../../assets/house1.jpg')}
                name="Casa de Praia"
                description="Casa a uma quadra do mar, lugar seguro e monitorado 24 horas"
                onPress={() => {}}
                />
            </ScrollView>

        </ScrollView>
    );
}