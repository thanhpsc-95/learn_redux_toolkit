import { Grid, Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, makeStyles } from '@material-ui/core'
import { Save, ExitToApp, MoreVert as MoreVertIcon } from '@material-ui/icons'
import { Button } from 'components/Button'
import useFetch from './../../hooks/useFetch';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        [theme.breakpoints.down("md")]: {
            maxWidth: 200
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    flexContent: {
        flexGrow: 1,
    }
}));

const Countries = () => {
    const classes = useStyles();
    const { loading, data, error } = useFetch(`https://restcountries.eu/rest/v2/all`)
    if (loading) return <p>Loading</p>
    if (error) return <p>Something when wrong</p>
    return (
        <Grid container spacing={3}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start">
            {data.map((country: any, idx) => (
                <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar aria-label={country.name} src={country.flag}>
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={country.name}
                            subheader={country.nativeName}

                        />
                        <CardMedia
                            className={classes.media}
                            title={country.name}
                            image={country.flag}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body2" color="textPrimary" component="p">
                                Name : {country.name}
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textPrimary" component="p">
                                Capital : {country.capital}
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textPrimary" component="div" className={classes.flexContent}>
                                Population : {country.population}
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textPrimary" component="p">
                                Region : {country.region}
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textPrimary" component="div" className={classes.flexContent}>
                                Subregion : {country.subregion}
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="info" startIcon={<Save />} fullWidth>Save</Button>
                            <Button variant="contained" color="error" startIcon={<ExitToApp />} fullWidth>Exit</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default Countries
