import { ScrollView, Share, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackPramsList } from "../navigation/types";
import colors from "../themes/colors";
import { MainMovie } from "../components/home";
import { useGetMovieDetails } from "../hooks/movies";
import { AppText, Spacer } from "../components/common";
import { sWidth, scale, vScale } from "../themes/scales";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useFavoriteStore } from "../store";
import { FavoriteStore } from "../store/useFavoriteStore";
import { STATIC_IMAGE_URL } from "../services/constans";


type ScreenNavigationProp = NativeStackNavigationProp<MainStackPramsList, 'MovieDetails'>;

interface Props {
    navigation: ScreenNavigationProp
    route: any
}

const MovieDetails = ({ navigation, route }: Props) => {
    const { id } = route.params
    const { data, isLoading } = useGetMovieDetails(id)
    const { onBookMarkPress, isMovieInWishList } = useFavoriteStore() as FavoriteStore


    const onShare = () => {
        const options = {
            title: data.title,
            message: data.overview,
            url: STATIC_IMAGE_URL + data.poster_path,
        };
        Share.share(options)
    }


    return (
        <View style={styles.container} >
            <ScrollView contentContainerStyle={{ flex: 1 }} >
                {!isLoading && <>
                    <MainMovie movie={data} />
                    <View style={styles.row} >
                        <AppText size={16} font='Teshrin AR+LT Bold' style={styles.title} numberOfLines={2} >{data.title}</AppText>
                        <View style={styles.smallRow} >
                            <FontAwesome onPress={() => onBookMarkPress(data)} name={isMovieInWishList(data.id) ? "bookmark" : "bookmark-o"} color={colors.selection} size={22} />
                            <FontAwesome style={{ marginStart: scale(15) }} onPress={onShare} name='share' color={colors.selection} size={22} />
                        </View>
                    </View>
                    <Spacer />
                    <View style={styles.smallRow} >
                        <FontAwesome name="star" color={colors.yellow} size={16} style={{ marginEnd: scale(5) }} />
                        <AppText font='Teshrin AR+LT Light' >{data.vote_average.toFixed(1)}/10 IMDP</AppText>
                    </View>

                    <Spacer size={20} />
                    <View style={styles.row} >
                        <View>
                            <AppText size={12} color={colors.unSelection} >Length</AppText>
                            <Spacer size={5} />
                            <AppText size={12} align='center' >{data.runtime} min</AppText>
                        </View>
                        <View>
                            <AppText size={12} color={colors.unSelection} >Language</AppText>
                            <Spacer size={5} />
                            <AppText size={12} align='center' >{data.original_language.toUpperCase()}</AppText>
                        </View>
                        <View>
                            <AppText align='center' size={12} color={colors.unSelection} >Status</AppText>
                            <Spacer size={5} />
                            <AppText size={12} align='center' >{data.status}</AppText>
                        </View>
                    </View>
                    <Spacer size={20} />
                    <AppText size={16} color={colors.unSelection} font='Teshrin AR+LT Light' style={styles.overview} >{data.overview}</AppText>
                </>
                }

            </ScrollView>
        </View >
    );
};

export default MovieDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    overview: {
        paddingHorizontal: scale(16)
    },
    buttonsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: scale(20),
        position: 'absolute',
        bottom: vScale(20),
        width: sWidth
    },
    share: {
        width: scale(290),
        height: scale(50),
        backgroundColor: colors.darkYellow
    },
    likeContainer: {
        width: scale(48),
        height: scale(48),
        borderRadius: 6,
        backgroundColor: colors.selection,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginEnd: scale(10),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: scale(16)

    },
    smallRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(16)
    },
    title: {
        maxWidth: scale(220)
    }

});
