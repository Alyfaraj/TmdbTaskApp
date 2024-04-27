import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import colors from '../../themes/colors';
import { sWidth, scale, vScale } from '../../themes/scales';

const MoviesShimmer = () => {


    const keyExtractor = (index: number) => {
        return `${index}`;
    };


    const Item = () => (
        <SkeletonPlaceholder backgroundColor={colors.shimmer} highlightColor={colors.unSelection} >
            <>
                <SkeletonPlaceholder.Item
                    height={vScale(220)}
                    width={sWidth * .41}
                    borderRadius={vScale(8)}
                    marginHorizontal={6}

                />
                <SkeletonPlaceholder.Item
                    height={vScale(13)}
                    width={scale(160)}
                    borderRadius={vScale(4)}
                    marginTop={15}
                    marginHorizontal={6}

                />

            </>
        </SkeletonPlaceholder>
    );
    return (
        <View>
            <FlatList
                scrollEnabled={false}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                data={[0, 1, 2, 3, 4, 5]}
                renderItem={Item}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default MoviesShimmer;

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: scale(15),
        alignSelf: 'center',
        marginTop: vScale(14)
    },
    separator: {
        height: vScale(20)
    }
});
