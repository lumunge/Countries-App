import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.regions{
	font-size: 1.2rem;
	text-transform: capitalize;
}
`;

export const Navigation = styled.nav`
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #273746;
	width: 100%;
	margin-bottom: 1.2rem;

	ul {
		display: flex;
	}
	ul li {
		list-style: none;
		padding: 0 2rem;
	}
	ul li * {
		text-decoration: none;
		color: #fff;
		font-size: 1.5rem;
	}
	ul li *:hover {
		color: #2ecc71;
		cursor: pointer;
		transition: all 0.4s ease-in-out;
	}
`;

export const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.search-bar form input {
		color: #000;
		font-weight: bold;
		letter-spacing: 1px;
	}
	.filter-bar {
		padding: 1rem 0;
	}
`;

export const Country = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
`;

export const CountryCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	width: 300px;
	height: 200px;

	.country-name {
		color: #dfff00;
		font-weight: bold;
	}

	.flag img {
		position: relative;
		width: 300px;
		height: 200px;
	}
	.description {
		position: absolute;
		background: rgba(0, 0, 0, 0.7);
		color: #fff;
		padding: 10px;
	}
	.description .title {
		font-weight: bold;
		color: #2ecc71;
	}
	.description li {
		list-style: none;
	}
`;

export const FilterBtn = styled.button`
	margin: 1rem 1rem;
	background: transparent;
	padding: 5px 10px;
	border: 2px outset #2ecc71;
	font-size: 1.2rem;
	text-transform: capitalize;

	&:hover {
		background: #2ecc71;
		transition: all 0.4s ease-in-out;
		cursor: pointer;
		color: #fff;
	}
`;
