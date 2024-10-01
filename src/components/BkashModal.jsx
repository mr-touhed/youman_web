

const BkashModal = ({bkashUrl}) => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-20 bg-black">
            <iframe src={bkashUrl} frameborder="0" sandbox></iframe>
        </div>
    );
};

export default BkashModal;