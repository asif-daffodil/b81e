
const SingleTest = ({TestimonialImage}) => {
    return (
        <div className="w-full h-full flex text-white">
            <div className="m-auto">
              <figure className="w-32 m-auto">
                <img
                  src={TestimonialImage}
                  className="rounded-full p-2 bg-[rgba(255,255,255,0.3)]"
                />
              </figure>
              <div className="">CEO Founder</div>
              <div>Saul Goodman</div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-white"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-white"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-white"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-white"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-white"
                  checked
                />
              </div>
              <p className="w-3/4 m-auto">
                Export tempor illum tamen malis malis eram quae irure esse
                labore quem cillum quid cillum eram malis quorum velit fore eram
                velit sunt aliqua noster fugiat irure amet legam anim culpa.
              </p>
            </div>
          </div>
    );
};

export default SingleTest;