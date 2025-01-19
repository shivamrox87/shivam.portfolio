import Header from "@/components/Header";
import { blogs } from "@/server/data";
import Link from "next/link";

export async function generateMetadata({ params }) {
    const { slug } = params;

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: 'Blog Not Found',
            description: 'The requested blog does not exist.',
            openGraph: {
                title: 'Blog Not Found',
                description: 'The requested blog does not exist.',
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Blog Not Found',
                description: 'The requested blog does not exist.',
            },
        };
    }

    const excerpt = blog.content.split(' ').slice(0, 10).join(' ') + '...';

    return {
        title: blog.blogHeading,
        description: `${excerpt}`,
        openGraph: {
            title: blog.blogHeading,
            description: `${excerpt}`,
            images: [
                {
                    url: blog.imageUrl,
                    alt: blog.blogHeading,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.blogHeading,
            description: `${excerpt}`,
            images: [blog.imageUrl],
        },
    };
}

const BlogReadPage = ({ params }) => {
    const { slug } = params;

    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return <p>Blog not found.</p>;
    }

    const randomBlogs = blogs.filter(b => b.slug !== slug).sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <div className="bg-[#e9e9e7] w-full flex flex-col items-center">
            <div className='w-full border-b border-[#0d0d0d]'>
                <div className='contents'>
                    <header className='w-full relative py-[30px] px-10 flex flex-row items-center justify-center flex-nowrap gap-[10px] overflow-hidden backdrop-blur-[10px] opacity-100'>
                        <div className='relative opacity-100 flex flex-row items-center justify-center gap-[30px] flex-nowrap grow max-w-[1200px] w-[1px] overflow-hidden p-0'>
                            <div className='relative flex justify-center items-center flex-row gap-5 p-0 w-min	h-min overflow-hidden'>
                                <Link href='/' className='relative overflow-visible w-[142px] aspect-3.55/1 flex justify-center items-center gap-2'>
                                    <img className='w-11 h-11' src='https://res.cloudinary.com/ddtfebvov/image/upload/v1735989459/IMG_8531_aerspw.webp' alt='logo' />
                                    <div className='flex flex-col justify-center'>
                                        <span style={{ color: '#0d0d0d' }} className='font-medium text-xl leading-4'>SHIVAM</span>
                                        <span className='text-[#EB5939] font-medium text-xl'>MAURYA.</span>
                                    </div>
                                </Link>
                            </div>
                            <div className='relative flex grow flex-row items-center justify-end gap-[10px] flex-nowrap h-min overflow-hidden p-0 w-[1px]'>
                                <div className='opacity-100 h-auto w-auto relative'>
                                    <Link href='/' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                                        <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-700 ease-out origin-center group-hover:translate-x-0 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden px-2 py-[5px] z-10'>
                                            <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                                                <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>HOME</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                                            <p style={{ color: '#0d0d0d' }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>HOME</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='opacity-100 h-auto w-auto relative'>
                                    <Link href='/about' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                                        <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-500 ease-in-out origin-center group-hover:translate-x-1 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden p-1 z-10'>
                                            <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                                                <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>ABOUT</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                                            <p style={{ color: '#0d0d0d' }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>ABOUT</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='opacity-100 h-auto w-auto relative'>
                                    <Link href='/work' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                                        <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-500 ease-in-out origin-center group-hover:translate-x-1 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden p-1 z-10'>
                                            <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                                                <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>WORKS</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                                            <p style={{ color: '#0d0d0d' }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>WORKS</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='opacity-100 h-auto w-auto relative'>
                                    <Link href='/blog' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                                        <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-500 ease-in-out origin-center group-hover:translate-x-1 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden p-1 z-10'>
                                            <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                                                <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>BLOG</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                                            <p style={{ color: '#0d0d0d' }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>BLOG</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </header>
                </div>
            </div>

            <div className="flex flex-none flex-row items-center place-content-center gap-2.5 h-min overflow-hidden py-[30px] px-10 relative w-full">
                <div className="content-center flex items-center justify-start flex-[1_0_0px] gap-[5px] h-min max-w-[1200px] overflow-hidden p-0 relative w-px">
                    <div className="flex flex-col flex-none flex-shrink-0 justify-start relative whitespace-pre w-auto h-auto outline-none transform-none">
                        <p className="text-xs text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">
                            <Link href='/'>Home</Link>
                        </p>
                    </div>
                    <div className="flex flex-col flex-none flex-shrink-0 justify-start relative whitespace-pre w-auto h-auto outline-none transform-none">
                        <p className="text-xs text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">/</p>
                    </div>
                    <div className="flex flex-col flex-none flex-shrink-0 justify-start relative whitespace-pre w-auto h-auto outline-none transform-none">
                        <p className="text-xs text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">
                            <Link href='/blog'>Blog</Link>
                        </p>
                    </div>
                    <div className="flex flex-col flex-none flex-shrink-0 justify-start relative whitespace-pre w-auto h-auto outline-none transform-none">
                        <p className="text-xs text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">/</p>
                    </div>
                    <div className="flex flex-col flex-none flex-shrink-0 justify-start relative whitespace-pre w-auto h-auto outline-none transform-none">
                        <p className="text-xs text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">{blog.blogHeading}</p>
                    </div>
                </div>
            </div>

            <div className="content-center flex flex-col items-center justify-start flex-none gap-10 h-min max-w-[1000px] pt-10 px-10 pb-20 relative w-full">
                <div className="flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                    <h1 className="text-[42px] text-[#0d0d0d] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">{blog.blogHeading}</h1>
                </div>
                <div className="flex flex-row items-center place-content-center flex-none gap-5 h-min overflow-hidden p-0 relative w-full">
                    <div className="flex flex-col items-center place-content-center flex-grow gap-[5px] h-min overflow-hidden p-0 relative w-px">
                        <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                            <p className="text-sm text-[#0d0d0d] tracking-[0.08em] leading-[1.1em] font-Plus_Jakarta_Sans font-medium">
                                POSTED BY
                            </p>
                        </div>
                        <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                            <p className="text-base text-[#0d0d0d80] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">
                                {blog.postedBy}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center place-content-center flex-grow gap-[5px] h-min overflow-hidden p-0 relative w-px">
                        <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                            <p className="text-sm text-[#0d0d0d] tracking-[0.08em] leading-[1.1em] font-Plus_Jakarta_Sans font-medium">
                                POSTED AT
                            </p>
                        </div>
                        <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                            <p className="text-base text-[#0d0d0d80] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">
                                {blog.postedAt}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center place-content-center flex-grow gap-[5px] h-min overflow-hidden p-0 relative w-px">
                        <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                            <p className="text-sm text-[#0d0d0d] tracking-[0.08em] leading-[1.1em] font-Plus_Jakarta_Sans font-medium">
                                POSTED ON
                            </p>
                        </div>
                        <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                            <p className="text-base text-[#0d0d0d80] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">
                                {blog.postedOn}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full flex-none h-[600px] aspect-[1.53333/1]">
                    <div className="absolute inset-0">
                        <img className="block w-full h-full rounded-inherit object-center object-cover" src={blog.image} />
                    </div>
                </div>
                <div className="flex flex-col justify-start flex-none flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none">
                    <p className="text-base text-[#0d0d0d] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">{blog.content}</p>
                </div>
            </div>

            <div className="flex flex-row items-center place-content-center flex-none gap-2.5 h-min overflow-hidden p-[100px_40px] relative w-full">
                <div className="flex flex-col items-center place-content-center flex-1 gap-[50px] h-min max-w-[1200px] overflow-hidden p-0 relative w-px">
                    <div className="content-end flex flex-row items-end justify-center flex-none gap-[30px] h-min overflow-hidden p-0 relative w-full">
                        <div className="flex flex-col justify-start flex-1 flex-shrink-0 transform-none h-auto relative whitespace-pre-wrap w-px break-words overflow-wrap-anywhere outline-none">
                            <h2 className="text-4xl text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">Related Post</h2>
                        </div>
                    </div>
                    <div className="flex flex-row items-center place-content-center flex-none gap-7.5 h-min overflow-hidden p-0 relative w-full">
                        <div className='flex-[1_0_0px] grid grid-cols-[repeat(3,minmax(100px,_1fr))] auto-rows-min gap-10 justify-items-center h-min p-0 relative w-[1px]'>
                            {randomBlogs.map((data, index) => (<div key={index} className='self-start flex-none h-auto relative w-full group'>
                                <div className='place-content-center items-center cursor-pointer flex flex-col gap-8 h-min overflow-hidden p-0 relative w-full opacity-100'>
                                    <Link href={`/blog/${data.slug}`} className='place-content-center items-center aspect-[1.32707/1] flex flex-row gap-2.5 h-[266px] overflow-hidden p-0 relative no-underline w-full'>
                                        <div className='flex-none h-[115%] overflow-hidden relative w-[115%] transform-none origin-center group-hover:scale-[0.92] duration-500'>
                                            <div className='absolute rounded-none inset-0'>
                                                <img className='block w-full h-full rounded-none object-center object-cover' src={data.image} alt='blogImage' />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='content-start items-start justify-center flex flex-col gap-5 h-min overflow-hidden p-0 relative w-full'>
                                        <div className='flex flex-col flex-shrink-0 justify-start flex-none h-auto w-full relative whitespace-pre-wrap break-words outline-none transform-none opacity-100'>
                                            <p className='text-base text-[#0d0d0d80] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>{data.postedOn}</p>
                                        </div>
                                        <div className='flex flex-col justify-start flex-none h-auto w-full relative whitespace-pre-wrap break-words outline-none transform-none opacity-100'>
                                            <h5 className='text-2xl text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>{data.blogHeading}</h5>
                                        </div>
                                        <div className=''>
                                            <Link href={`/blog/${data.slug}`} className="w-max flex flex-col justify-start bg-[#0d0d0d] text-[#e9e9e7] transform transition-all duration-500 ease-out px-5 py-[10px] hover:tracking-[0.08em] hover:bg-[#EB5939]">
                                                <div className="w-auto">
                                                    <p className="text-sm leading-[1.1em] font-Plus_Jakarta_Sans font-medium">READ MORE</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogReadPage;