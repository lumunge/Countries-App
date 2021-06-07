import {AppBar, Button} from "@material-ui/core";
import useStyles from './styles';

const Regions = ({regions, filterByRegion}) => {

    const classes = useStyles();

    return(
        <AppBar color="transparent" position="static" className={classes.appBar}>
            <div>
            {regions.map((region, index) => (
                <Button className={classes.filterBtn} variant="contained" key={index} onClick={() => filterByRegion(region)}>{region ? region : 'Islands'}</Button>
            ))}
            </div>
        </AppBar>
    )
}

export default Regions;