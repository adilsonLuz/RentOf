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
                cover={require('../../assets/house1.1.jpeg')}
                name="Casa Florida"
                description="Casa confortavel com estilo moderno, segurança e privacidade."
                price="US$ 1200.00"
                onPress={() => navigation.navigate('detail')}
                />

                <New
                cover={require('../../assets/house2.1.jpeg')}
                name="Casa Manhattan"
                description="Local agradavel Longe de poluição com piscina e varios quartos separados"
                price="US$ 1450.00"
                onPress={() => navigation.navigate('detail2')}
                />

                <New
                cover={require('../../assets/house3.1.jpg')}
                name="Casa Texas"
                description="Belezas naturais, arquitetura moderna, caracterizada por sua vista panoramica."
                price="US$ 2560.00"
                onPress={() => navigation.navigate('detail3')}
                />
            </ScrollView>

            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                <Text style={[styles.title, {marginTop: 20}]}>Proximo de você</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <House
                cover={require('../../assets/house4.1.jpg')}
                description="Vista panoramica, segurança 24 horas, ótima localização"
                price="US$ 924.00"
                onPress={() => navigation.navigate('map')}
                />

                <House
                cover={require('../../assets/house5.1.jpg')}
                description="Todo conforto e segurança com toque de estilo Italiano."
                price="US$ 1330.00"
                onPress={() => navigation.navigate('map2')}
                />

                <House
                cover={require('../../assets/house6.1.jpeg')}
                description="Para quem gosta do estilo oriental irá se maravilhar com esta casa pré-moldada."
                price="US$ 2180.00"
                onPress={() => navigation.navigate('map3')}
                />
            </ScrollView>

            <Text style={[styles.title, {marginTop: 20}]}>Dica do dia</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Recommended
                cover={require('../../assets/house7.1.jpg')}
                title="Casa Florida"
                offer="20% OFF"
                />

                <Recommended
                cover={require('../../assets/house8.1.jpg')}
                title="Casa Texas"
                offer="15% OFF"                
                />

                <Recommended
                cover={require('../../assets/house9.1.jpg')}
                title="Casa Miame"
                offer="10% OFF"
                />
            </ScrollView>

        </ScrollView>
    );
}