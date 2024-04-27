import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { scale } from "../../themes/scales";
import Spacer from "./Spacer";
import AppButton from "./AppButton";

interface Props {
    error: string
    refetch: () => void
}


const ErrorContent = ({ error, refetch }: Props) => {
    return (
        <View style={styles.container} >
            <AppText align='center' >Something went wrong :{error}</AppText>
            <Spacer size={20} />
            <AppButton title="Retry" onPress={refetch} />
        </View>
    );
};

export default ErrorContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: scale(40)
    }
});
