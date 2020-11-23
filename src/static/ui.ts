import {RFValue} from "../utils/responsiveFontSize"

const stylesUi = () => {
	return {
		tab: {
			color: "#737a84",
			backgroundColor: "#f5f5f5",
			fontSize: RFValue(13),
			fontFamily: "StyreneAWeb-Regular",
			paddingHorizontal: 12,
			paddingTop: 3,
			paddingBottom: 6,
			borderRadius: 20,
			marginLeft: 5,
		},
		tabActive: {
			color: "#fff",
			backgroundColor: "#354152",
			fontSize: RFValue(13),
			fontFamily: "StyreneAWeb-Regular",
			paddingHorizontal: 12,
			paddingTop: 3,
			paddingBottom: 6,
			borderRadius: 20,
			marginLeft: 5,
		},

		tabCourse: {
			color: "#1952a5",
			fontSize: RFValue(14),
			fontFamily: "StyreneAWeb-Regular",
			paddingHorizontal: 20,
			paddingVertical: 5,
			borderRadius: 20,
			marginLeft: 10,
			borderWidth: 1,
			borderColor: "#e6edf5",
		},

		tabCourseActive: {
			color: "#fff",
			backgroundColor: "#1952a5",
			fontSize: RFValue(14),
			fontFamily: "StyreneAWeb-Regular",
			paddingHorizontal: 20,
			paddingVertical: 5,
			borderRadius: 20,
			marginLeft: 5,
		},

		inputBoxSearch: {
			position: "relative",
			height: 60,
			marginTop: 20,
		},
		iconContainerSearch: {
			position: "absolute",
			top: 10,
			left: 10,
		},
		inputSearch: {
			width: "100%",
			position: "absolute",
			paddingLeft: 50,
			color: "#1d2838",
			fontFamily: "StyreneAWeb-Regular",
			fontSize: RFValue(16),
			opacity: .5,
			borderColor: "#d5e1ef",
			borderWidth: 1,
			borderRadius: 10,
			height: 50,
		},
		btnRed: {
			backgroundColor: "#f5671a",
			paddingVertical: 20,
			width: "100%",
			borderRadius: 10,
		},
		btnWhiteText: {
			textAlign: "center",
			color: "#fff",
			fontWeight: "400",
			fontSize: RFValue(14),
			lineHeight: RFValue(18),
			fontFamily: "StyreneAWeb-Regular",
		},
		btnBlue: {
			backgroundColor: "#f5f5f5",
			paddingVertical: 20,
			width: "100%",
			borderRadius: 10,
		},
		btnBlueText: {
			textAlign: "center",
			color: "#1952a5",
			fontWeight: "400",
			fontSize: RFValue(14),
			lineHeight: RFValue(18),
			fontFamily: "StyreneAWeb-Regular",
		},
		input: {
			width: "100%",
			paddingLeft: 20,
			color: "#1d2838",
			fontFamily: "StyreneAWeb-Regular",
			fontSize: RFValue(16),
			lineHeight: RFValue(18),
			borderColor: "#eeebf3",
			borderWidth: 1,
			borderRadius: 10,
			height: 50,
		},
		label:{
			paddingLeft: 15,
			paddingBottom: 7,
			color: "#8e939b",
			fontWeight: "400",
			fontSize: RFValue(14),
			lineHeight: RFValue(18),
			fontFamily: "StyreneAWeb-Regular",
		}
	}
}

export default stylesUi()
