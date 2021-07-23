import { Grid, Card, CardHeader, IconButton, Avatar, CardMedia, makeStyles, CardContent, Typography, CardActions } from '@material-ui/core';
import { ExitToApp, MoreVert as MoreVertIcon, Save } from '@material-ui/icons'
import { red } from '@material-ui/core/colors';
import Faker from 'faker'
import { Button } from 'components/Button';
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

interface Props {

}
export const CardList = (props: Props) => {
    const classes = useStyles();
    const { commerce } = Faker;
    return (
        <Grid container spacing={3}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start">
            {[...Array(4)].map((_, idx) => (
                <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="">

                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={idx.toString()}
                            subheader="Tiêu đề phụ"

                        />
                        <CardMedia
                            className={classes.media}
                            title={commerce.productName()}
                            image={`https://picsum.photos/id/${idx}/800/800`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                Name : {commerce.productName()}
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                Material : {commerce.productMaterial()}
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                Adjective : {commerce.productAdjective()}
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textSecondary" component="div" className={classes.flexContent}>
                                Description : {commerce.productDescription()}
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
