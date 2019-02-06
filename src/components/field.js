import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import params from './../params'
import Mine from './mine'
import Flag from './flag'

export default props => {
    const {mined, opened, nearMines, exploded, flagged} = props
    
    const styleField = [styles.field]
    
    if(opened) styleField.push(styles.opened)
    
    if(exploded) styleField.push(styles.exploded)
    
    if(flagged) styleField.push(styles.flagged)
    if(!opened && !exploded) styleField.push(styles.regular)
    
    let color = null
    if(nearMines > 0){
        if(nearMines === 1) color = '#2a28d7'
        if(nearMines === 2) color = '#2b520f'
        if(nearMines >2 && nearMines < 6) color = '#f9060a'
        if(nearMines >= 6) color = '#f221a9'
    }
    console.log(color)
    return(
        <View style={styleField}>
            {!mined && opened && nearMines &&(
                <Text style={[styles.label,{color: color}]}>
                    {nearMines}
                </Text> 
                )
            }
            {mined && opened && (
                <Mine/>
            )}
            {
                flagged && !opened && (
                    <Flag/>
                )
            }
        </View>
        )
    }
    
    
    const styles = StyleSheet.create({
        field:{
            height: params.blockSize,
            width: params.blockSize,
            borderWidth: params.borderSize
        },
        regular:{
            backgroundColor: '#999',
            borderLeftColor: '#CCC',
            borderTopColor: '#CCC',
            borderRightColor: '#333',
            borderBottomColor: '#333'
        },
        opened:{
            backgroundColor: '#999',
            borderColor: '#777',
            alignItems: 'center',
            justifyContent: 'center',
        
        },
        label:{
            fontWeight: 'bold',
            fontSize: params.fontSize
        },
        exploded:{
            backgroundColor: 'red',
            borderColor: 'red'
        }

    })