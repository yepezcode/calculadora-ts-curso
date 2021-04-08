import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {

    const { 
        numero,
        numeroAnterior, 
        limpiar,
        btnDelete,
        positivoNegativo,
        btnMultiplicar,
        btnDividir,
        btnSumar,
        btnRestar,
        armarNumero,
        calcular,
    } = useCalculadora();

   return (
       <View style={ styles.calculadoraContainer } >
           {
               ( numeroAnterior !== '0') && (
                 <Text style={ styles.resultadoPequeno } >{ numeroAnterior }</Text>
               )
           }
           <Text 
                style={ styles.resultado } 
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >
                { numero }
             </Text>

             {/* Fila de botones */}
            <View style={ styles.fila } >
                <BotonCalc color="gris" texto="C" action={ limpiar  }/>
                <BotonCalc color="gris" texto="+/-" action={ positivoNegativo  } />
                <BotonCalc color="gris" texto="del" action={ btnDelete } />
                <BotonCalc color="naranja" texto="/" action={ btnDividir }/>
            </View>
             {/* Fila de botones */}
             <View style={ styles.fila } >
                <BotonCalc  action={ armarNumero } texto="7" />
                <BotonCalc  action={ armarNumero } texto="8" />
                <BotonCalc  action={ armarNumero } texto="9" />
                <BotonCalc  action={ btnMultiplicar  } color="naranja" texto="X" />
            </View>
             {/* Fila de botones */}
             <View style={ styles.fila } >
                <BotonCalc  action={ armarNumero } texto="4" />
                <BotonCalc  action={ armarNumero } texto="5" />
                <BotonCalc  action={ armarNumero } texto="6" />
                <BotonCalc color="naranja" texto="-"   action={ btnRestar  } />
            </View>
             {/* Fila de botones */}
             <View style={ styles.fila } >
                <BotonCalc  action={ armarNumero } texto="3" />
                <BotonCalc  action={ armarNumero } texto="2" />
                <BotonCalc  action={ armarNumero } texto="1" />
                <BotonCalc color="naranja" texto="+"   action={ btnSumar  }/>
            </View>
             {/* Fila de botones */}
             <View style={ styles.fila } >
                <BotonCalc action={ armarNumero } ancho={ true } texto="0" />
                <BotonCalc  action={ armarNumero } texto="." />
                <BotonCalc color="naranja" texto="="  action={ calcular }/>
            </View>
       </View>
  )
}