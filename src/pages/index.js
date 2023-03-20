import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Carousel from '@/components/Carousel'
import Card from '@/components/Card'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import Tile from '@/components/Tile'
import tileData from '@/libs/tileData'
import iconTileData from '@/libs/IconTitle'
import IconTile from '@/components/IconTile'
import WideCard from '@/components/WideCard'
import Button from '@/components/Button'

const inter = Inter({ subsets: ['latin'] })

const nxt = () => {
    let wd = document.getElementById('content').clientWidth
    wd /= 2
    document.getElementById('content').scrollLeft += wd
    console.log('click')
}

const pre = () => {
    let wd = document.getElementById('content').clientWidth
    wd /= 2
    document.getElementById('content').scrollLeft -= wd
    console.log('click')
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Indiegogo Clone</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Carousel />
            <WideCard />
            <section id="popular" className="w-screen px-4 md:px-20">
                <div className="relative flex w-full items-center justify-between">
                    <AiOutlineLeftCircle
                        size="60px"
                        className="absolute left-16 z-10 hidden cursor-pointer sm:block lg:static lg:z-0"
                        onClick={pre}
                    />
                    <div
                        id="content"
                        className="mx-4 flex h-[36rem] w-full overflow-scroll scroll-smooth py-8 scrollbar-hide"
                    >
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <AiOutlineRightCircle
                        size="60px"
                        className="absolute right-16 z-10 hidden cursor-pointer sm:block lg:static lg:z-0"
                        onClick={nxt}
                    />
                </div>
            </section>
            <section
                id="collection"
                className="w-screen items-center px-4 lg:px-40"
            >
                <div className="grid w-full grid-cols-1 grid-rows-2 gap-6 py-10 lg:grid-cols-2">
                    {tileData.map(({ key, image, title, subtitle }) => (
                        <Tile
                            key={key}
                            image={image}
                            title={title}
                            subtitle={subtitle}
                        />
                    ))}
                </div>
                <div
                    style={{
                        backgroundImage: `url(https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/homepage/cf-bg-desktop-lg.jpg)`,
                    }}
                    className="my-10 flex h-fit w-full items-center justify-center bg-slate-900 bg-cover bg-center bg-no-repeat py-16"
                >
                    <div className="md: w-3/4 px-10 md:w-2/3">
                        <h1 className="mb-8 text-center text-3xl">
                            Back the project, take the ride
                        </h1>
                        <p className="text-center lg:text-left">
                            Indiegogo is your destination for clever innovations
                            in tech, design, and more, often with special perks
                            and pricing for early adopters. Back a campaign,
                            share your ideas and feedback with the project team
                            - and join the risks and rewards of bringing new
                            products to life.
                        </p>
                        <h1 className="mt-4 text-center text-lg ">
                            LEARN ABOUT CROWDFUNDING
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="px-4 text-center">
                    <h1 className="my-2 text-3xl">
                        Which categories interest you?
                    </h1>
                    <p className="my-4">
                        Discover projects just for you and get great
                        recommendations when you select your interests.
                    </p>
                    <Button outline>SIGN UP AND SELECT INTERESTS</Button>
                    <p className="my-4">Or explore our top catergories</p>
                    <div className="grid grid-cols-2 grid-rows-3 items-center justify-center md:grid-cols-3 md:grid-rows-2 lg:flex lg:px-40">
                        {iconTileData.map(({ key, icon, title }) => (
                            <IconTile key={key} title={title}>
                                {icon}
                            </IconTile>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
