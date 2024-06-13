import ExpertiseCard from "./ExpertiseCard"
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const data = [
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

const MyExpertise = () => {

    // const { isLoading, error, data } = useQuery('expertise', () =>
    //     axios.get('api/expertise')
    //         .then(({ data }) => data)
    //         .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Services</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

                {
                    // isLoading ?
                    //     [1, 2, 3, 4, 5, 6].map((_, key) => (
                    //         <ParagraphSkeleton key={key} className={"space-y-2 p-8"} />
                    //     ))
                    //     :
                        data?.map((data, key) => (
                            <ExpertiseCard key={key} data={data} />
                        ))
                }

            </div>
        </>
    )
}

export default MyExpertise