import React from 'react';
import { View, ViewStyle } from 'react-native';

interface SpacerProps {
    size?: number;
    style?: ViewStyle;
}

const Spacer: React.FC<SpacerProps> = ({ size = 10, style }) => {
    const spacerStyle: ViewStyle = {
        height: size
    };

    return <View style={[spacerStyle, style]} />;
};

export default Spacer;