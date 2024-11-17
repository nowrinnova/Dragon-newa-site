import React, { useState } from "react";

export default function NewsCart({ news }) {
  console.log(news.author.name);
  const [showFullDetails, setShowFullDetails] = useState(false);

  // Function to toggle between full and truncated text
  const toggleDetails = () => {
    setShowFullDetails(!showFullDetails);
  };

  // Get the truncated text
  const truncatedText = news.details.split(' ').slice(0,30).join(' ') + '...';
  return (
    <div className="py-5">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="flex items-center p-4">
          <img
            src={news.author.img}
            alt="Author"
            className="w-12 h-12 rounded-full object-contain"
          />
          <div className="ml-4">
            <h2 className="font-bold">{news.author.name || "Anonymous"}</h2> 
            <p className="text-xs text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }
              )}
            </p>
          </div>
        </div>

        <figure>
          <img
            src={news.image_url}
            alt="News"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p className="text-xs text-gray-600"> {showFullDetails ? news.details : truncatedText}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary btn-sm">Read More</button> */}
            <button
          className="btn btn-primary btn-sm mt-4"
          onClick={toggleDetails}
        >
          {showFullDetails ? "Show Less" : "Read More"}
        </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 border-t">
          <div className="flex items-center">
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
            </div>
            <span className="ml-2 text-sm font-medium">
              {news.rating.number}
            </span>
          </div>
          <div className="text-gray-500 text-sm">{news.total_view} views</div>
        </div>
      </div>
    </div>
  );
}
