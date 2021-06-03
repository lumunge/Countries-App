import { useState, useEffect } from "react";
// styles
import { SearchContainer, Country, CountryCard } from "../AppStyles";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Regions from "../Components/Regions";

const SearchPage = () => {
	const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState("");
	const [filteredCountries, setFilteredCountries] = useState([]);

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
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		setFilteredCountries(
			countries.filter((country) =>
				country.name.toLowerCase().includes(search.toLowerCase())
			)
		);
	}, [search, countries]);

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
		<div>
			<Navbar />
			<SearchContainer>
				<div className="search-bar">
					<form>
						<input
							type="text"
							placeholder="Search Country..."
							onChange={(e) => setSearch(e.target.value)}
						/>
					</form>
				</div>
				<div className="filter-bar">
							<Regions
								regions={allRegions}
								filterByRegion={filterByRegion}
							/>
				</div>
				<Country>
					{filteredCountries.map((country) => (
						<CountryCard>
							<div className="flag">
								<img src={country.flag} alt={country.name} />
							</div>
							<div className="description">
								<p className="country-name">{country.name}</p>
								<p className="title">Total Population:</p>
								<span>{country.population.toLocaleString("en-US")}</span>
								<p className="title">Spoken Languages:</p>
								<span>
									{country.languages.map((language) => (
										<li>{language.name}</li>
									))}
								</span>
								<p className="title">Currencies: </p>
								<span>
									{country.currencies.map((currency) => (
										<li>{currency.name}</li>
									))}
								</span>
							</div>
						</CountryCard>
					))}
				</Country>
			</SearchContainer>
		</div>
	);
};

export default SearchPage;
