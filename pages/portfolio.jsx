import { useState } from "react";
import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
const data = [
    {
        id: 0,
        projectName: "Pollfish",
        url: "https://pollfish.com/",
        image: "projects/pollfish.jpg",
        projectDetail: "User-friendly survey platform that provides real-time market research data to businesses and organizations.",
        technologiesUsed: [
            {
                tech: "Next.js"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "Express.js"
            },
            {
                tech: "Prisma"
            },
            {
                tech: "GraphQL"
            },
            {
                tech: "PostgreSQL"
            },
            {
                tech: "AWS"
            },
        ]
    },
    {
        id: 1,
        projectName: "Earl Owen",
        url: "https://earlowen.com/",
        image: "projects/earlowen.jpg",
        projectDetail: "Warehouse distributor which carries a wide variety of aftermarket automotive accessories.",
        technologiesUsed: [
            {
                tech: "Nuxt.js"
            },
            {
                tech: "Canvas JS"
            },
            {
                tech: "Jest"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "AWS"
            },
            {
                tech: "GraphQL"
            },
        ]
    },
    {
        id: 2,
        projectName: "Zookeep",
        url: "https://zookeep.com",
        image: "projects/zookeep.jpg",
        projectDetail: "Tech driven, hands-on HR & Recruitment Consulting Service.",
        technologiesUsed: [
            {
                tech: "JavaScript"
            },
            {
                tech: "React"
            },
            {
                tech: "Storybook"
            },
            {
                tech: "Webpack"
            },
            {
                tech: "Jest"
            },
        ]
    },
    {
        id: 3,
        projectName: "Klassboard",
        url: "https://klassboard.com",
        image: "projects/klassboard.jpg",
        projectDetail: "",
        technologiesUsed: [
            {
                tech: "Vue"
            },
            {
                tech: "Storybook"
            },
            {
                tech: "Twilio"
            },
            {
                tech: "GraphQL"
            },
            {
                tech: "Jest"
            },
        ]
    },
    {
        id: 4,
        projectName: "SurfSkip",
        url: "https://whynotprivacy.com",
        image: "projects/surfskip.png",
        projectDetail: "Software that protects your online data.",
        technologiesUsed: [
            {
                tech: "Electron"
            },
            {
                tech: "SolidJS"
            },
            {
                tech: "NextCloud"
            },
            {
                tech: "Eden"
            },
            {
                tech: "Elysiajs"
            },
        ]
    },
    {
        id: 5,
        projectName: "Odysee",
        url: "https://odysee.com/",
        image: "projects/odysee.jpg",
        projectDetail: "Open-source video-sharing website based on blockchain network.",
        technologiesUsed: [
            {
                tech: "Blockchain"
            },
            {
                tech: "Strapi CMS"
            },
            {
                tech: "Node.js"
            },
            {
                tech: "React"
            },
            {
                tech: "GraphQL"
            },
            {
                tech: "AWS"
            },
        ]
    },
]
const Portfolio = () => {

    // const { isLoading, error, data } = useQuery('portfolio', () =>
    //     axios.get('api/portfolio')
    //         .then(({ data }) => data)
    //         .catch(error => console.error('Error fetching testimonials:', error)))
    return (
        <BannerLayout>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">

                {
                    isLoading ?
                        [1, 2, 3, 4].map(() => (
                            <ImageAndParagraphSkeleton className={"w-full object-cover"} />
                        ))
                        :
                        data?.map((data, key) => (
                            <PortfolioCard key={key} data={data} />
                        ))

                }


            </div >
            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;
