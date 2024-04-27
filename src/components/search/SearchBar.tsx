import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import React from "react";
import { sWidth, scale, vScale } from "../../themes/scales";
import colors from "../../themes/colors";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";




const SearchBar = ({ onChangeText, value }: TextInputProps) => {
    const { goBack } = useNavigation()
    return (
        <View style={styles.container} >
            <AntDesign name="search1" color={colors.selection} size={20} />
            <TextInput
                {...{ onChangeText, value }}
                style={styles.input}
                placeholder="Search by movie name"
                placeholderTextColor={colors.selection}

            />
            <AntDesign name="close" color={colors.selection} size={20} onPress={() => goBack()} />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        width: sWidth * .92,
        alignSelf: 'center',
        height: 40,
        borderRadius: 8,
        backgroundColor: colors.transparentDark,
        marginBottom: vScale(20),
        paddingHorizontal: scale(20),
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    input: {
        color: colors.selection,
        flex: 1,
        marginStart: scale(10),
        fontSize: 14
    }
});
