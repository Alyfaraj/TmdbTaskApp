import { I18nManager, Platform } from 'react-native';
const IsAndroid = Platform.OS == 'android';

const BOLD = "Teshrin AR+LT Bold"
const MEDIUM = "Teshrin AR+LT Medium"
const REGULAR = "Teshrin AR+LT Regular"
const LIGHT = "Teshrin AR+LT Light"


export default {
    BOLD: {
        fontFamily: Platform.select({
            ios: BOLD,
        }),
        fontWeight: Platform.select({
            ios: '700',
            android: '700',
        }),
    },
    MEDIUM: {
        fontFamily: Platform.select({
            ios: MEDIUM,
        }),
        fontWeight: Platform.select({
            ios: '500',
            android: '500',
        }),
    },
    REGULAR: {
        fontFamily: Platform.select({
            ios: REGULAR,
        }),
        fontWeight: Platform.select({
            ios: '400',
            android: '400',
        }),
    },
    LIGHT: {
        fontFamily: Platform.select({
            ios: LIGHT,
        }),
        fontWeight: Platform.select({
            ios: '400',
            android: '400',
        }),
    },
};
