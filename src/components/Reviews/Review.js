import Reviewdata from '../ReviewData/Reviewdata';
import './Review.css'
import useReviewData from '../../hooks/useReviewData';
const Review = () => {
    const [data] = useReviewData();

    return (
        <div className='review-section'>
            <h1 className='see-all'>See All Review(6)</h1>
            <div className='start-review'>
                {
                    data.map(data => <Reviewdata
                        key={data.id}
                        data={data}>
                    </Reviewdata>)
                }
            </div>
        </div>
    );
};

export default Review;