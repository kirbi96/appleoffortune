import { RFValue } from "../utils/responsiveFontSize"

const commonStyles = {
	fontWeight: "400",
	color: "#1d2838",
}

const styleText = () => {

	return {
		h1: {
			fontSize: RFValue(26),
			lineHeight: RFValue(32),
			fontFamily: "StyreneAWeb-Regular",
			...commonStyles,
		},
		h2: {
			fontSize: RFValue(22),
			lineHeight: RFValue(26),
			fontFamily: "StyreneAWeb-Regular",
			...commonStyles,
		},
		h3: {
			fontSize: RFValue(20),
			lineHeight: RFValue(24),
			fontFamily: "StyreneAWeb-Regular",
			...commonStyles,
		},
		h4: {
			fontSize: RFValue(18),
			lineHeight: RFValue(22),
			fontFamily: "StyreneAWeb-Regular",
			...commonStyles,
		},
		h5: {
			fontSize: RFValue(16),
			lineHeight: RFValue(20),
			fontFamily: "StyreneAWeb-Regular",
			...commonStyles,
		},
		h7: {
			fontSize: RFValue(12),
			lineHeight: RFValue(16),
			fontFamily: "StyreneAWeb-Regular",
			...commonStyles,
		},
		text: {
			fontWeight: "400",
			fontSize: RFValue(14),
			lineHeight: RFValue(18),
			fontFamily: "StyreneAWeb-Regular",
			color: "#1d2838",
		},
		textBlack: {
			fontFamily: "StyreneAWeb-Black",
		},
		textBold: {
			fontFamily: "StyreneAWeb-Bold",
		},
		textLight: {
			fontFamily: "StyreneAWeb-Light",
		},
		textMedium: {
			fontFamily: "StyreneAWeb-Medium",
		},
		textGray: {
			color: "#898e96",
		},
		textWhite: {
			color: "#fff",
		},
		textRed: {
			color: "#f5671a",
		},
		textBlue: {
			color: "#1952a5",
		},
	}
}

export default styleText()
