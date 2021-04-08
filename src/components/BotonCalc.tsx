import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    texto : string;
    color ?: 'gris' | 'naranja' | 'grisOscuro';
    ancho ?: boolean;
    action : ( numeroTexto : string) => void;
}

export const BotonCalc = ( { 
    texto, 
    color = 'grisOscuro', 
    ancho = false,
    action
    } : Props ) => {

    const selectColor = () => {
        if( color === 'gris' ) {
            return styles.gris
        }
        else if( color === 'grisOscuro') {
            return styles.grisOscuro
        }
        else {
            return styles.naranja
        }
    }

    return (

        <TouchableOpacity
            onPress={ () => action(texto) }
        >
            <View style={[
                styles.boton,
                selectColor(),
                { width: ( ancho ) ? 180 : 80 }
            ]}>
                <Text style={{
                    ...styles.botonTexto, 
                    color: ( color === 'gris') ? 'black' : 'white'
                }}>
                    { texto }
                </Text>
            </View>
           
        </TouchableOpacity>
        

    )
}

const styles = StyleSheet.create({
    
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 4,
    },
    gris: {
        
        backgroundColor: '#9B9B9B',
    },
    grisOscuro: {
        backgroundColor: '#2D2D2D',
    },
    naranja: {
        backgroundColor: '#FF9427'
    },

    botonTexto :{
         textAlign: 'center',
         padding: 10,
         fontSize: 30,
         color: 'white',
         fontWeight: '300'
    },
 
});