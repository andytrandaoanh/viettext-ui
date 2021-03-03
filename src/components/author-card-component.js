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
import { AUTHORS_URL  } from './api-config.js';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  authorcard: {
    margin: 5,
  },

}));

export default function AuthorCards() {
  const classes = useStyles();
  
  const [authorData, setAuthorData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(AUTHORS_URL);        
        setAuthorData(result.data);        
        //console.log('result', result);
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
        {authorData && authorData.length > 0  ?  authorData.map(author => (
            <Grid item key={author.id} xs={12} sm={6} md={3}>
            <Card className={classes.authorcard}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                recently added author
              </Typography>
              <Typography variant="h5" component="h2">
                {author.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {author.type === 0 ? <span>Individual</span> : <span>Association</span>}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={RouterLink} to={`/workslist/${author.id}`}>List Works</Button>
            </CardActions>
          </Card>
        </Grid>
        )) : null}
    </Grid>
    
    </Fragment>
  );
}
