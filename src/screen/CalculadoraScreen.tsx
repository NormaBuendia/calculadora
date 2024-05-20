// import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';


// enum Operadores {
//   sumar, restar, multiplicar, dividir
// }

const CalculadoraScreen = () => {
 const { numero,
  numeroAnterior,
  limpiar,
  positivoNegativo,
  borrar,
  btnDivider,
  btnMultiplicar,
  btnRestar,
  btnSumar,
  armarNumero,
  calcular,} = useCalculadora();

//   const [numeroAnterior, setNumeroAnterior] = useState('0')
//   const [ numero, setNumero ] = useState('0');

//   // usar use ref (const ultimaOperacion) para que cuando se cambie a una operacion 
//   // (de setNumeroAnterior, esta o division) no se renderice otra vez
  
//   // para poder colocar en initialValue todas las operaciones( sumar, restar...) se hace una enumracion
//   const ultimaOperacion = useRef<Operadores>()
//   const limpiar =() =>{
//     setNumero('0');
//     setNumeroAnterior('0')
//   }
//   // numeroTexto = accion de dar click
//   const armarNumero = ( numeroTexto: string) =>{
//     // no aceptar doble punto
//     if (numero.includes('.') && numeroTexto === ('.'))
//       return;
//     if (numero.startsWith('0') || numero.startsWith('-0')){

//       // punto decimal
//       if( numeroTexto === ('.')){
//        setNumero(numero + numeroTexto);
//     // evaular si hay otro cero y hay un punto
//       }else if(numeroTexto === '0' && numero.includes('.')){
//         setNumero(numero + numeroTexto);
//       }
//       // Evaluar si es diferente de 0 y no tiene punto
//       else if( numeroTexto !== '0' && !numero.includes('.')){
//         setNumero(numeroTexto);
//       } 
//       // evitar 0000.00
//       else if( numeroTexto=== '0' && !numero.includes('.')){
//         setNumero(numero);
//       }
//       else{
//         setNumero(numero + numeroTexto);
//       }
    
    
//     }  else{
//       setNumero(numero + numeroTexto);
//     }
//   }

//   const positivoNegativo = () => {
//     if (numero.includes( '-')){
//       setNumero(numero.replace('-', '')); 
//     }
//     else{
//       setNumero(('-') + numero); 
//     }
//   }
// // funcion de boton borrar
// // const btnDelete = () =>{
// //   let negativo = '';
// //   let numeroTemporal = numero;
// //   if(numero.includes('-')){
// //     negativo = '-';
// //     numeroTemporal = numero.substring(1);
// //   }
// //   if(numeroTemporal.length > 1){
// //     setNumero(negativo + numeroTemporal.slice(0,-1))
// //   } else {
// //     setNumero('0')
// //   }
// // }

// const borrar = () => {
//   if (numero.length == 1 || (numero.length == 2 && numero.includes('-')))
//       setNumero('0');
//   else
//       setNumero(numero.slice(0, -1))
// }

// const cambiarNumPorAnterior = () => {
//   if (numero.endsWith('.')){
//     setNumeroAnterior( numero.slice(0,-1));
//   } else {
//     setNumeroAnterior( numero);
//   }
  
//   setNumero('0')
// }

// const btnDivider = () => {
//   cambiarNumPorAnterior();
//   ultimaOperacion.current = Operadores.dividir;
// }
// const btnMultiplicar = () => {
//   cambiarNumPorAnterior();
//   ultimaOperacion.current = Operadores.multiplicar;
// }
// const btnSumar = () => {
//   cambiarNumPorAnterior();
//   ultimaOperacion.current = Operadores.sumar;
// }
// const btnRestar = () => {
//   cambiarNumPorAnterior();
//   ultimaOperacion.current = Operadores.restar;
// }

// const calcular = ( ) =>{
//   // transformar los numeros de string a numero
//   const num1 = Number(numero);
//   const num2 = Number(numeroAnterior);
// // usamos un switch

//   switch (ultimaOperacion.current) {
//       case Operadores.sumar:
//         setNumero(`${ num2-num1}`);
//       break;
//       case Operadores.multiplicar:
//         setNumero(`${ num1*num2}`);
//       break;
//       case Operadores.dividir:
//         num1 !==0 && setNumero(`${ num2/num1}`);
//       break;
  
//   }
//   setNumeroAnterior( '0');
// }
  
  return (
    <View style={styles.calculadoraContainer}>
      {
        (numeroAnterior !== '0') && (
          <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
          )
      }
      <Text style={styles.resultado}
            // numero de filas
            numberOfLines={1}
            // se va ajustando el tamaño del texto en una fila
            adjustsFontSizeToFit
        >{numero}
      </Text>
      
      {/* Fila de Botones  */}
      <View style={ styles.fila}>
        <BotonCalc texto="C" color='#9B9B9B' accion = {limpiar}/>
        <BotonCalc texto="+/-" color='#9B9B9B' accion = {positivoNegativo}/>
        <BotonCalc texto="del" color='#9B9B9B' accion = {borrar }/>
        <BotonCalc texto="/" color='#FF9427' accion = { btnDivider }/>
      </View>
                  {/* Fila de Botones  */}
                  <View style={ styles.fila}>
        <BotonCalc texto="7" accion = {armarNumero}/>
        <BotonCalc texto="8" accion = {armarNumero}/>
        <BotonCalc texto="9" accion = {armarNumero}/> 
        <BotonCalc texto="X" color='#FF9427' accion = { btnMultiplicar }/>
      </View> 
                  {/* Fila de Botones  */}
                  <View style={ styles.fila}>
        <BotonCalc texto="4" accion = {armarNumero}/>
        <BotonCalc texto="5" accion = {armarNumero}/>
        <BotonCalc texto="6" accion = {armarNumero}/>
        <BotonCalc texto="-" color='#FF9427' accion = {btnRestar}/>
      </View>
                        {/* Fila de Botones  */}
                        <View style={ styles.fila}>
        <BotonCalc texto="1" accion = {armarNumero}/>
        <BotonCalc texto="2" accion = {armarNumero}/>
        <BotonCalc texto="3" accion = {armarNumero}/>
        <BotonCalc texto="+" color='#FF9427' accion = {btnSumar}/>
      </View>
                              {/* Fila de Botones  */}
                              <View style={ styles.fila}>
        <BotonCalc texto="0"  accion = {armarNumero} ancho/>
        <BotonCalc texto="." accion = {armarNumero}/>
        <BotonCalc texto="=" color='#FF9427' accion = {calcular}/>
      </View>

    </View>
  )
}

export default CalculadoraScreen
