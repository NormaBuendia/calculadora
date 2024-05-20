import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
  }

 export const useCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [ numero, setNumero ] = useState('0');
  
    // usar use ref (const ultimaOperacion) para que cuando se cambie a una operacion 
    // (de setNumeroAnterior, esta o division) no se renderice otra vez
    
    // para poder colocar en initialValue todas las operaciones( sumar, restar...) se hace una enumracion
    const ultimaOperacion = useRef<Operadores>()
    const limpiar =() =>{
      setNumero('0');
      setNumeroAnterior('0')
    }
    // numeroTexto = accion de dar click
    const armarNumero = ( numeroTexto: string) =>{
      // no aceptar doble punto
      if (numero.includes('.') && numeroTexto === ('.'))
        return;
      if (numero.startsWith('0') || numero.startsWith('-0')){
  
        // punto decimal
        if( numeroTexto === ('.')){
         setNumero(numero + numeroTexto);
      // evaular si hay otro cero y hay un punto
        }else if(numeroTexto === '0' && numero.includes('.')){
          setNumero(numero + numeroTexto);
        }
        // Evaluar si es diferente de 0 y no tiene punto
        else if( numeroTexto !== '0' && !numero.includes('.')){
          setNumero(numeroTexto);
        } 
        // evitar 0000.00
        else if( numeroTexto=== '0' && !numero.includes('.')){
          setNumero(numero);
        }
        else{
          setNumero(numero + numeroTexto);
        }
      
      
      }  else{
        setNumero(numero + numeroTexto);
      }
    }
  
    const positivoNegativo = () => {
      if (numero.includes( '-')){
        setNumero(numero.replace('-', '')); 
      }
      else{
        setNumero(('-') + numero); 
      }
    }
  // funcion de boton borrar
  // const btnDelete = () =>{
  //   let negativo = '';
  //   let numeroTemporal = numero;
  //   if(numero.includes('-')){
  //     negativo = '-';
  //     numeroTemporal = numero.substring(1);
  //   }
  //   if(numeroTemporal.length > 1){
  //     setNumero(negativo + numeroTemporal.slice(0,-1))
  //   } else {
  //     setNumero('0')
  //   }
  // }
  
  const borrar = () => {
    if (numero.length == 1 || (numero.length == 2 && numero.includes('-')))
        setNumero('0');
    else
        setNumero(numero.slice(0, -1))
  }
  
  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')){
      setNumeroAnterior( numero.slice(0,-1));
    } else {
      setNumeroAnterior( numero);
    }
    
    setNumero('0')
  }
  
  const btnDivider = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  }
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  }
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  }
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  }
  
  const calcular = ( ) =>{
    // transformar los numeros de string a numero
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);
  // usamos un switch
  
    switch (ultimaOperacion.current) {
        case Operadores.sumar:
          setNumero(`${ num2-num1}`);
        break;
        case Operadores.multiplicar:
          setNumero(`${ num1*num2}`);
        break;
        case Operadores.dividir:
          num1 !==0 && setNumero(`${ num2/num1}`);
        break;
    
    }
    setNumeroAnterior( '0');
  }
    return {
        numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        borrar,
        btnDivider,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        armarNumero,
        calcular,

    }
}


