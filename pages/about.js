import React from 'react'
import Layout from '../components/Layout'
import Head from "next/head";

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
            <section className="hero-about-page  py-10 bg-white text-[var(--main-blue)]">
                <article className='container mx-auto'>
                    <p>We track the businesses, networks, organisations, and projects that are making it possible for global industry and the economy to move towards platform and ecosystem models.</p>
                </article>
            </section>
            
            <section className='bg-[var(--dark-blue)] text-[var(--main-blue)]'>
                <article className='container mx-auto'>
                    <img src="" alt=""/>
                    <p></p>
                    <img src="" alt=""/>
                </article>
            </section>

            <section className="about-page-description bg-white  py-5 text-[var(--main-blue)]">
                <div className="container mx-auto">
                <div className="grid">
                    <div className="about-description flex gap-5">
                        <span className='text-[var(--orange)] font-bold text-3xl'>1</span>
                    <img src="" alt="" className="img-fluid" />
                    <p className="sm-text my-3 text-center text-company-color"> See the entire API landscape at a glance</p>
                    </div>

                    <div className="about-description flex gap-5">
                        <span className='text-[var(--orange)] font-bold text-3xl'>2</span>
                    <img src="" alt="" className="img-fluid" />
                    <p className="sm-text my-3 text-center text-company-color"> Use our companies page to filter results by category, sub-category or to search for a particular API provider</p>
                    </div>


                    <div className="about-description flex gap-5">
                        <span className='text-[var(--orange)] font-bold text-3xl'>3</span>
                    <img src="" alt="" className="img-fluid" />
                    <p className="sm-text my-3 text-center text-company-color">Dig deeper into each API provider and see how they are growing and supporting industry to build platforms and ecosystems</p>
                    </div>

                </div>
                </div>
            </section>

            <section className="py-5 bg-white text-[var(--main-blue)]">
                <article className='container mx-auto'>
                    <div className='font-bold text-xl'>APilandscape taxonomy</div>
                    <div className="team-container ">
                        <div className="flex flex-col items-center px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/Mehdi-Medjaoui-300x300.jpg.webp" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center ">Mehdi Medjaoui</h6>
                        <p className="sm-text ">Founder of apidays</p>
                        </div>

                        <div className="flex flex-col items-center px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/baptiste-parravicini-300x300.jpg.webp" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center ">Mark Boyd</h6>
                        <p className="sm-text ">Director at Platformable</p>                    
                        </div>

                      

                    </div>
                </article>
                <article>
                    <p></p>
                    <div className='bg-[var(--dark-blue)] p-6 text-white'></div>
                </article>
            </section>

           

        </Layout>
    )
}
