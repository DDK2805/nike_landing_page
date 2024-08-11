const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105 ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 hover:shadow-lg`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 transition-transform duration-300 ease-in-out transform hover:rotate-3'>
        <img
          src={imgURL.thumbnail}
          alt='shoe collection'
          width={127}
          height={103.34}
          className='object-contain transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
