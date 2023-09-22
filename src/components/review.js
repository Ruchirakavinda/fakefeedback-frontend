import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Review() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const productId = "650c057ccb05fd19fde0ec8b";

  useEffect(() => {
    // Make a GET request to the API endpoint
    axios
      .get(
        `https://fakereview.azurewebsites.net/api/Review/get-all-review-by-product-id?productId=${productId}}`
      )
      .then((response) => {
        // Handle a successful response
        setData(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error fetching data:", error);
        setLoading(true);
      });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((rew) => (
          <div
            className="mx-auto max-w-7xl  w-full py-10 text-left border-b-2 border-[#DCDCDC]"
            key={rew.reviewId}
          >
            <p className="text-slate-400">by {rew.reviewerName}</p>
            <p className="py-3">{rew.reviewContent}</p>

            <div className="grid grid-cols-6 gap-5  py-2">
              <div>
                <img
                  className="h-8 w-full h-auto"
                  src={rew.productImage}
                  alt="Product image"
                />
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}
