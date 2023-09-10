import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        width:"50%"
    },
    containerMarcador:{
        alignItems: "center",
        marginTop: 100
    },
    containerButons:{
        marginTop: 100,
        alignItems: "center"
    },
    tituloPlacar:{
        fontSize: 24,
        fontWeight: "bold"
    },
    pontos:{
        fontSize: 140,
        textAlign: "center",
        fontWeight: "bold"
    },
    butonSomar:{
        backgroundColor: "#589D52",
        width: 120,
        height: 67,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    textoSomar:{
        fontSize: 36,
        color: "#fff",
        fontWeight: "bold"
    },
    butonDiminuir:{
        backgroundColor: "#BD1010",
        width: 120,
        height: 67,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 5   
    },
    textoDiminuir:{
        fontSize: 36,
        color: "#fff",
        fontWeight: "bold"
    }

})