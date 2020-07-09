import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

const FontAwesomeIcon = ({ type, iconStyle, changeFavourite }) => {
    return type === 'solid' ? 
            (
                <TouchableOpacity>
                    <FontAwesome5 name={'star'} solid style={iconStyle} onPress={changeFavourite} />
                </TouchableOpacity> ) : 
            (
                <TouchableOpacity>
                    <FontAwesome5 name={'star'} light style={iconStyle} onPress={changeFavourite} />
                </TouchableOpacity> 
            )         
}

export default FontAwesomeIcon
