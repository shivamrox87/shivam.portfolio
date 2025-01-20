import BookComponent from '@/components/BookComponent/BookComponent'

export const metadata = {
  title: "Book",
  description: "This is Shivam Book",
};

const page = () => {
  return (
    <div className='bg-[#e9e9e7]'>
      <BookComponent />
    </div>
  )
}

export default page
