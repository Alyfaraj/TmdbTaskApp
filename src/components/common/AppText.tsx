import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import colors from '../../themes/colors';



interface CustomTextProps extends TextProps {
    size?: number;
    font?: 'Teshrin AR+LT Bold' | 'Teshrin AR+LT Medium' | 'Teshrin AR+LT Regular' | 'Teshrin AR+LT Light';
    align?: 'left' | 'center' | 'right';
    color?: string;
}

const AppText: React.FC<CustomTextProps> = ({
    size = 14,
    font = 'Teshrin AR+LT Regular',
    align = 'left',
    color = colors.selection,
    style,
    children,
    ...rest
}) => {
    const textStyle: TextStyle = {
        fontSize: size,
        fontFamily: font,
        textAlign: align,
        color: color || undefined,
    };

    return (
        <Text style={[textStyle, style]} {...rest}>
            {children}
        </Text>
    );
};

export default AppText;