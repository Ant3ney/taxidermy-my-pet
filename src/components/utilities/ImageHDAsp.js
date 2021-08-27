import React, { useContext } from 'react';
import { GlobalContext } from '../../utilities/GlobalContex';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

export default function ImageHDAsp(props){
    const size = useContext(GlobalContext).size;
    const classes = useStyles();
    
    return(
        <CardMedia
         className={classes.media}
         image={props.src}
         title="Contemplative Reptile"
         style={{
             ...cardMedia(size),
             ...props.setStyle
         }}
        />
    );
}

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
let cardMedia = size => {
  return({
      backgroundColor: '#77b28c',
      paddingTop: '56.25%',
      height: 0,
      backgroundPositon: 'center',
      backgroundSize: 'contain',
      width: '100%'
  });
}