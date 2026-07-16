import AboutSide from "@/components/AboutComponent/AboutSide";

export const metadata = {
  title: "About",
  description: "Shivam Maurya's background in enterprise AI, applied AI products, technical education, and developer tooling.",
};

const page = () => {

  return (
    <div className="min-h-screen bg-[#fbfaf7]">
      <AboutSide />
    </div>
  )
}

export default page;
