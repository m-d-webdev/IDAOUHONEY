import ReviewPageCards from './ReviewPageCards'
import ReviewsOverview from './ReviewsOverview'
import ListReviews from './ListReviews'
import ReviewForm from './ReviewForm'
import FirstPart from './FirstPart'

const page = () => {
    return (
        <div className='backdrop-blur-sm'>
            <div className="flex-col p-2 gap-6 w-full min-h-screen flex items-center justify-start  ">


                <FirstPart />


                <ReviewPageCards />
                <ListReviews />
                
                <ReviewsOverview />
                <ReviewForm />
            </div>
        </div>
    )
}

export default page
