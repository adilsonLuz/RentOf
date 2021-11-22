import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather , Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';




import SwiperComponent from "../../components/Swiper";
import styles from './StyleDetail';

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.swiperContent}>
                <SwiperComponent/>
            </View>
            
            <View style={styles.headerContent}>
                <View style={{ width: '65%' }}>
                    <Text>Casa de Praia</Text>
                </View>
            
                <View style={{ width: '35%' }}>
                    <Text style={styles.rating}>Avaliações</Text>
                    <View style={{alignItems: 'center', flexDirection: 'row'}}>
                        
                    </View>
                </View>
            </View>
        </View>
    );
}

/*<Stars
default={4}
count={5}
half={true}
starsSize={20}
fullStar={ <Ionicons name="md-star" size={24} style={styles.myStarStyle} /> }
emptyStar={ <Ionicons name="md-star-outline" size={24} style={styles.myStarStyle} /> }
halfStar={ <Ionicons name="md-star-half" size={24} style={styles.myStarStyle} /> }
/>*/