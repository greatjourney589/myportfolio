import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
const data = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Valparaiso University',
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science from Valparaiso University",
                year: '2014-2018'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Pollfish, Inc',
                role: 'Senior Full-Stack Developer | Typescript | React | Express.js | Prisma | GraphQL | Postgresql | AWS',
                url: 'https://pollfish.com/',
                desc: 'Led the development of survey management workflow enabling clients to create, share surveys, and analyze customer feedback.',
                year: '01/2023 - 03/2024',
                location: 'NY, USA',
                technologies: 'Typescript, React, Next.js, Tailwind CSS, Stripe, Node.js, Express.js, PostgreSQL, Prisma, GraphQL, AWS, Graphite',
            },
            {
                id: 2,
                title: 'Earl Owen Company, Inc',
                role: 'Full-Stack Developer | TypeScript | Nuxt.js | Laravel | JS Chart | GraphQL',
                url: 'https://www.earlowen.com',
                desc: "Worked as a frontend developer for customer frontend and admin portal.",
                year: '03/2021-10/2022',
                location: 'TX, USA',
                technologies: 'TypeScript, Vue, Nuxt.js, Vuex, Vuetify, CanvasJS Chart, Jest, Laravel, GraphQL, AWS, Git',
            },
            {
                id: 3,
                title: 'Zookeep',
                role: 'Front-end Developer | React | Storybook | Jest',
                url: 'https://www.encoderbytes.com/',
                desc: 'Cross-functionally collaborated with design and backend development teams to implement seamless user interfaces using HTML, CSS, and JavaScript.',
                year: '09/2020-02/2021',
                location: 'Tokyo, JP',
                technologies: 'JavaScript, React, Bootstrap, Storybook, Webpack, Jest',
            },
            {
                id: 4,
                title: 'Klassboard',
                role: 'Full-Stack developer | Vue | GraphQL | Jest | Storybook',
                url: 'https://www.encoderbytes.com/',
                desc: 'Developed various features such as Classroom management, School Leadership Dashboard and Parent-Teacher communication features.',
                year: '11/2018-06/2020',
                location: 'Paris ile de, Fr',
                technologies: 'Vue, Vuetify, Vuex, Custom components, Storybook, Twilio, GraphQL, Jest',
            },
        ]
    }
]
function Background() {

    // const { isLoading, error, data } = useQuery('background', () =>
    //     axios.get('api/background')
    //         .then(({ data }) => data)
    //         .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
                    {
                    // isLoading ?
                    //     [1].map(() => (
                    //         <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                    //     ))
                    //     :
                        data && data[0]?.eduCards?.map((data, key) => (
                            <Edu_Card key={key} data={data} />
                        ))
                    }

                </div>
                <div className="order-1 md:order-2 ">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>

                        {
                        // isLoading ?
                        //     [1, 2, 3, 4].map(() => (
                        //         <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                        //     ))
                        //     :
                            data && data[1]?.expCards?.map((data, key) => (
                                <Exp_Card key={key} data={data} />
                            ))
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;
