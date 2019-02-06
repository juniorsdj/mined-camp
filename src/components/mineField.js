import React from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'
import Field from './field'

export default props => {
    const rows = props.board.map((row, indexRow) => {
        const columns = row.map((field, indexColumn) => {
            return<Field {...field} key={indexColumn}/>
        })
        return<View 
        style={{flexDirection: 'row',}}
        key={indexRow}>
        {columns}
        </View>
    })
    return (
        <View style={styles.container}>  
            {rows}
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        
        backgroundColor: '#eee'
    }
})