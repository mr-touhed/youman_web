import parse from 'html-react-parser';

// You can optionally import styles if you have CSS modules for styling
// import styles from './ShowDetails.module.css'; 




const ShowDetails = ({ details }) => {


   
return (<div >
    {
        parse(details)
    }
</div>)
    
};

export default ShowDetails;
