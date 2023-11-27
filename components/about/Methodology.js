import React from "react";

export default function Methodology() {
  return (
    <section className="py-20 text-[var(--dark-blue)] bg-[#E6EFFF] text-2xl">
      <article className="container mx-auto flex flex-col md:flex-row gap-5 items-start">
        <div className="flex flex-col items-start">
          <img
            src="/logo_top.svg"
            alt="APILandscape logo"
            className="max-w-[300px]"
          />
          <h2 className="font-bold">Methodology</h2>
          <p className="mt-12 [text-wrap:balance]">
            <strong>Platformable’s data analyst</strong> team regularly analyzes
            the API industry and identifies new and emerging tools to include.
          </p>
        </div>
        <img
          className="w-[40%]"
          src="/methodology_hero.svg"
          alt="Platformable’s data analyst team regularly analyzes the API industry and identifies new and emerging tools to include."
        />
      </article>
    </section>
  );
}
