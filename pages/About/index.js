import { Typography, Container, Paper, Grid, Box, Divider, Card, CardMedia, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material'
import Head from 'next/head'
import TopBar from '../../components/TopBar'
import Image from 'next/image'
import LinearProgress from '@mui/material/LinearProgress';

import headshot from '../../public/headshot.jpeg'
import ns from '../../public/ns.jpeg'
import gtu from '../../public/gtu.jpeg'
import ielts from '../../public/ielts.png'
import { flexbox } from '@mui/system'

import ai from '../../public/ai.png'
import autocad from '../../public/autocad.jpg'
import id from '../../public/id.png'
import photoshop from '../../public/photoshop.jpg'
import sketchup from '../../public/sketchup.png'
import revit from '../../public/revit.png'

export default function Home() {
  return (
    <>
      <TopBar />
      <Container disableGutters={true} sx={{ mt: 7.1 }}>
        <Paper>
          <Typography style={{ paddingTop: '50px', paddingBottom: "30px" }} align='center' variant="h3">About me</Typography>
          <Grid style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} container spacing={3} sx={{ padding: '10px' }}>

            <Grid item xs={12} md={7} style={{ marginBottom: "30px" }}>
              <Typography variant="h4">Hi! I&apos;m Victoria. </Typography>
              <Typography variant="body2">I am a junior architect currently located in Tbilisi, Georgia. </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <div style={{ display: "inline-block", borderRadius: '50%', height: '300px', width: '300px', MozBorderRadius: '1em', overflow: 'hidden', justifyContent: 'center' }}>
                <Image src={headshot} alt="Headshot of Victoria Sukiasova" quality={90} objectFit="cover" placeholder="blur" priority />
              </div>
            </Grid>
            <Grid item xs={12} md={2}></Grid>
          </Grid>
          <Grid container spacing={3} sx={{ padding: '10px' }} >
            <Grid item xs={12} md={6}>
              <Card style={{ padding: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography align='center' variant="h4">Education</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="GTU" variant="square" sx={{ bgcolor: "lightblue" }}>
                        <Image src={gtu} alt="Georgian Technical University" quality={90} objectFit="cover" layout="fill" placeholder="blur" priority />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Georgian Technical University
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography
                            sx={{ display: 'inline', ml: 1 }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                          >
                            Bachelor of Architecture
                          </Typography>
                          <br />
                          <Typography variant="caption" sx={{ ml: 1 }}>
                            2015 - 2019
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="IELTS" variant="square" sx={{ bgcolor: "red" }}>
                        <Image src={ielts} alt="IELTS" quality={90} objectFit="cover" layout="fill" placeholder="blur" priority />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          IELTS Academic Test
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography
                            sx={{ display: 'inline', ml: 1 }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                          >
                            Score: 7.5/9
                          </Typography>
                          <br />
                          <Typography variant="caption" sx={{ ml: 1 }}>
                            2020
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card style={{ padding: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="h4">Experience</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="NS Studio" variant="square" sx={{ bgcolor: "lightblue" }}>
                        <Image src={ns} alt="NS Studio" quality={90} objectFit="cover" layout="fill" placeholder="blur" priority />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          NS Studio Architecture
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography
                            sx={{ display: 'inline', ml: 1 }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                          >
                            Interior Designer
                          </Typography>
                          <br />
                          <Typography variant="caption" sx={{ ml: 1 }}>
                            April 2021 - Present
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Giorgi Khmaladze" variant="square" sx={{ bgcolor: "red" }}>GK</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Giorgi Khmaladze Architects
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography
                            sx={{ display: 'inline', ml: 1 }}
                            component="span"
                            variant="body1"
                            color="text.primary"
                          >
                            Architectural Assistant
                          </Typography>
                          <br />
                          <Typography variant="caption" sx={{ ml: 1 }}>
                            Jun 2019 - April 2021
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
              </Card>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card style={{ padding: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography sx={{ mb: 4 }} variant="h3">Skills</Typography>
              <Grid container spacing={3}>
                <Grid item xs={6} md={4}>
                  <Card style={{ padding: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <CardMedia title="Revit">
                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image src={revit} alt="Revit logo" width={200} height={200} />
                      </div>
                    </CardMedia>
                    <Typography variant="h5">Revit</Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Card style={{ padding: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <CardMedia title="AutoCAD">
                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image src={autocad} alt="AutoCAD logo" width={200} height={200} />
                      </div>
                    </CardMedia>
                    <Typography variant="h5">AutoCAD</Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Card style={{ padding: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <CardMedia title="SketchUp">
                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image src={sketchup} alt="SketchUp logo" width={200} height={200} />
                      </div>
                    </CardMedia>
                    <Typography variant="h5">SketchUp</Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Card style={{ padding: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <CardMedia title="InDesign">
                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image src={id} alt="InDesign logo" width={200} height={200} />
                      </div>
                    </CardMedia>
                    <Typography variant="h5">InDesign</Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Card style={{ padding: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <CardMedia title="Illustrator">
                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image src={ai} alt="Illustrator logo" width={200} height={200} />
                      </div>
                    </CardMedia>
                    <Typography variant="h5">Illustrator</Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} md={4}>
                  <Card style={{ padding: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <CardMedia title="Photoshop">
                      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image src={photoshop} alt="Photoshop logo" width={200} height={200} />
                      </div>
                    </CardMedia>
                    <Typography variant="h5">Photoshop</Typography>
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Card style={{ padding: "15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography sx={{ mb: 1, mt: 5 }} variant="h3">Languages</Typography>
                <Card style={{ padding: "15px", height: '100%', width: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ mr: 2.5 }} variant="h5">Russian</Typography>
                      <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={100} />
                      </Box>
                    </div>
                    <br/>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ mr: 1.2  }} variant="h5">Georgian</Typography>
                      <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={90} />
                      </Box>
                    </div>
                    <br/>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ mr: 3.35}} variant="h5">English</Typography>
                      <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={90} />
                      </Box>
                    </div>
                    <br/>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ mr: 2.3 }} variant="h5">German</Typography>
                      <Box sx={{ width: '100%' }}>
                        <LinearProgress variant="determinate" value={50} />
                      </Box>
                    </div>
                  </div>
                </Card>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}
