import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'

const DoubleTap = (props) => {
    
    const [delay, setdelay] = useState(300)
    const [lastTap, setlastTap] = useState(null)

    const handleDoubleTap = () => {
        const now = Date.now();
        if(lastTap && (now - lastTap) < delay ) {
            props.onDoubleTap()
        } else {
            setlastTap(now)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handleDoubleTap}>
            {props.children}
        </TouchableWithoutFeedback>
    )
}

export default DoubleTap
