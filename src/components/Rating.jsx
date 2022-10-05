const Rating = ({ rating }) => {
    
    const star = <i style={{color: '#FF6060'}} className="fa-solid fa-star"></i>
    const emptyStar = <i style={{color: '#E3E3E3'}}className="fa-solid fa-star"></i>

    const parsedRating = parseInt(rating);
    const EmptyStarNumber = 5-parsedRating;
    const stars = [];

    for (let i = 0; i<parsedRating; i++){
        stars.push(star)
    }
    for (let i = 0; i<EmptyStarNumber; i++){
        stars.push(emptyStar)
    }
    return (
        <>
            {
               stars.map((e, index) => {return <span key={index}>{e}</span>})
            }
        </>
    );
}

export default Rating;
