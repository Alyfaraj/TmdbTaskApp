import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import colors from '../../themes/colors';
import { sHeight, sWidth, scale, vScale } from '../../themes/scales';


const HomeShimmer = () => {
    const keyExtractor = (index: number) => {
        return `${index}`;
    };


    const Item = () => (
        <SkeletonPlaceholder backgroundColor={colors.shimmer} highlightColor={colors.unSelection}  >
            <>
                <SkeletonPlaceholder.Item
                    height={vScale(210)}
                    width={scale(130)}
                    borderRadius={vScale(8)}
                    marginHorizontal={6}

                />
            </>
        </SkeletonPlaceholder>
    );
    return (
        <View>
            <SkeletonPlaceholder backgroundColor={colors.shimmer} highlightColor={colors.unSelection}>
                <>
                    <SkeletonPlaceholder.Item
                        height={sHeight * .65}
                        width={sWidth}
                        borderRadius={vScale(4)}
                        marginBottom={20}
                    />

                    <SkeletonPlaceholder.Item
                        height={20}
                        width={scale(110)}
                        borderRadius={vScale(4)}
                        marginBottom={20}
                        marginStart={scale(16)}
                    />
                </>
            </SkeletonPlaceholder>
            <FlatList
                scrollEnabled={false}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={[1, 2, 4, 5, 6]}
                renderItem={Item}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default HomeShimmer;

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
