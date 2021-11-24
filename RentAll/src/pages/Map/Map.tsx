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
                    latitude:34.410330,
                    longitude:-111.493189,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014
                }}
                >

                <Marker onPress={handlerNavigateDetail} coordinate={{latitude:34.410330,longitude:-111.493189}}>
                    <View style={styles.mapMarkerContainer}>
                         <Image style={styles.mapMarkerImage} source={{uri: 'https://casa.abril.com.br/wp-content/uploads/2016/11/01-zillow.jpeg'}}/>
                         <Text  style={styles.mapMarkerTitle}>Florida</Text>
                    </View>
                </Marker> 

                </MapView>
            </View>            
        </View> 
        </>

    )
}
