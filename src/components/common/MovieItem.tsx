import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import { sWidth, scale, vScale } from "../../themes/scales";
import AppText from "./AppText";
import Spacer from "./Spacer";
import colors from "../../themes/colors";
import Icon from 'react-native-vector-icons/Ionicons'
import { STATIC_IMAGE_URL } from "../../services/constans";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

interface MovieItemProps {
    largeWidth?: boolean
    movie: Movie
}

const MovieItem = ({ largeWidth, movie }: MovieItemProps) => {
    const { id, title, vote_average, poster_path, release_date } = movie
    const navigation = useNavigation() as any

    const onPress = () => {
        navigation.navigate("MovieDetails", { id })
    }

    return (
        <Pressable onPress={onPress} >
            <FastImage
                source={{ uri: `${STATIC_IMAGE_URL}${poster_path}` }}
                style={[styles.image, {
                    width: largeWidth ? (sWidth * .41) : sWidth * .35,
                    height: largeWidth ? vScale(220) : vScale(200),
                }]}
            />
            <Spacer />
            <AppText numberOfLines={2} color={colors.white} style={styles.text} font='Teshrin AR+LT Medium' size={14} >{title} ({moment(release_date).format('YYYY')})</AppText>
            <View style={styles.rateContainer} >
                <Icon name="star" size={14} color={colors.yellow} style={styles.icon} />
                <AppText color={colors.white} font='Teshrin AR+LT Bold' >{vote_average.toFixed(1)}</AppText>
            </View>
        </Pressable>
    );
};

export default MovieItem;

const styles = StyleSheet.create({
    image: {
        width: sWidth * .35,
        height: vScale(200),
        borderRadius: 8,
        backgroundColor: colors.transparentDark
    },
    text: {
        maxWidth: sWidth * .35,
        marginStart: scale(4)
    },
    rateContainer: {
        position: 'absolute',
        flexDirection: 'row',
        top: vScale(10),
        end: scale(15)
    },
    icon: {
        marginEnd: scale(4)
    }
});
