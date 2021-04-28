import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
import { Backdrop, Grid, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Album() {
  const classes = useStyles();

  const [answer, setAnswer] = useState("");
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

  useEffect(() => {
    // console.log("Hint: https://futureboy.us/stegano/decinput.html");
    // console.log("Hint: https://en.wikipedia.org/wiki/Steganography");
    console.log("steg steg steg");

    // fetchImages().then((allImages) => {
    //   setImages(allImages);
    // });

    // setInterval(() => {
    // fetchImages().then((allImages) => {
    //   setImages(allImages);
    // });
    // }, 15000);

    //   async function fetchImages() {
    //     const randomIndexForCryptoImg = getRandomIntInclusive(
    //       0,
    //       cards.length - 1
    //     );
    //
    //     const allImages = await Promise.all(
    //       cards.map(async (card, index) => {
    //         if (index === randomIndexForCryptoImg) {
    //           return cryptoImg;
    //         }
    //         const response = await axios.get(
    //           `https://source.unsplash.com/random/200x200?sig=${index}`
    //         );
    //         return response.request.responseURL;
    //       })
    //     );
    //     return allImages;
    //   }
  }, []);

  const openBackDrop = () => {
    setBackdropOpened(true);
  };

  const closeBackDrop = () => {
    setBackdropOpened(false);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const ANSWER = "38iW1h8gCihwEtKrWUcGzV8RaCNFHsWFrJ";

    if (answer === ANSWER) {
      setSnackbarOpened(true);
    } else {
      setFailedMessageDisplay(true);
    }
  };

  const answerChanged = (event) => {
    setAnswer(event.target.value);
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
            Ryan Lynch Apartment (Blockchain Challenge)
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Backdrop
          className={classes.backdrop}
          open={backdropOpened}
          onClick={closeBackDrop}
        >
          You won! Congratulations!
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

        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            {/*TODO commented out as we are using another type of challenge*/}
            {/*<form onSubmit={onFormSubmit}>*/}
            {/*  <TextField*/}
            {/*    id="outlined-basic"*/}
            {/*    label="Answer for challenge"*/}
            {/*    variant="outlined"*/}
            {/*    value={answer}*/}
            {/*    onChange={answerChanged}*/}
            {/*  />*/}
            {/*  <Button*/}
            {/*    type="submit"*/}
            {/*    value="Submit"*/}
            {/*    variant="contained"*/}
            {/*    color="primary"*/}
            {/*  >*/}
            {/*    Submit*/}
            {/*  </Button>*/}
            {/*</form>*/}
          </Container>
          <Container maxWidth="sm">
            {/*<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>*/}
            {/*    Album layout*/}
            {/*</Typography>*/}
            {/*<Typography variant="h5" align="center" color="textSecondary" paragraph>*/}
            {/*    Something short and leading about the collection below—its contents, the creator, etc.*/}
            {/*    Make it short and sweet, but not too short so folks don&apos;t simply skip over it*/}
            {/*    entirely.*/}
            {/*</Typography>*/}
            <Typography variant="body1">
              Because Lightning Network counted a central ledger, Dash mining
              many fundamental analysis! Golem looked at the automated over the
              counter after a oracle, so VeChain data mining the algorithm of
              many cryptocurrency since EOS stuck some unspent transaction
              output. Bitcoin launched a trusted ERC20 token standard after many
              consensus process although IOTA bought lots of algo-traded escrow,
              or ERC20 token standard identified many algorithm! Ravencoin based
              on lots of trusted stablecoin, and Ripple generates a peer-to-peer
              FUD for some do your own research because Augur accompanied by
              some address. Augur broadcast many whale! Because Stellar is wary
              of many airdrop, Waves built many digital identity behind lots of
              ERC20 token standard.
            </Typography>

            {/*<div className={classes.heroButtons}>*/}
            {/*    <Grid container spacing={2} justify="center">*/}
            {/*        <Grid item>*/}
            {/*            <Button variant="contained" color="primary">*/}
            {/*                Main call to action*/}
            {/*            </Button>*/}
            {/*        </Grid>*/}
            {/*        <Grid item>*/}
            {/*            <Button variant="outlined" color="primary">*/}
            {/*                Secondary action*/}
            {/*            </Button>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</div>*/}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid justify="center">
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
      {/* Footer */}
      {/*<footer className={classes.footer}>*/}
      {/*    <Typography variant="h6" align="center" gutterBottom>*/}
      {/*        Footer*/}
      {/*    </Typography>*/}
      {/*    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">*/}
      {/*        Something here to give the footer a purpose!*/}
      {/*    </Typography>*/}
      {/*    <Copyright />*/}
      {/*</footer>*/}
      {/* End footer */}
    </React.Fragment>
  );
}
