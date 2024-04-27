import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import colors from "../themes/colors";
import { MovieItem, Spacer } from "../components/common";
import { scale } from "../themes/scales";
import { useFavoriteStore } from "../store";
import { FavoriteStore } from "../store/useFavoriteStore";


interface FavoritesProps {

}

const Favorites = ({ }: FavoritesProps) => {
    const { favorites } = useFavoriteStore() as FavoriteStore


    return (
        <View style={styles.container} >
            <SafeAreaView />
            <FlatList
                data={favorites as Movie[]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }: { item: Movie }) => <MovieItem movie={item} largeWidth />}
                numColumns={2}
                ItemSeparatorComponent={() => <Spacer size={20} />}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
};

export default Favorites;

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

        alignSelf: 'center'
    },
    columnWrapper: {
        justifyContent: 'space-around',
        paddingHorizontal: scale(10),
    },


});
