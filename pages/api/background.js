const background = [
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

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
