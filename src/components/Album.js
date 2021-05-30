import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import blockImage1 from "../images/blockchain-image-1steg.jpg";
import blockImage2 from "../images/blockchain-image-2steg.jpg";
import blockImage3 from "../images/blockchain-image-3steg.jpg";
import blockImage4 from "../images/blockchain-image-4steg.jpg";
import blockImage5 from "../images/blockchain-image-5steg.jpg";
import blockImage6 from "../images/blockchain-image-6steg.jpg";
import blockImage7 from "../images/blockchain-image-7steg.jpg";
import blockImage8 from "../images/blockchain-image-8steg.jpg";
import blockImage9 from "../images/blockchain-image-9steg.jpg";
import { Backdrop, Card, CardContent, Grid, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ProductCategories from "./onepirate/modules/views/ProductCategories";
import Link from "@material-ui/core/Link";
import Typography from "./onepirate/modules/components/Typography";
import MenuBookIcon from "@material-ui/icons/MenuBook";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "left",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Album() {
  const classes = useStyles();

  const [snackbarOpened, setSnackbarOpened] = useState(false);
  const [failedMessageDisplay, setFailedMessageDisplay] = useState(false);
  const [backdropOpened, setBackdropOpened] = useState(false);
  const [images, setImages] = useState([
    {
      image: blockImage1,
      id: "1",
    },
    {
      image: blockImage2,
      id: "2",
    },
    {
      image: blockImage3,
      id: "3",
    },
    {
      image: blockImage4,
      id: "4",
    },
    { image: blockImage5, id: "5" },
    { image: blockImage6, id: "6" },
    {
      image: blockImage7,
      id: "7",
    },
    {
      image: blockImage8,
      id: "8",
    },
    {
      image: blockImage9,
      id: "9",
    },
  ]);

  useEffect(() => {
    setSnackbarOpened(false);
    setFailedMessageDisplay(false);

    if (
      images[0].id === "1" &&
      images[1].id === "3" &&
      images[2].id === "7" &&
      images[3].id === "5" &&
      images[4].id === "9" &&
      images[5].id === "4" &&
      images[6].id === "6" &&
      images[7].id === "2" &&
      images[8].id === "8"
    ) {
      setSnackbarOpened(true);
      openBackDrop();
    } else {
      setFailedMessageDisplay(true);
    }
  }, [images]);

  const openBackDrop = () => {
    setBackdropOpened(true);
  };

  const closeBackDrop = () => {
    setBackdropOpened(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpened(false);
  };

  const onFailedSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setFailedMessageDisplay(false);
  };

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      images,
      result.source.index,
      result.destination.index
    );

    setImages(items);
  };

  const grid = 8;

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250,
    margin: "0 auto",
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/*<CameraIcon className={classes.icon} />*/}
          <Typography variant="h6" color="inherit" noWrap>
            Ryan Lynch's Website (Blockchain Challenge)
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Backdrop
          className={classes.backdrop}
          open={backdropOpened}
          onClick={closeBackDrop}
        >
          You won! Congratulations! {"FLAG{250:champic}"}
        </Backdrop>

        <Snackbar
          open={snackbarOpened}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            You got the correct answer!
          </Alert>
        </Snackbar>

        <Snackbar
          open={failedMessageDisplay}
          autoHideDuration={6000}
          onClose={onFailedSnackbarClose}
        >
          <Alert onClose={onFailedSnackbarClose} severity="error">
            You got the wrong answer!
          </Alert>
        </Snackbar>

        <div className={classes.heroContent}>
          <ProductCategories />

          <Container maxWidth="sm">
            <Typography
              variant="h4"
              marked="center"
              align="center"
              component="h2"
            >
              About Ryan Lynch
            </Typography>
            <br />
            <Typography variant="body1">
              <Card variant="outlined">
                <CardContent className={classes.cardContent}>
                  <Typography variant="body2" component="p" gutterBottom>
                    Because Lightning Network counted a central ledger, Dash
                    mining many fundamental analysis! Golem looked at the
                    automated over the counter after a oracle, so VeChain data
                    mining the algorithm of many cryptocurrency since EOS stuck
                    some unspent transaction output. Bitcoin launched a trusted
                    ERC20 token standard after many consensus process although
                    IOTA bought lots of algo-traded escrow, or ERC20 token
                    standard identified many algorithm! Ryan loves Bruce Lee!
                    Ravencoin based on lots of trusted stablecoin, and Ripple
                    generates a peer-to-peer FUD for some do your own research
                    because Augur accompanied by some address. Augur broadcast
                    many whale! Because Stellar is wary of many airdrop, Waves
                    built many digital identity behind lots of ERC20 token
                    standard.
                  </Typography>
                </CardContent>
              </Card>
            </Typography>
          </Container>
        </div>
        <Container justify="center" className={classes.cardGrid} maxWidth="md">
          <Grid>
            <Typography
              variant="h4"
              marked="center"
              align="center"
              component="h2"
            >
              Blockchain Challenge
            </Typography>
            <br />
            <Card variant="outlined">
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Instructions <MenuBookIcon />
                </Typography>
                <Typography variant="body1" gutterBottom component="p">
                  In order to be successful in this challenge, be sure to use
                  the{" "}
                  <Link
                    href="https://www.mozilla.org/en-US/firefox/new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firefox
                  </Link>{" "}
                  browser to download each picture below. You can do this by
                  right clicking an image, opening the image in a new tab, and
                  use CTRL + S (or CMD + S on Mac) to save the image in your
                  computer.
                </Typography>
                <Typography variant="body1" gutterBottom component="p">
                  Once you download each image, use this{" "}
                  <Link
                    href="https://futureboy.us/stegano/decinput.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    steganography tool
                  </Link>{" "}
                  to decode each image and find the correct order of nodes. Then
                  drag and drop the images below into the correct order to
                  complete the challenge!
                </Typography>
              </CardContent>
            </Card>
            <br />
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {images.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <CardMedia
                              className={classes.cardMedia}
                              image={images[index].image}
                              title="Image title"
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" component="p">
          Brought to you by{" "}
          <Link
            href="https://en.bitcoin.it/wiki/Genesis_block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Genesis Block
          </Link>
        </Typography>
        <Typography variant="subtitle2" align="center" component="p">
          Created by{" "}
          <Link
            href="https://www.rmit.edu.au"
            target="_blank"
            rel="noopener noreferrer"
          >
            RMIT
          </Link>{" "}
          in partnership with  <Link
            href="https://cci.calpoly.edu"
            target="_blank"
            rel="noopener noreferrer"
        >Calpoly</Link>. RMIT Team:{" "}
          <Link
            href="https://rebrand.ly/wilsonmun"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wilson Mun
          </Link>
          , Rohini Mohana Rangan, Qi Wen, Ka Lun Kevin Cheung
        </Typography>
      </footer>
    </React.Fragment>
  );
}
