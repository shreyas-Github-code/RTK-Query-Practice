import { useStudentDataQuery } from "../services/api";
import { useState } from "react";
import "./common/style.css";

const Read = () => {
  const { data, error, isLoading, isFetching, isSuccess, isError } =
    useGetStudentsQuery();

  return (
    <div>
      <h2>Read Data</h2>
      {isLoading && <span>Loading..</span>}
      {isFetching && <span>Fetching Data..</span>}
      {error && <span>Something went wrong</span>}
      <div className="main__container">
        {isSuccess &&
          data?.map((ele) => (
            <div key={ele?.id} className="read__container">
              <h2>{ele?.studentName}</h2>             
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;