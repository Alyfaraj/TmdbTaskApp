import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import colors from "../themes/colors";
import { AppText, ErrorContent, MovieItem, Spacer } from "../components/common";
import { sWidth, scale } from "../themes/scales";
import { SearchBar } from "../components/search";
import { useMoviesSearch } from "../hooks/search";
import { MoviesShimmer } from "../components/shimmer";


interface SearchProps {

}

const Search = ({ }: SearchProps) => {
    const [keyword, setKeyword] = useState<string>('')
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, refetch, error } = useMoviesSearch(keyword)

    const onEndReached = () => {
        if (hasNextPage) fetchNextPage()
    }

    return (
        <View style={styles.container} >
            <SafeAreaView />
            <SearchBar value={keyword} onChangeText={setKeyword} autoFocus />
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
                    ListEmptyComponent={() => <AppText align='center' >{keyword ? 'No result found' : ''}</AppText>}
                    onEndReached={onEndReached}
                    ListFooterComponent={() => <>
                        {isFetchingNextPage && <View style={styles.loading} ><MoviesShimmer /></View>}
                    </>}
                />}
        </View>
    );
};

export default Search;

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
