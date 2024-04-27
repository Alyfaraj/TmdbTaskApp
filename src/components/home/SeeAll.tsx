import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { sWidth, scale, vScale } from "../../themes/scales";
import { AppButton, AppText } from "../common";
import colors from "../../themes/colors";

interface SeeAllProps {
    onPress: () => void
}

const SeeAll = ({ onPress }: SeeAllProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container} >
            <AppText size={18} >See All</AppText>
        </Pressable>
    );
};

export default SeeAll;

const styles = StyleSheet.create({
    container: {
        width: sWidth * .35,
        height: vScale(200),
        borderRadius: 8,
        backgroundColor: colors.transparentDark,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
