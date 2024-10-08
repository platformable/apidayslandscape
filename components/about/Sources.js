import React from "react";
import Link from "next/link";

export default function Sources() {
  return (
    <>
      <section className="py-20  bg-white text-[var(--main-blue)] text-2xl">
        <article article className="container mx-auto ">
          <h2 className="font-bold text-3xl mb-14 text-center md:text-left md:[text-wrap:balance]">
            Data in the API Landscape is sourced from three main sources:
          </h2>

          <div className="grid gap-y-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-x-7">
              <span className="text-[var(--main-green)] text-5xl text-center font-bold">
                1
              </span>
              <p className="[text-wrap:balance] text-center md:text-left leading-normal text-xl ">
                <strong>Platformable reviews</strong> the tool’s website and
                documentation, scans LinkedIn for headcount, calculates the
                diversity of founding and management teams, and categorizes the
                tools according to the below taxonomy.
              </p>
              <img src="/methodology_01.png" alt="Step 1" className="w-[50%]"/>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-x-7">
              <span className="text-[var(--main-green)] text-5xl text-center font-bold">
                2
              </span>
              <p className="[text-wrap:balance] text-center md:text-left leading-normal text-xl ">
                <strong>Crunchbase data</strong> is used to identify the
                founders, and key financing metrics ( total funding to date,
                last funding date and any IPO data if relevant).
              </p>
              <img src="/methodology_02.png" alt="Step 2" className="w-[50%]"/>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-x-7">
              <span className="text-[var(--main-green)] text-5xl text-center font-bold">
                3
              </span>
              <p className="[text-wrap:balance] text-center md:text-left leading-normal  text-xl">
                <strong>Crowd-sourced updates:</strong> API tool providers
                themselves contribute to the datasets by completing a form,
                which is reviewed by Platformable’s data analyst team and then
                added to the database.
              </p>
              <img src="/methodology_03.png" alt="Step 3" className="w-[50%]"/>
            </div>
          </div>
        </article>
      </section>
      
      <section className=" bg-[#E1F6F8]">
      <div className="container mx-auto text-[var(--main-blue)] text-2xl py-14">
        In addition, logos are sourced either from the tool providers directly
        or from the{" "}
        <Link href={"https://clearbit.com/logo"}>
          <span className="font-bold underline text-[var(--main-blue)]">Clearbit logo tool.</span>
        </Link>
      </div>
      </section>
      
    </>
  );
}
