import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Placar(props){

    function adicionarPonto() {
        if (props.pontos < 12){
            {props.setPontos(props.pontos + 1)}}   
    }
    function removerPonto() {
        if (props.pontos > 0){
            {props.setPontos(props.pontos - 1)}}
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerMarcador}>    
                <Text style={[styles.tituloPlacar, props.color]}>{props.nomeTime}</Text>
                <Text style={[styles.pontos, props.color]}>{props.pontos}</Text>
            </View>
            <View style={styles.containerButons}>
                <TouchableOpacity style={styles.butonSomar}
                    onPress={adicionarPonto}>
                    <Text style={styles.textoSomar}>+1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.butonDiminuir}
                    onPress={removerPonto}>
                    <Text style={styles.textoDiminuir}>-1</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}