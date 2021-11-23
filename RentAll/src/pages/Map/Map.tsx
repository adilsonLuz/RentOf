import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import {SvgUri} from 'react-native-svg';

import styles from './StyleMap';

export default function Map(){

    const navigation = useNavigation();
    
    function handlerNavigateDetail(){
        navigation.navigate('detail');
    }

    return(
        <>
        <View style={styles.container}>
            
            <View style={styles.mapContainer}>
                <MapView style={styles.map} initialRegion={{
                    latitude:-23.4460282,
                    longitude:-46.9172153,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014
                }}
                >

                <Marker onPress={handlerNavigateDetail} coordinate={{latitude:-23.4460282,longitude:-46.9172153}}>
                    <View style={styles.mapMarkerContainer}>
                         <Image style={styles.mapMarkerImage} source={{uri: 'https://f.i.uol.com.br/fotografia/2019/08/16/15659855445d570b082fe09_1565985544_3x2_md.jpg'}}/>
                         <Text  style={styles.mapMarkerTitle}>Centro Histórico</Text>
                    </View>
                </Marker> 

                </MapView>
            </View>            
        </View> 
        </>

    )
}
