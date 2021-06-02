import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.results {
	
}
`;

export const Navigation = styled.nav`
	height: 70px;
	display: flex;
	align-items: center;
	ul {
		display: flex;
	}
	ul li {
		list-style: none;
		padding: 0 2rem;
	}
	ul li * {
		text-decoration: none;
	}
`;

export const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.filter-bar {
		padding: 1rem 0;
	}
`;

export const Country = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
`;

export const CountryCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	width: 300px;
	height: 200px;

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
	}
	.description li {
		list-style: none;
	}
`;

export const FilterBtn = styled.button`
	margin: 0 1rem;
`;
