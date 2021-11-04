import React from 'react'

export default function HomeHero() {
    return (
        <div class="px-4 py-5  text-center">
        <h1 class="display-5 fw-bold text-white">Hello,</h1>
        <h1 class="display-5 fw-bold text-white">Welcome to</h1>
        <h3 className="text-center bg-home-keyindicator d-inline-block px-5 py-3 text-white">apidays landscape</h3>
        <p className="text-center text-white">KEY INDICATORS</p>
        <div className="text-center my-3"><img src="../homepage/zig_zag line.png" alt="" width="125px"/></div>
       

        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="row">
              <div className="col">
                <img src="../homepage/apidays_home___OVERALL FUNDING.png" alt="" />
                <p className="text-white sm-text my-2 px-2">OVERALL FUNDING</p>
              </div>
              <div className="col">
              <img src="../homepage/apidays_home___NEW FEATURES.png" alt="" />
                <p className="text-white sm-text my-2 px-2">NEW <br /> FEATURES</p>
              </div>
              <div className="col">
              <img src="../homepage/apidays_home___INDUSTRY SPECIFIC SOLUTIONS.png" alt="" />
                <p className="text-white sm-text my-2 px-2">INDUSTRY SPECIFIC SOLUTION</p>
              </div>
              <div className="col">
              <img src="../homepage/apidays_home___SECURITY INCIDENTS.png" alt="" />
                <p className="text-white sm-text my-2 px-2">SECURITY INCIDENTS</p>
              </div>
              <div className="col">
              <img src="../homepage/apidays_home___REVENUE BY CATEGORY.png" alt="" />
                <p className="text-white sm-text my-2 px-2">REVENUE BY CATEGORY</p>
              </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    )
}
