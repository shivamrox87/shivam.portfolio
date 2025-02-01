import BookComponent from '@/components/BookComponent/BookComponent'

export const metadata = {
  title: "Book",
  description: "This is Shivam Book",
};

const page = () => {
  return (
    <div className='bg-[#e9e9e7] min-h-screen'>
      <div className='container mx-auto p-4'>
        <div className='w-full h-full'>
          <BookComponent />
        </div>
      </div>
    </div>
  )
}

export default page
