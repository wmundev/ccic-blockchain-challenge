import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import axios from "axios";
import cryptoImg from "../images/crytocurrency-bitcoin-reduced-steg.jpg";
import { getRandomIntInclusive } from "../services/Number";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  const [images, setImages] = useState(null);

  useEffect(() => {
    console.log("Hint: https://futureboy.us/stegano/decinput.html");
    console.log("Hint: https://en.wikipedia.org/wiki/Steganography");

    setInterval(() => {
      fetchImages().then((allImages) => {
        setImages(allImages);
      });
    }, 15000);

    async function fetchImages() {
      const randomIndexForCryptoImg = getRandomIntInclusive(
        0,
        cards.length - 1
      );

      const allImages = await Promise.all(
        cards.map(async (card, index) => {
          if (index === randomIndexForCryptoImg) {
            return cryptoImg;
          }
          const response = await axios.get(
            `https://source.unsplash.com/random/200x200?sig=${index}`
          );
          return response.request.responseURL;
        })
      );
      return allImages;
    }
  }, []);

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
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            {/*<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>*/}
            {/*    Album layout*/}
            {/*</Typography>*/}
            {/*<Typography variant="h5" align="center" color="textSecondary" paragraph>*/}
            {/*    Something short and leading about the collection below—its contents, the creator, etc.*/}
            {/*    Make it short and sweet, but not too short so folks don&apos;t simply skip over it*/}
            {/*    entirely.*/}
            {/*</Typography>*/}
            <Typography variant="p">
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
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={images ? images[index] : ""}
                    title="Image title"
                  />
                  {/*<CardContent className={classes.cardContent}>*/}
                  {/*    <Typography gutterBottom variant="h5" component="h2">*/}
                  {/*        Heading*/}
                  {/*    </Typography>*/}
                  {/*    <Typography>*/}
                  {/*        This is a media card. You can use this section to describe the content.*/}
                  {/*    </Typography>*/}
                  {/*</CardContent>*/}
                  {/*<CardActions>*/}
                  {/*    <Button size="small" color="primary">*/}
                  {/*        View*/}
                  {/*    </Button>*/}
                  {/*    <Button size="small" color="primary">*/}
                  {/*        Edit*/}
                  {/*    </Button>*/}
                  {/*</CardActions>*/}
                </Card>
              </Grid>
            ))}
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
