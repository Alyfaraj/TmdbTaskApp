import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../themes/colors";
import { HomeHeader, MainMovie, SeeAll } from "../components/home";
import { AppText, ErrorContent, MovieItem } from "../components/common";
import { scale } from "../themes/scales";
import { ScrollView } from "react-native";
import { MainStackPramsList } from "../navigation/types";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useHomeMovies } from "../hooks/movies";
import Animated, { SlideInRight } from 'react-native-reanimated'
import { HomeShimmer } from "../components/shimmer";


type ScreenNavigationProp = NativeStackNavigationProp<MainStackPramsList, 'AppTab'>;

interface HomeProps {
    navigation: ScreenNavigationProp
}

const Home = ({ navigation }: HomeProps) => {
    const { data, isLoading, isError, error, refetch } = useHomeMovies()

    const onSeeAllPress = () => {
        navigation.navigate('AllMovies')
    }

    const onSearchPress = () => {
        navigation.navigate('Search')
    }


    return (
        <View style={styles.container} >
            <HomeHeader  {...{ onSearchPress }} />
            {isError && <ErrorContent error={error.message} refetch={refetch} />}
            {isLoading && <HomeShimmer />}
            {(!isLoading && !isError) &&
                <ScrollView style={styles.container} >
                    <MainMovie movie={data?.[0]} showButtons />
                    <AppText size={18} style={styles.text} font='Teshrin AR+LT Bold' >Discover</AppText>
                    <Animated.FlatList
                        entering={SlideInRight.duration(1000)}
                        data={[...data.slice(1), { type: 'seeAll' }]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            if (item.type == 'seeAll') return <SeeAll onPress={onSeeAllPress} />
                            else return <MovieItem movie={item} />
                        }}
                        horizontal
                        contentContainerStyle={styles.list}
                        ItemSeparatorComponent={() => <View style={{ width: scale(16) }} />}
                    />
                </ScrollView>}

        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    text: {
        marginStart: scale(20),
        marginVertical: scale(20)
    },
    list: {
        paddingHorizontal: scale(20)
    }


});
