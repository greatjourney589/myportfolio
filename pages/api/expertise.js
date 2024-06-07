const expertise = [
    {
        id: 0,
        title: 'Attitude',
        desc: 'Positive attitude, self-confidence and hard work for development.',
    },
    {
        id: 1,
        title: 'Synchronizing Timezone',
        desc: "Adjusting my time zone to clients to support flexible communication and teamwork.",
    },
    {
        id: 2,
        title: 'Self Testing',
        desc: 'Self-testing my code before deliver by using many automate testing tools i.e. Selenium and delivering high-quality codes with senior and recent technologies and stacks before deadline.',
    },
    {
        id: 3,
        title: 'High Teamwork',
        desc: "Familiarity with version control system i.e. Git for support high-speed and quality project",
    },
    {
        id: 4,
        title: 'Flexible Collboration',
        desc: "Quick respond to client or PM or teammates while using communication tools i.e. slack or discord and so on.",
    },
    {
        id: 5,
        title: 'Hardworking',
        desc: "Willingness to work even on weekends.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
