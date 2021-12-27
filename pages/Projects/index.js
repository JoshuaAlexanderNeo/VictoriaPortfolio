import Head from 'next/head'
import Image from 'next/image'
import TopBar from '../../components/TopBar'
import * as React from 'react';
import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import Vardzia_hotel_1 from '../../public/g960.jpg';
import Vardzia_hotel_2 from '../../public/g2570.png';
import Vardzia_hotel_3 from '../../public/g3297.png';
import Vardzia_hotel_4 from '../../public/g2222.png';

import pasha_1 from '../../public/pasha_1.jpg';

import { Container, Card, Grid, Box, Paper, Typography, Divider} from '@mui/material';
import ProjectAccordian from '../../components/ProjectAccordian';
import AccordianOrGrid from '../../components/AccordianOrGrid';


function getWindowDimensions() {
  if (typeof window !== 'undefined') {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  }
  } else {
  return {
    "width": 0,
    "height": 0
  }
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Home() {
  const { width=0, height=0 } = useWindowDimensions();
  console.log(width, height);
  const vardzia = [{"img": Vardzia_hotel_2, "title": "A B/W render of Varzia Hotel"}, {"img": Vardzia_hotel_3, "title": "A B/W render of Varzia Hotel"}, {"img": Vardzia_hotel_4, "title": "Floorplan of Vardzia Hotel"}];
  //const pasha = [{"img": pasha_1, "title": "A B/W render of Pasha Hotel"}];
  return (
    <>
      <TopBar />
      <Container>
        {/* I thought there were more projects. Can reuse this code when there are at least 3 projects. Instead I am going BIGMODE. */}
        {/* <Grid container spacing={7}>
          <Grid item xs={12} gutterRight sm={6} md={4}>
            <ProjectCard
              title="Vardzia Hotel"
              subtitle="Hotel in Abastumani"
              image={Vardzia_hotel_1}
              alt="Render of Vardzia Hotel"
            />
          </Grid>
          <Grid item xs={12} gutterRight sm={6} md={4}>
            <ProjectCard
              title="Pasha Bank"
              subtitle="Bank in Tbilisi"
              image={Vardzia_hotel_1}
              alt="Render of Pasha Bank"
            />
          </Grid>
          <Grid item xs={12} gutterRight sm={6} md={4}>
            <ProjectCard
              title="Vardzia Hotel"
              subtitle="Hotel in Abastumani"
              image={Vardzia_hotel_1}
              alt="Render of Vardzia Hotel"
            />
          </Grid>
          <Grid item xs={12} gutterRight sm={6} md={4} >
            <ProjectCard
              title="Vardzia Hotel"
              subtitle="Hotel in Abastumani"
              image={Vardzia_hotel_1}
              alt="Render of Vardzia Hotel"
            />
          </Grid>
        </Grid> */}

        {/* VARDZIA HOTEL */}
        <Paper sx={{mt: 15, mb: 10}}>
          <div style={{overflow: 'hidden', padding: "10px"}}>
            <Image src={Vardzia_hotel_1} alt="Render of Vardzia Hotel" quality={90} objectFit="cover" placeholder="blur" priority  sx={{ mb: "20px" }}/>
          </div>
          <div style={{padding: "10px"}}>
          <Typography variant="h2" gutterBottom>Vardzia Hotel</Typography>
          <Typography component={'span'} variant="body2" gutterBottom sx={{ml: 2}}>
            The Vardzia Hotel is located in Abastumani, Georgia and contains three buildings: a new
            building that I helped design and two others that were being renovated by a
            different company.
            <br></br>
            During the process of this project I was in charge of the following parts:
            <ol>
              <li>BIM of the old buildings (except for the exterior)</li>
              <li>BIM of the exterior and ramps of the new building</li>
              <li>Site Plan</li>
              <li>Graphic visualisation of the plans of old buildings</li>
              <li>Every section of the new building (including stair details)</li>
            </ol>
            Working on this project, I used: Revit, AutoCAD, and Illustrator.
            </Typography>
            <br></br>
            <Typography variant="caption">
            <i>The render is shown only to help you understand the scale of the project. It
            is done by another person.</i>
            </Typography>
            <br></br>
            <br></br>
            <AccordianOrGrid width={width} imageList={vardzia}/>
          
          </div>
        </Paper>
        <Paper sx={{mb: 5}}>
        <div style={{overflow: 'hidden', padding: "10px"}}>
            <Image src={pasha_1} alt="Render of Pasha Bank" quality={90} objectFit="cover" placeholder="blur" sx={{ mb: "20px" }} />
          </div>
          <div style={{padding: "10px"}}>
          <Typography variant="h2" gutterBottom>Pasha Bank</Typography>
          <Typography component={'span'} variant="body2" gutterBottom>
          The Pasha Bank project is located in Tbilisi and contains two buildings : a bank and a hotel.
          <br></br>
          During the process of this project I was in charge of the following parts:
          <ol>
            <li>BIM of the bank</li>
            <li>Site Plan</li>
            <li>Graphic visualisation of the plans of the bank</li>
            <li>Every section of both buildings</li>
            <li>Every elevation of both buildings</li>
            <li>Detail drawings of stairs and ramps</li>
          </ol>
          <br></br>
          Working on this project, I used: Revit, AutoCAD, and Illustrator.
          </Typography>
          <br></br>
            <Typography variant="caption">
            <i>The render is shown only to help you understand the scale of the project. It
            is done by another person.</i>
            </Typography>
            <br></br>
            <br></br>
            <AccordianOrGrid width={width} imageList={vardzia}/>
          </div>
        </Paper>

      </Container>

    </>
  )
}


