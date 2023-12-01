const Image = ({ info }) => {
    const imageData = info?.data;
    console.log(imageData)
    const {urls, alt_description}=imageData;
    // console.log(urls.regular)
    if (!imageData) {
        return <div>No image data available</div>;
    }
    return (
        <div className="flex flex-wrap">
            {imageData.map((image,index)=>(
                <div key={index}>
                   <div>
                     <img src={image.urls.small} alt="alt_description" />
                   </div>
                </div>
            ))}
        </div>
    );
};
export default Image;