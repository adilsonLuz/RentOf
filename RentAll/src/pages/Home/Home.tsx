import React from "react";
import { View, Text } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './StyleHome';
import New from '../../components/New';
import House from '../../components/House';
import Recommended from "../../components/Recommended";


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
                price="R$ 1.200,90"
                onPress={() => navigation.navigate('detail')}
                />

                <New
                cover={require('../../assets/house2.jpg')}
                name="Rancho SP"
                description="Local agradavel Longe de poluição com piscina e varios quartos separados"
                price="R$ 1.450,00"
                onPress={() => {}}
                />

                <New
                cover={require('../../assets/house3.jpg')}
                name="Casa Floripa"
                description="Belezas naturais, variedade de praias, caracterizada por sua arquitetura colonial."
                price="R$ 2.560,00"
                onPress={() => {}}
                />
            </ScrollView>

            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                <Text style={[styles.title, {marginTop: 20}]}>Proximo de você</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <House
                cover={require('../../assets/house4.jpg')}
                description="Aqui vai ser colocado qualquer texto com a descrição"
                price="R$ 924,00"
                />

                <House
                cover={require('../../assets/house5.jpg')}
                description="Aqui vai ser colocado qualquer texto com a descrição"
                price="R$ 1.330,00"
                />

                <House
                cover={require('../../assets/house6.jpg')}
                description="Aqui vai ser colocado qualquer texto com a descrição"
                price="R$ 2.180,00"
                />
            </ScrollView>

            <Text style={[styles.title, {marginTop: 20}]}>Dica do dia</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Recommended
                cover={require('../../assets/house1.jpg')}
                title="Casa Floripa"
                offer="20% OFF"
                />

                <Recommended
                cover={require('../../assets/house2.jpg')}
                title="Casa Praia"
                offer="15% OFF"                
                />

                <Recommended
                cover={require('../../assets/house3.jpg')}
                title="Casa SP"
                offer="10% OFF"
                />
            </ScrollView>

        </ScrollView>
    );
}