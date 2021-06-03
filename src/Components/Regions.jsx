import {FilterBtn} from '../AppStyles';

const Regions = ({regions, filterByRegion}) => {

    return(
        <div>
           <span className="regions"> Regions: </span> &nbsp;
            {regions.map((region, index) => (
                <FilterBtn key={index} className="filter-btn" onClick={() => filterByRegion(region)}>{region ? region : 'Islands'}</FilterBtn>
            ))}
        </div>
    )
}

export default Regions;