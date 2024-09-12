import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="md:py-10 py-2 bg-white">
      <div className="text-center container mx-auto md:py-10 py-5">
        <center><img src="/apilandscape_logo2.svg" alt="" className="text-center "/></center>
        <h1 className="text-[var(--main-blue)] text-[33px] opacity-90 text-center pt-4 pb-2 font-bold">
          A comprehensive view of all stakeholders creating the programmable
          economy
        </h1>
        <div className="text-[var(--main-blue)] text-[33px] opacity-90 flex flex-col items-center text-center mt-3 md:mt-4 font-bold">
        Thanks to our sponsor
          <img src='/logo_boomi.svg' alt="Boomi sponsor icon" width={210} height={120}/>
        </div>
      </div>
    </section>
  );
}
