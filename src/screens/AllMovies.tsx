import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import colors from "../themes/colors";
import { ErrorContent, Header, MovieItem, Spacer } from "../components/common";
import { sWidth, scale } from "../themes/scales";
import { useGetPopularMovies } from "../hooks/movies";
import { MoviesShimmer } from "../components/shimmer";


interface AllMoviesProps {

}

const AllMovies = ({ }: AllMoviesProps) => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error, refetch } = useGetPopularMovies()

    const onEndReached = () => {
        if (hasNextPage) fetchNextPage()
    }
    return (
        <View style={styles.container} >
            <Header title='All Movies' />
            {isError && <ErrorContent error={error.message} refetch={refetch} />}
            {isLoading && <MoviesShimmer />}
            {(!isError && !isLoading) &&
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <MovieItem movie={item} largeWidth />}
                    numColumns={2}
                    ItemSeparatorComponent={() => <Spacer size={20} />}
                    columnWrapperStyle={styles.columnWrapper}
                    onEndReached={onEndReached}
                    ListFooterComponent={() => <>
                        <View style={styles.loading} >
                            {isFetchingNextPage && <MoviesShimmer />}

                        </View>
                    </>}
                />}
        </View>
    );
};

export default AllMovies;

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
    loading: { alignItems: 'center', width: sWidth, marginTop: 20 }


});
