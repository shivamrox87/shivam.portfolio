import WorkSide from '@/components/WorkComponent/WorkSide';


export const metadata = {
  title: "Work",
  description: "Here You Can See Shivam Projects",
};

const page = () => {
  return (
    <div className='bg-[#e9e9e7]'>
      <WorkSide />
    </div>
  )
}

export default page;