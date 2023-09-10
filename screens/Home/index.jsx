import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Placar,zerarPontos} from "../../components/Placar";
import { useState } from "react";


export function Home(){

    const [pontos1, setPontos1] = useState (0)
    const [pontos2, setPontos2] = useState (0)

    function zerarPontos(){
        setPontos1(0)
        setPontos2(0)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>MARCADOR DE TRUCO</Text>

            <View style={styles.containerPlacares}>
                <Placar nomeTime= "Nós" pontos={pontos1} setPontos={setPontos1} color={styles.placar1}/> 
                <Placar nomeTime= "Eles" pontos={pontos2} setPontos={setPontos2} color={styles.placar2}/>
            </View>

            <TouchableOpacity
            onPress={zerarPontos} style={styles.butonZerar}>
                <Text style={styles.textoZerar}>Zerar</Text>
            </TouchableOpacity>
        </View>
    )
}