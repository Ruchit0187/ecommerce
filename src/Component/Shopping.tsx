import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Card from "./Card";
import { apiResponse } from "../Axios/Axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDebounceCallback } from "usehooks-ts";

function Shopping() {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchData, setSearchData] = useState("");
  const [order, setOrder] = useState("");
  const [sortField, setSortField] = useState("");
  function handlePageChange(e: React.ChangeEvent<unknown>, page: number) {
    if (page === 1) {
      setPageNumber(0 * 10);
    } else {
      setPageNumber(page * 10);
    }
  }
  function handleSelectChange(value: string) {
    if (value === "") {
      setOrder(value);
      setSortField("");
    } else {
      setOrder(value);
      setSortField("price");
    }
  }
  const debounce = useDebounceCallback(setSearchData, 1000);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["shopping", pageNumber, searchData, order],
    queryFn: () => apiResponse(pageNumber, searchData, order, sortField),
    gcTime: 300000,
  });
  const dataCount = Math.ceil(data?.total / 10)-1;
  return (
    <>
      <div className="flex justify-between my-2 px-2.5 max-[500px]:flex-col max-[500px]:gap-2 ">
        <select
          className="border-2  rounded-2xl py-2"
          onChange={(e) => handleSelectChange(e.target.value)}
        >
          <option value="">All</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
        <input
          type="text"
          className="py-2 px-2 text-black border-2 rounded-2xl"
          placeholder="search"
          defaultValue={searchData}
          onChange={(e) => debounce(e.target.value)}
        />
      </div>
      <Card data={data} isLoading={isLoading} isError={isError} />
      <div className=" mx-auto py-1 flex flex-col flex-wrap items-center mb-2">
        <Stack spacing={2}>
          <Pagination
            count={dataCount}
            color="primary"
            onChange={(e, page) => handlePageChange(e, page)}
            hidePrevButton
            hideNextButton
          />
        </Stack>
      </div>
    </>
  );
}

export default Shopping;
