import React, { useContext } from 'react';
import { GlobalContext } from '../../utilities/GlobalContex';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import ImageHDAsp from '../utilities/ImageHDAsp';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

export default function Landing(){
    const size = useContext(GlobalContext).size;

    const classes = useStyles();

    return (
    <div>
        <ImageHDAsp 
         src={(process.env.PUBLIC_URL + "/placeHolderImage/curly01.JPG")}
        />
    </div>
  );
}
let landingContainer = size => {

    return({
        
    })
}
let cardContainer = size => {

    return({
        width: '70%',
        maxWidth: 'unset',
        margin: 'auto',
        marginTop: '1rem'
    });
}

let cardMedia = size => {

    return({
        backgroundColor: '#77b28c',
        paddingTop: '43.75%',
        backgroundPositon: 'center',
        backgroundSize: 'contain'
    });
}

let viewPetRow = size => {

    return({
        height: '50%',
        width: '100%'
    })
}
let viewPetContainer = size => {

    return({
        height: '100%',
        display: 'flex',
        padding: 0
    })
}
let viewPetBorder = size => {

    return({
        height: '90%',
        width: '90%',
        border: '2px solid #77b28c',
        borderRadius: '15px',
        margin: 'auto'
    })
}