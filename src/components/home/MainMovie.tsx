import { StyleSheet, View, ImageBackground } from "react-native";
import React from "react";
import { sHeight, sWidth, scale } from "../../themes/scales";
import LinearGradient from 'react-native-linear-gradient';
import colors from "../../themes/colors";
import { AppButton, AppText, Spacer } from "../common";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { STATIC_IMAGE_URL } from "../../services/constans";
import moment from 'moment'
import { useGetGenres } from "../../hooks/genres";
import Animated, { FadeIn, SlideInUp } from 'react-native-reanimated'

interface MainMovieProps {
    movie: Movie
    showButtons?: boolean
}

const MainMovie = ({ movie, showButtons }: MainMovieProps) => {
    const { data: genres } = useGetGenres()
    const { title, poster_path, release_date, genre_ids } = movie
    const onSmallButtonPress = () => { }


    const getGenreText = () => {
        let text = ''
        if (genres) {
            genre_ids?.map(id => {
                const itemText: string = genres.find((genre: Genre) => genre.id == id)?.name
                text += ' . ' + itemText
            })
        }
        return text

    }


    return (
        <Animated.View entering={SlideInUp.duration(600)} >
            <ImageBackground style={[styles.posterImage, { height: showButtons ? sHeight * .65 : sHeight * .35 }]}
                source={{ uri: `${STATIC_IMAGE_URL}${poster_path}` }}
            >
                <LinearGradient
                    colors={['transparent', colors.background]}
                    style={styles.linearGradient}
                >
                    {showButtons &&
                        <Animated.View entering={FadeIn.delay(500)} style={styles.textContinuer} >
                            <AppText align='center' color={colors.white} size={24} font='Teshrin AR+LT Bold' >
                                {title}
                            </AppText>
                            <Spacer />
                            <AppText align='center' color={colors.darkYellow} size={12} font='Teshrin AR+LT Medium' >
                                {moment(release_date).format('YYYY')} {getGenreText()}
                            </AppText>
                            <Spacer />

                            <View style={styles.row} >
                                <AppButton
                                    icon={() => <AntDesign
                                        name="infocirlceo"
                                        color={colors.selection}
                                        style={styles.icon}
                                        size={18}
                                    />}
                                    title="INFO" onPress={onSmallButtonPress} containerStyle={styles.smallButton} />
                                <AppButton
                                    icon={() => <Ionicons
                                        name="play"
                                        color={colors.selection}
                                        style={styles.icon}
                                        size={18}
                                    />} title="TRILLER" onPress={onSmallButtonPress} containerStyle={styles.smallButton} />
                                <AppButton onPress={onSmallButtonPress} title="Play" containerStyle={[styles.smallButton, { backgroundColor: colors.red }]} />
                            </View>
                        </Animated.View>
                    }
                </LinearGradient>
            </ImageBackground>
        </Animated.View>
    );
};

export default MainMovie;

const styles = StyleSheet.create({
    posterImage: {
        width: sWidth,
        height: sHeight * .65
    },
    linearGradient: {
        height: '100%'
    },
    textContinuer: {
        position: 'absolute',
        bottom: -10,
        alignSelf: 'center'
    },
    row: {
        alignSelf: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        width: sWidth,

    },
    smallButton: {
        width: scale(110),
        height: 40,
        borderColor: colors.selection,
        borderWidth: StyleSheet.hairlineWidth * .2
    },
    icon: {
        marginEnd: scale(6)
    }
});
