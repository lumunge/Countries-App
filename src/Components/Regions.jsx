import {FilterBtn} from '../AppStyles';

const Regions = ({regions, filterByRegion}) => {

    return(
        <div className="filter-container">
            Regions: &nbsp;
            {regions.map((region, index) => (
                <FilterBtn key={index} className="filter-btn" onClick={() => filterByRegion(region)}>{region}</FilterBtn>
            ))}
        </div>
    )
}

export default Regions;