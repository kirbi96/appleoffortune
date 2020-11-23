import { Platform, StatusBar, Dimensions } from "react-native"
import { isIphoneX } from "react-native-iphone-x-helper"

const { height, width } = Dimensions.get("window")
const standardLength = width > height ? width : height
const offset = width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight

const deviceHeight =
	isIphoneX() || Platform.OS === "android" ? standardLength - offset : standardLength

export const RFValue = (fontSize, standardScreenHeight = 680) => {
	const heightPercent = (fontSize * deviceHeight) / standardScreenHeight
	return Math.round(heightPercent)
}
