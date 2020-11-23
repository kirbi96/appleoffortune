import { Dimensions } from "react-native"

const windowWidth = Dimensions.get("window").width

const stylesHome = () => {
	return {
		bannerContainer: {
			width: windowWidth - 50,
			flex: 1,
			flexDirection: "row",
			height: 150,
			borderRadius: 10
		},
		imageCardContainer: {
			width: 100,
			height: 100
		},
		cardDes:{
			width: windowWidth - 140
		}
	}
}

export default stylesHome()
