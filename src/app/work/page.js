import WorkSide from '@/components/WorkComponent/WorkSide';


export const metadata = {
  title: "Work",
  description: "Selected enterprise AI, applied AI, and independent developer-product work by Shivam Maurya.",
};

const page = () => {
  return (
    <div className="bg-[#fbfaf7]">
      <WorkSide />
    </div>
  )
}

export default page;
