import AboutSide from "@/components/AboutComponent/AboutSide";

export const metadata = {
  title: "About",
  description: "The story, experience, principles, and technical focus behind Shivam Maurya's work in AI products and developer tooling.",
};

const page = () => {

  return (
    <div className='flex flex-col items-center bg-[#e9e9e7] gap-0 h-min overflow-hidden p-0 relative min-h-screen w-auto'>
      <AboutSide />
    </div>
  )
}

export default page;
