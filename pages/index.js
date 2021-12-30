import { Container } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import TopBar from '../components/TopBar'
import Hero from '../components/Hero'

export default function Home() {
  
  return (
    <>
    <TopBar/>
    <Hero title="Victoria Sukiasova" subtitle="Junior Architect"/>
    </>
  )
}
