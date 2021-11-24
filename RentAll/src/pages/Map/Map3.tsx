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
        navigation.navigate('detail3');
    }

    return(
        <>
        <View style={styles.container}>
            
            <View style={styles.mapContainer}>
                <MapView style={styles.map} initialRegion={{
                    latitude:37.335079,
                    longitude:-85.335232,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014
                }}
                >

                <Marker onPress={handlerNavigateDetail} coordinate={{latitude:37.335079,longitude:-85.335232}}>
                    <View style={styles.mapMarkerContainer}>
                         <Image style={styles.mapMarkerImage} source={{uri: 'https://casa.abril.com.br/wp-content/uploads/2021/11/8-minimalismo-japones-e-madeira-norteiam-o-projeto-desta-casa-de-58-m-2.jpg?resize=1024,683'}}/>
                         <Text  style={styles.mapMarkerTitle}>Campbellsville</Text>
                    </View>
                </Marker> 

                </MapView>
            </View>            
        </View> 
        </>

    )
}
