import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'black',
    },
    calculadoraContainer:{
        paddingHorizontal:20,
        flex:1,
        justifyContent:'flex-end'
    },
    resultado:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginRight:20
    },
    resultadoPequeno:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right', 
        marginRight:20,
        marginBottom:18,
        paddingHorizontal:10,
    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
    },
    boton:{
        height:80,
        width:80,
        backgroundColor:'#2D2D2D',
        borderRadius:100,
        justifyContent:'center',
        margin:10,
    },

    botonTexto:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    }
})