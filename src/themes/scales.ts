import { Dimensions, StatusBar, Platform } from 'react-native';

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 852;

const isAndroid = Platform.OS === 'android';
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const is_X_Ratio =
    (screenWidth / screenHeight).toFixed(2) ==
    (DESIGN_WIDTH / DESIGN_HEIGHT).toFixed(2) && !isAndroid;
const guidelineBaseWidth = DESIGN_WIDTH;

const sWidth = screenWidth;

const sHeight = isAndroid
    ? screenHeight - (StatusBar.currentHeight || 0)
    : screenHeight;


const scale = (size: number) => (sWidth / guidelineBaseWidth) * size;

const vScale = (size: number) => (sWidth / guidelineBaseWidth) * size;
const fontScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export { sHeight, sWidth, scale, vScale, fontScale, is_X_Ratio };
