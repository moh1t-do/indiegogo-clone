import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import Carousel from '@/components/Carousel'
import Card from '@/components/Card'
import IconTile from '@/components/IconTile'
import WideCard from '@/components/WideCard'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Tile from '@/components/Tile'
import iconTileData from '@/libs/iconTitleData'
// import tileData from '@/libs/tileData'
import cardlData from '@/libs/cardData'
import reviewData from '@/libs/reviewData'

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
            <section className="w-screen px-4 sm:px-10 lg:px-40">
                <WideCard top />
                <section id="popular">
                    <div>
                        <h1 className="text-2xl">Popular Projects</h1>
                        <div className="relative flex items-center justify-between">
                            <BsArrowLeftCircle
                                size="60px"
                                className="absolute -top-12 right-20 z-10 hidden cursor-pointer sm:block lg:top-1/2 lg:-left-24 lg:z-0"
                                onClick={pre}
                            />
                            <div
                                id="content"
                                className="flex  w-full overflow-scroll scroll-smooth px-[0.14rem] py-8 scrollbar-hide"
                            >
                                {cardlData.map(({ key, image }) => (
                                    <Card key={key} image={image} />
                                ))}
                            </div>
                            <BsArrowRightCircle
                                size="60px"
                                className="absolute right-0 -top-12 z-10 hidden cursor-pointer sm:block lg:top-1/2 lg:-right-24 lg:z-0"
                                onClick={nxt}
                            />
                        </div>
                    </div>
                </section>
                <section id="collection">
                    {/* <div className="grid w-full grid-cols-1 grid-rows-2 gap-6 py-10 lg:grid-cols-2">
                        {tileData.map(({ key, image, title, subtitle }) => (
                            <Tile
                                key={key}
                                image={image}
                                title={title}
                                subtitle={subtitle}
                                top
                            />
                        ))}
                    </div> */}
                    <div
                        style={{
                            backgroundImage: `url(https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_auto,g_center,q_auto:best,dpr_1.3,f_auto/homepage/cf-bg-desktop-lg.jpg)`,
                        }}
                        className="my-10 flex h-fit w-full items-center justify-center bg-slate-900 bg-cover bg-center bg-no-repeat py-16"
                    >
                        <div className="px-10 py-24 md:w-2/3 md:py-0">
                            <h1 className="mb-8 text-center text-3xl">
                                Back the project, take the ride
                            </h1>
                            <p className="text-center lg:text-left">
                                Indiegogo is your destination for clever
                                innovations in tech, design, and more, often
                                with special perks and pricing for early
                                adopters. Back a campaign, share your ideas and
                                feedback with the project team - and join the
                                risks and rewards of bringing new products to
                                life.
                            </p>
                            <h1 className="mt-4 text-center text-lg ">
                                LEARN ABOUT CROWDFUNDING
                            </h1>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="my-8 px-4 text-center">
                        <h1 className="my-2 text-3xl">
                            Which categories interest you?
                        </h1>
                        <p className="my-4">
                            Discover projects just for you and get great
                            recommendations when you select your interests.
                        </p>
                        <Button outline>SIGN UP AND SELECT INTERESTS</Button>
                        <p className="my-4">Or explore our top catergories</p>
                        <div className="my-4 grid grid-cols-2 grid-rows-3 items-center justify-center md:grid-cols-3 md:grid-rows-2 lg:flex lg:px-40">
                            {iconTileData.map(({ key, icon, title }) => (
                                <IconTile key={key} title={title}>
                                    {icon}
                                </IconTile>
                            ))}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="px-4 text-center">
                        <h1 className="my-2 text-3xl">
                            From the Indiegogo Review
                        </h1>
                        <p className="my-4">
                            Your behind-the-scenes view of the people and
                            stories behind Indiegogo projects
                        </p>
                    </div>
                    <div className="grid w-full grid-cols-1 grid-rows-1 gap-6 py-10 lg:grid-cols-3">
                        {reviewData.map(({ key, image, title, subtitle }) => (
                            <Tile
                                key={key}
                                image={image}
                                title={title}
                                subtitle={subtitle}
                            />
                        ))}
                    </div>
                </section>
                <WideCard />
            </section>
            <Footer />
        </>
    )
}
