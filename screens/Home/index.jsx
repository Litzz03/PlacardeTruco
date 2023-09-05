import { Text, View } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { Placar } from "../../components/Placar";


export function Home(){

    const [time1, setTime1] = useState('0')
    const [time2, setTIme2] = useState('0')

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>MARCADOR DE TRUCO</Text>

            <View style={styles.containerPlacares}>
                <Placar nomeTime= "Nós" pontosTime= {time1}/>
                <Placar nomeTime= "Eles" pontosTime= {time2}/>
            </View>
        </View>
    )
}