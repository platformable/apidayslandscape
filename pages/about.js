import React from 'react'
import Layout from '../components/Layout'
import Head from "next/head";
import Hero from '../components/about/Hero';
import Methodology from '../components/about/Methodology';
import Taxonomy from '../components/about/Taxonomy';
import Sources from '../components/about/Sources';
import TechnicalDeployment from '../components/about/TechnicalDeployment';

export default function about() {

    const handleForm = ()=>{

        if(typeof window !== "undefined"){
          window.open(
            "https://airtable.com/shr07pWSbRnQfnZZd",
            '_blank' 
          );
        }
        
      }


    return (
        <Layout>
             <Head>
                <title>apidays landscape</title>
                <meta name="description" content="apidays landscape" />
            </Head>
            <Hero />
            <Methodology />
            <Sources />
            <Taxonomy />
            <TechnicalDeployment />
           

        </Layout>
    )
}
