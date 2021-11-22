import React from "react";
import { View, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './StyleHome';
import New from '../../components/New';


export default function Home() {
    const navigation = useNavigation();

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
                onPress={() => navigation.navigate('detail')}
                />

                <New
                cover={require('../../assets/house2.jpg')}
                name="Rancho SP"
                description="Local agradavel Longe de poluição com piscina e varios quartos separados"
                onPress={() => {}}
                />

                <New
                cover={require('../../assets/house3.jpg')}
                name="Casa Floripa"
                description="Belezas naturais, variedade de praias, caracterizada por sua arquitetura colonial."
                onPress={() => {}}
                />
            </ScrollView>

        </ScrollView>
    );
}