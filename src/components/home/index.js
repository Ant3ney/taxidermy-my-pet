import React, { useContext, useState, useEffect } from 'react';
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
    const [xSize, setXSize] = useState(0);

    useEffect(() => {
        window.addEventListener('resize', () => {
            let newSize = 0;
            if(window.matchMedia("(max-width: 599px)").matches && window.matchMedia("(min-width: 470px)").matches){
                newSize = 1;
            }
            else if(window.matchMedia("(max-width: 470px)") && window.matchMedia("(min-width: 360px)").matches){
                newSize = 2;
            }
            else{
                newSize = 0;
            }
            setXSize(newSize);
        });
    }, []);

    const classes = useStyles();

    return (
    <div
     style={{
         ...landingContainer(size)
     }}
    >
        <Grid container spacing={3} style={{width: '100%', margin: 0}}>
            <Grid item xs={12} sm={6}>
                <Card 
                 className={classes.root}
                 style={{
                     ...cardContainer(size)
                 }}
                >
                  <CardActionArea>
                    <ImageHDAsp 
                     src={(process.env.PUBLIC_URL + "/placeHolderImage/curly01.JPG")}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Curly
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Curly looks at you with contempt
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Grid container spacing={3} style={{
                        ...viewPetRow(size),
                        ...{
                            marginTop: '1rem',
                            marginBottom: 0,
                            marginLeft: 0,
                            marginRight: 0
                        }
                 }}
                >
                    <Grid item xs={6} style={{
                        ...viewPetContainer(size, xSize)
                     }}
                    >
                        <div
                         style={{
                             ...viewPetBorder(size)
                         }}
                        >
                            <h3
                             style={{
                                 ...viewPetTitle(size)
                             }}
                            >
                                Curly
                            </h3>
                            <ImageHDAsp 
                             src={(process.env.PUBLIC_URL + "/placeHolderImage/curly01.JPG")}
                             setStyle={{
                                 ...imageHDAspStyle(size)
                             }}
                            />
                            <section
                             style={{
                                 ...viewPetButtonContainer(size)
                             }}
                            >
                                <Button 
                                 variant="outlined" 
                                 color="primary"
                                 style={{
                                     ...viewPetButton(size),
                                     ...{
                                        marginRight: 'auto'
                                     }
                                 }}
                                >
                                    View
                                </Button>
                                <Button 
                                 variant="outlined" 
                                 color="secondary"
                                 style={{
                                    ...viewPetButton(size),
                                    ...{
                                        marginLeft: 'auto'
                                    }
                                 }}
                                >
                                    Edit
                                </Button>
                            </section>
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{
                        ...viewPetContainer(size, xSize)
                     }}
                    >
                        <div
                         style={{
                             ...viewPetBorder(size)
                         }}
                        >
                            <h3
                             style={{
                                 ...viewPetTitle(size)
                             }}
                            >
                                Curly
                            </h3>
                            <ImageHDAsp 
                             src={(process.env.PUBLIC_URL + "/placeHolderImage/curly01.JPG")}
                             setStyle={{
                                 ...imageHDAspStyle(size)
                             }}
                            />
                            <section
                             style={{
                                 ...viewPetButtonContainer(size)
                             }}
                            >
                                <Button 
                                 variant="outlined" 
                                 color="primary"
                                 style={{
                                     ...viewPetButton(size),
                                     ...{
                                        marginRight: 'auto'
                                     }
                                 }}
                                >
                                    View
                                </Button>
                                <Button 
                                 variant="outlined" 
                                 color="secondary"
                                 style={{
                                    ...viewPetButton(size),
                                    ...{
                                        marginLeft: 'auto'
                                    }
                                 }}
                                >
                                    Edit
                                </Button>
                            </section>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{
                        ...viewPetRow(size),
                        ...{
                            marginTop: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                            marginRight: 0
                        }
                 }}
                >
                    <Grid item xs={6} style={{
                        ...viewPetContainer(size, xSize)
                     }}
                    >
                        <div
                         style={{
                             ...viewPetBorder(size)
                         }}
                        >
                            <h3
                             style={{
                                 ...viewPetTitle(size)
                             }}
                            >
                                Curly
                            </h3>
                            <ImageHDAsp 
                             src={(process.env.PUBLIC_URL + "/placeHolderImage/curly01.JPG")}
                             setStyle={{
                                 ...imageHDAspStyle(size)
                             }}
                            />
                            <section
                             style={{
                                 ...viewPetButtonContainer(size)
                             }}
                            >
                                <Button 
                                 variant="outlined" 
                                 color="primary"
                                 style={{
                                     ...viewPetButton(size),
                                     ...{
                                        marginRight: 'auto'
                                     }
                                 }}
                                >
                                    View
                                </Button>
                                <Button 
                                 variant="outlined" 
                                 color="secondary"
                                 style={{
                                    ...viewPetButton(size),
                                    ...{
                                        marginLeft: 'auto'
                                    }
                                 }}
                                >
                                    Edit
                                </Button>
                            </section>
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{
                        ...viewPetContainer(size, xSize)
                     }}
                    >
                        <div
                         style={{
                             ...viewPetBorder(size)
                         }}
                        >
                            <h3
                             style={{
                                 ...viewPetTitle(size)
                             }}
                            >
                                Curly
                            </h3>
                            <ImageHDAsp 
                             src={(process.env.PUBLIC_URL + "/placeHolderImage/curly01.JPG")}
                             setStyle={{
                                 ...imageHDAspStyle(size)
                             }}
                            />
                            <section
                             style={{
                                 ...viewPetButtonContainer(size)
                             }}
                            >
                                <Button 
                                 variant="outlined" 
                                 color="primary"
                                 style={{
                                     ...viewPetButton(size),
                                     ...{
                                        marginRight: 'auto'
                                     }
                                 }}
                                >
                                    View
                                </Button>
                                <Button 
                                 variant="outlined" 
                                 color="secondary"
                                 style={{
                                    ...viewPetButton(size),
                                    ...{
                                        marginLeft: 'auto'
                                    }
                                 }}
                                >
                                    Edit
                                </Button>
                            </section>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}
let landingContainer = size => {

    return({
        
    })
}
let cardContainer = size => {

    return({
        width: '100%',
        maxWidth: 'unset',
        margin: 'auto',
        marginTop: '1rem'
    });
}

let cardMedia = size => {

    return({
        backgroundColor: '#77b28c',
        paddingTop: '56.25%',
        height: 0,
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
let viewPetContainer = (size, xSize) => {
    let minHeight;
    if(xSize === 1){
        minHeight = '200px';
    }
    else if(xSize === 2){
        minHeight = '150px';
    }
    else{
        minHeight = '131px';
    }

    return({
        height: '100%',
        display: 'flex',
        padding: 0,
        minHeight: minHeight
    })
}
let viewPetBorder = size => {

    return({
        height: '90%',
        width: '90%',
        border: '2px solid #77b28c',
        borderRadius: '15px',
        margin: 'auto',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '5px',
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingTop: 0
    })
}
let viewPetTitle = size => {

    return({
        marginTop: '0',
        marginBottom: 0,
        textAlign: 'center',
        fontSize: '15px'
    })
}
let imageHDAspStyle = size => {
    return({
        borderRadius: '12px',
        width: 'auto'
    });
}
let viewPetButtonContainer = size => {

    return({
        width: 'auto',
        height: '100%',
        display: 'flex',
        marginLeft: '10px',
        marginRight: '10px'
    })
}

let viewPetButton = size => {

    return({
        fontSize: '10px',
        height: '20px',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '45%',
        minWidth: 0
    })
}