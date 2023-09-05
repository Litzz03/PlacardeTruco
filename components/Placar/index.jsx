import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function Placar(props){

    const [time, setTime] = useState('0')

    return(
        <View style={styles.container}>
            <Text style={styles.tituloPlacar}>{props.nomeTime}</Text>
            <Text style={styles.pontos}>{props.pontosTime}</Text>

            <TouchableOpacity style={styles.butonSomar}>

                <Text style={styles.textoSomar}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.butonDiminuir}>

                <Text style={styles.textoDiminuir}>-1</Text>
            </TouchableOpacity>
        </View>
    )
}