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
                location: 'NY, USA'
            },
            {
                id: 2,
                title: 'HauzaTech',
                role: 'Internee',
                url: 'no website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2023 - Present',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 3,
                title: 'Encoder Bytes',
                role: 'PHP Developer',
                url: 'https://www.encoderbytes.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2020 - 02/2021',
                location: 'Peshawar, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
