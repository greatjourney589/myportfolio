import ReviewCard from "./ReviewCard"
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const review = [
    {
        id: 0,
        clientName: 'Mustafash',
        clientLocation: 'Egypt',
        clientSource: 'Fiverr',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 2,
        clientName: 'Melissabrown255',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him. '
    },
    {
        id: 3,
        clientName: 'Jake Corry',
        clientLocation: 'Germany',
        clientSource: 'Fiverr',
        clientReview: "Kyle is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again"
    },
    {
        id: 4,
        clientName: 'Blaise Labriola',
        clientLocation: 'France',
        clientSource: 'Fiverr',
        clientReview: 'I have worked with Kyle and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
]

const ClientReviews = () => {

    // const { isLoading, error, data } = useQuery('review', () =>
    //     axios.get('api/review')
    //         .then(({ data }) => data)
    //         .catch(error => console.error('Error fetching testimonials:', error)))


    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Clients Reviews</div>
            <div className="overflow-x-auto w-full grid  justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4">

                {
                    // isLoading ?
                        // [1, 2, 3, 4, 5].map((_, key) => (
                        //     <ParagraphSkeleton key={key} className="w-80 md:w-96 h-full p-4 md:p-8" />
                        // ))
                        // :
                        review?.map((data, key) => (
                            <ReviewCard key={key} data={data} />
                        ))
                }

            </div>

        </>
    )
}

export default ClientReviews