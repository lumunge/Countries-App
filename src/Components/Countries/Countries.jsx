import { useState, useEffect } from "react";
// material ui components
import {
	Grid,
	Card,
	CardContent,
	Typography,
	CardMedia,
	TextField,
	Container
} from "@material-ui/core";
import axios from "axios";
// styles
import useStyles from "./styles";
import Regions from "../Regions/Regions";

const Countries = () => {
	const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState("");
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [loading, setLoading] = useState(false);

	// style classes
	const classes = useStyles();

	// get all regions
	const allRegions = [
		"all",
		...new Set(countries.map((country) => country.region)),
	];

	// fetch list of countries
	useEffect(() => {
		axios
			.get("https://restcountries.eu/rest/v2/all")
			.then((res) => {
				const allCountries = res.data;
				setCountries(allCountries);
				setLoading(!loading);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// fetch filtered countries by search parameter
	useEffect(() => {
		setFilteredCountries(
			countries.filter((country) =>
				country.name.toLowerCase().includes(search.toLowerCase())
			)
		);
	}, [search, countries]);

	// filtering by region
	const filterByRegion = (region) => {
		if (region === "all") {
			setFilteredCountries(countries);
			return;
		}
		const newCountries = countries.filter(
			(country) => country.region === region
		);
		setFilteredCountries(newCountries);
	};

	return (
		<Container className={classes.mainContainer}>
			<TextField
				label="Search Country..."
				variant="outlined"
				onChange={(e) => setSearch(e.target.value)}
				className={classes.searchBar}
			/>
			<Regions regions={allRegions} filterByRegion={filterByRegion} />
			{loading ? (
			<Grid container spacing={2}>
				{filteredCountries.map((country) => (
					<Grid item xs={12} sm={4}>
						<Card>
							<CardMedia
								className={classes.image}
								image={country.flag}
								title={country.name}
							/>
							<CardContent>
								<Typography variant="h5">
									{country.name}
								</Typography>
								<Typography variant="h6" color="secondary">
									Total Population:{" "}
									<span className={classes.span}>
										{country.population.toLocaleString(
											"en-US"
										)}
									</span>
								</Typography>
								<Typography variant="h6" color="secondary">
									Spoken Languages:{" "}
									<span className={classes.span}>
										{country.languages.map((language) => (
											<>{`${language.name}, `}</>
										))}
									</span>
								</Typography>
								<Typography variant="h6" color="secondary">
									Currencies:{" "}
									<span className={classes.span}>
										{country.currencies.map((currency) => (
											<>{currency.name}</>
										))}
									</span>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
			) : (
				<div>
					<Typography variant="h6">Patience Friend...</Typography>
				</div>
			)}
		</Container>
	);
};

export default Countries;
