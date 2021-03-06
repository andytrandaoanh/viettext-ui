import React, { Fragment,  useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import { WORKS_URL  } from './api-config.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  workcard: {
    margin: 5,
  },

}));

export default function AuthorCards() {
  const classes = useStyles();
  
  const [workData, setAuthorData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(`${WORKS_URL}/search?recentupdate=yes&limit=100`);        
        setAuthorData(result.data);        
        console.log('result.data', result.data);
        setIsLoading(false);
 
      } catch (error) {
        setIsError(true);
      }

     
    };
 
    fetchData();
  }, []);  

  return (
    <Fragment>
    {isError && <div>Something went wrong when loading API data ...</div>}
    {isLoading && <div className={classes.root}><CircularProgress /> </div> }
    
    

    <Grid container spacing={3}>
        {workData && workData.length > 0  ?  workData.map(work => (
            <Grid item key={work.id} xs={12} sm={6} md={3}>
            <Card className={classes.workcard}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                added {moment(work.created_at).format('DD/MM/YYYY')}
              </Typography>
              <Typography variant="h5" component="h2">
                {work.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {work.signature}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={RouterLink} to={`/workcontent/${work.id}`}>List Works</Button>
            </CardActions>
          </Card>
        </Grid>
        )) : null}
    </Grid>
    
    </Fragment>
  );
}
