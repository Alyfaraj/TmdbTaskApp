import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import colors from '../../themes/colors';
import { scale, vScale } from '../../themes/scales';
import AppText from './AppText';

interface AppButtonProps {
    title: string;
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    loading?: boolean;
    disabled?: boolean;
    icon?: () => React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = ({
    title,
    onPress,
    containerStyle,
    titleStyle,
    loading,
    disabled,
    icon,
}) => {
    return (
        <TouchableOpacity
            disabled={loading || disabled}
            onPress={onPress}
            activeOpacity={0.9}
            style={[
                styles.container,
                containerStyle,
            ]}
        >
            {loading ? (
                <ActivityIndicator size="small" color={colors.white} />
            ) : (
                <View style={styles.row}>
                    {icon ? icon() : null}
                    <AppText size={15} font='Teshrin AR+LT Bold' style={titleStyle}>{title}</AppText>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    container: {
        width: scale(310),
        height: 40,
        backgroundColor: colors.button,
        borderRadius: vScale(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: vScale(10),
        alignSelf: 'center',
        shadowOpacity: .1,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: colors.selection
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});