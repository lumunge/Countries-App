import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	mainContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	searchBar: {
		margin: "1rem 0",
	},
	image: {
		height: 140,
	},
	span: {
		fontSize: "1rem",
		color: "#000",
	},
}));
