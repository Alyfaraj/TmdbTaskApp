import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { sWidth, scale, vScale } from "../../themes/scales";
import Icon from 'react-native-vector-icons/FontAwesome6'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from "../../themes/colors";

interface HomeHeaderProps {
    onSearchPress: () => void
}

const HomeHeader = ({ onSearchPress }: HomeHeaderProps) => {
    return (
        <View style={styles.row} >
            <Pressable style={styles.iconContainer} >
                <Icon name="align-right" color={colors.white} size={22} />
            </Pressable>
            <Pressable style={styles.iconContainer} onPress={onSearchPress} >
                <AntDesign name="search1" color={colors.white} size={22} />
            </Pressable>
        </View >
    );
};

export default HomeHeader;

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: scale(20),
        position: 'absolute',
        zIndex: 99,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: sWidth,
        marginTop: vScale(50)
    },
    iconContainer: {
        width: scale(44),
        height: scale(44),
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.transparentDark
    }
});
