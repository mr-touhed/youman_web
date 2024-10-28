
import TrendingForm from '../_components/TrendingForm';

const TrendingPostPage = () => {
    const enentsData = {
        image: "",
        name: "",
        type:"",
        venue: "",
        details: "",
      }
    return (
        <div>
            <TrendingForm trending={enentsData}/>
        </div>
    );
};

export default TrendingPostPage;