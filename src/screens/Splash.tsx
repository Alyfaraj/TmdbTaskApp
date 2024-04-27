import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../themes/colors";
import Animated, { ZoomIn } from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import { sWidth } from "../themes/scales";

const Splash = () => {
    return (
        <View style={styles.container} >
            <Animated.View entering={ZoomIn.duration(1000)} >
                <FastImage resizeMode='contain' source={{ uri: 'https://media0.giphy.com/media/1gdoeJmc3piKTeORzG/giphy.gif?cid=6c09b9520wmglaoctw14ao1ifb6nrxydtwpfkwoj1gnl50px&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s' }} style={styles.logo} />
            </Animated.View>
        </View>

    );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: sWidth * .8,
        height: 150
    }
});
