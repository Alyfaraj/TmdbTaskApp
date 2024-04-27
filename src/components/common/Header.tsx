import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../themes/colors";
import { scale, vScale } from "../../themes/scales";
import { useNavigation } from "@react-navigation/native";
import AppText from "./AppText";

interface HeaderProps {
    title: string
}

const Header = ({ title }: HeaderProps) => {
    const { goBack } = useNavigation()
    return (
        <SafeAreaView>
            <View style={styles.container} >
                <Icon color={colors.selection} name="arrow-back-ios" size={25} onPress={() => goBack()} />
                <AppText font='Teshrin AR+LT Bold' size={16} >{title}</AppText>
                <View style={{ width: scale(30) }} />
            </View>
        </SafeAreaView>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingStart: scale(22),
        justifyContent: 'space-between',
        paddingBottom: vScale(20),
        paddingTop: vScale(10),
        flexDirection: 'row',
        alignItems: 'center'
    }
});
