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
            <section className="hero-about-page py-5 bg-white">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-8">
                        <h3 className="fw-bold text-company-color" >We track the growth of the API industry: API tools and providers are ecosystem enablers.</h3>
                        <p>We track the businesses, networks, organisations, and projects that are making it possible for global industry and the economy to move towards platform and ecosystem models.</p>
                    </div>
                    <div className="col-md-4">
                            <img src="about_section_01.png" alt="" className="img-fluid" />
                    </div>

                </div>

            </div> 
            </section>

            <section className="about-page-description  py-5">
                <div className="container">
                <div className="about-container">
                    <div className="about-description rounded shadow p-3">
                    <img src="../about_section_01.png" alt="" className="img-fluid" />
                    <p className="sm-text my-3 text-center text-company-color"> See the entire API landscape at a glance</p>
                    </div>

                    <div className="about-description rounded shadow p-3">
                    <img src="../about_section_02.png" alt="" className="img-fluid" />
                    <p className="sm-text my-3 text-center text-company-color"> Use our companies page to filter results by category, sub-category or to search for a particular API provider</p>
                    </div>


                    <div className="about-description rounded shadow p-3">
                    <img src="../about_section_03.png" alt="" className="img-fluid" />
                    <p className="sm-text my-3 text-center text-company-color">Dig deeper into each API provider and see how they are growing and supporting industry to build platforms and ecosystems</p>
                    </div>

                </div>
                </div>
            </section>

            <section className="methodology py-5 bg-white">
                <div className="container">
                    <div className="methodology-title d-flex justify-content-center align-items-center my-5">
                        <img src="../methodology_icon.png" alt="" className=" mx-2 xd-icon" />
                   
                        <h3 className="fw-bold text-center mx-2 text-company-color">Methodology</h3>
                    </div>
                    <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                        <div className="col-md-3 ">
                            <img src="../homepage/logo_dark.png" alt="" />
                        </div>
                        <div className="col-md-9 ">
                            <p className="mt-3 text-company-color">Our dataset has been built on 3 years of apidays industry analysis and data collection</p>
                        </div> 
                    </div> 
                    {/* row */}

                    <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                        <div className="col-md-3 d-flex align-items-center">
                            <img src="../about-icon1.png" alt="" className="xd-icon"/>
                            <h5 className="ms-3 fw-bold text-company-color">Industry <br />categorisations</h5>
                        </div>
                        <div className="col-md-9 ">
                            <p className="mt-3 text-company-color">We have categorised API tool providers into their predominant function, however, at times, tools have been allocated to more than one category when their feature range is sufficiently diverse</p>
                        </div> 
                    </div> 
                    {/* row */}

                    <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                        <div className="col-md-3 d-flex align-items-center">
                            <img src="../about-icon2.png" alt="" className="xd-icon"/>
                            <h5 className="ms-3 fw-bold text-company-color">What isn’t my tool listed?</h5>
                        </div>
                        <div className="col-md-9 ">
                            <p className="mt-3 text-company-color">We aim to be comprehensive in our list of all tools. Please complete our form to add your tool to our catalogue</p>
                        </div> 
                    </div> 
                    {/* row */}

                    <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                        <div className="col-md-3 d-flex align-items-center">
                            <img src="../about-icon3.png" alt="" className="xd-icon"/>
                            <h5 className="ms-3  fw-bold text-company-color">Where does the data come from?</h5>
                        </div>
                        <div className="col-md-9 ">
                            <p className="mt-3 text-company-color">We manually check each API tool provider at least once annually and we collect data on blog posts, positions vacant and new feature development on a quarterly basis. We also confirm data against industry leading datasets including Crunchbase, LinkedIn, Clearbit and API Evangelist.</p>
                        </div> 
                    </div> 
                    {/* row */}
                </div>
            </section>

            <section className="something-to-change py-5 bg-white border-top">
            <div className="container">
                <h3 className="text-center fw-bold my-5 text-company-color">See something you want to change?</h3>
                <div className="something-to-change-container">
                    <div className="change-box text-center px-5">
                    <div className="d-flex justify-content-center mb-2">
                    <img src="../about-btn1.png" alt="" className="d-block align-self-start mb-2 xd-icon" />
                   
                    </div>
                    <button className="btn-about bg-dark-orange text-white" onClick={()=>handleForm()}>Add your API tool</button>
                    </div>

                    <div className="change-box  px-5">
                    <div className="d-flex">
                    <img src="../about-btn2.png" alt="" className="align-self-start mb-3 me-3 xd-icon" />
                    <p className="sm-text pt-1 text-company-color">Report a bug including problems with the website or with the data for a specific tool provider</p>
                    </div>
                    <div className="text-center">
                    <button className="btn-about bg-dark-orange text-white" onClick={()=>handleForm()}>Report a bug</button>
                    </div>
                    </div>


                    <div className="change-box  px-5">
                    <div className="d-flex">
                    <img src="../about-btn3.png" alt="" className="align-self-start mb-3 me-3 xd-icon" /> 
                    <p className="sm-text pt-1 text-company-color">Share a new feature idea, including any additional data points you would like to see </p>
                    </div>
                    <div className="text-center">
                    <button className="btn-about bg-dark-orange text-white " onClick={()=>handleForm()}>New feature idea</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="team bg-white">
    
                <div className="container py-5">
                <h3 className="ms-3 fw-bold text-company-color text-center py-5">Our team</h3>
                    <div className="team-container">
                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/Mehdi-Medjaoui-300x300.jpg.webp" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Mehdi Medjaoui</h6>
                        <p className="sm-text text-company-color">Founder & Chairman of apidays <br />Founder of OAuth.io (acquired) <br /> mehdi@apidays.io </p>
                        </div>

                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/baptiste-parravicini-300x300.jpg.webp" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Baptiste Paravicini</h6>
                        <p className="sm-text text-company-color">Director at apidays <br />Ex Marketing at VentureBeat <br /> baptiste@apidays.io</p>                    
                        </div>

                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/oury-thomas-300x300.jpg.webp" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Oury Thomas</h6>
                        <p className="sm-text text-company-color">COO at apidays <br />    Ex GM at ChoYou  <br /> oury@apidays.io</p>
                        </div>

                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/denis-durand-300x300.jpg.webp" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Denis Durand</h6>
                        <p className="sm-text text-company-color">Chief Quality Officer at apidays <br /> Ex Events Logistics <br /> denis@apidays.io</p>
                        </div>

                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/Claire-Barrett-300x300.jpg.webp" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Claire Barrett</h6>
                        <p className="sm-text text-company-color">Strategy Translator and Women In APIs Lead</p>
                        </div>

                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/isabelle-reusa-1-300x300.jpg.webp" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Isabelle Reusa</h6>
                        <p className="sm-text text-company-color">Women in APIs Initiative <br />
Consultant in Media & Culture APIs</p>                    
                        </div>

                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/Jon-Scheele-300x300.jpg.webp" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Jon Scheele</h6>
                        <p className="sm-text text-company-color ">Connecting the digital economy with APIs</p>
                        </div>

                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/Vincenzo-Chianese-300x300.png" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Vincenzo Chianese</h6>
                        <p className="sm-text text-company-color">Software Engineer At Stoplight</p>
                        </div>


                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/Claire-Barrett-300x300.jpg.webp" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Helen Child</h6>
                        <p className="sm-text text-company-color">Co-Founder Open Banking Excellence</p>
                        </div>

                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/Saul-Caganoff.jpg" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Saul Caganoff</h6>
                        <p className="sm-text text-company-color">Principal at Deloitte <br />
AUSTRALIA <br />
Former CTO of Sixtree</p>                    
                        </div>

                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/Marjukka-Niinioja-2.jpg" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Marjukka Niinioja</h6>
                        <p className="sm-text text-company-color">Founding Partner at Osaango </p>
                        </div>

                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/Vincenzo-Chianese-300x300.png" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Patrick Fan</h6>
                        <p className="sm-text text-company-color">CEO / Chief API Strategist at beNovelty – ex-IBM Redbooks Thought Leader</p>
                        </div>

                        <div className="team-box px-2 text-center mb-3">
                        <img src="https://www.apidays.global/wp-content/uploads/2020/06/Vincenzo-Chianese-300x300.png" alt="" className="img-fluid mb-3" />
                        <h6 className="fw-bold text-center text-company-color">Simon Redfern</h6>
                        <p className="sm-text text-company-color">Product and Technical Architecture <br />
At Open Bank Project
</p>
                        </div>

                    </div>
                </div>


            </section>

            {/* container */}
        </Layout>
    )
}
