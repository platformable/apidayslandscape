import React from "react";

export default function Taxonomy() {
  return (
    <section id="taxonomy" className="bg-white border-t-2 border-[var(--orange)]">
      <div className="container mx-auto py-20">
        <div className="taxonomy">
          <img src="/logo_top.svg" alt="APIDays" />
          <h3 className="font-bold text-[#083ECB] text-2xl">Taxonomy</h3>
          <p className="text-[#083ECB] mt-10 text-xl">
            The revised API industry taxonomy was introduced in 2023 to reflect
            current and expected growth across the API industry. It was created
            by Mehdi Medjoaui (apidays) and Mark Boyd (Platformable).
          </p>
        </div>

        <div id="founder-director" className="py-20">
          <div className="team grid md:grid-cols-[1fr_3fr_1fr] grid-cols-1">
            <div></div>
            <div className="flex gap-x-20 justify-center">
              <div className="grid justify-center text-center gap-y-5">
                <img src="/Medhi.png" alt="" className="" />
                <p className="text-[#083ECB]  text-xl font-bold">
                  Mehdi Medjoaui
                </p>
                <p className="text-[#083ECB] text-xl ">Founder of apidays</p>
              </div>
              <div className="grid justify-center text-center text-center gap-y-5">
                <img src="/Mark.png" alt="" className="" />
                <p className="text-[#083ECB]  text-xl font-bold">Mark Boyd</p>
                <p className="text-[#083ECB] text-xl ">
                  Director at Platformable
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="bg-[#E6EFFF] p-7 rounded-lg">
          <p className="text-[#083ECB] font-bold text-xl">
            The model draws on an understanding of ecosystem models to identify
            all API-related components that are typically accessed and used as
            value is generated in the use of APIs.
          </p>
        </div>

        <p className="text-[#083ECB] text-xl py-10">This includes compliance starting points such as regulations that may mandate the use of APIs, data and API governance practices aimed at using APIs consistently and strategically, API specifications and tools to define and create APIs, common (often cloud-based) infrastructure used in API deployments, source code, design and other tooling to create APIs, developer resources to support API use, API consumption tooling, and Product APIs that are used as composable resources in a wider value chain. API knowledge providers such as media, researchers, and associations are also recognised.</p>

        <img src="/APIIndustry2023.svg" alt="" />

        <p className="text-[#083ECB] text-xl pt-10">The taxonomy has been created to align with other models of describing the API industry, including Postman’s API landscape, Gartner’s API Lifecycle Management, and the API lifecycle model described by Medjaoui, Wilde, Mitra & Amundsen in Continuous API Management. A matrix showing the alignment and diversification of the models is provided below:</p>
      </div>

        <div className="container mx-auto m-0">

      <iframe width="100%" height="450px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vReT6V80PZt5he2SAOfZgTDvetsI9VQNpS1yf5MrK8IJ8nEkxz3tMekJKBO9rMCT2EwgxqOryPngH-s/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        </div>
    </section>
  );
}
