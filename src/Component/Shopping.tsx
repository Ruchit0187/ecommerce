import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Card from "./Card";
import { ApiResponse } from "../Axios/Axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Shopping() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  function handlePageChange(e: React.ChangeEvent<unknown>, page: number) {
    if (page === 1) {
      setPageNumber(0 * 10);
    } else {
      setPageNumber(page * 10);
    }
  }
  const { data, isLoading, isError } = useQuery({
    queryKey: ["shopping", pageNumber],
    queryFn: () => ApiResponse("/products", pageNumber),
    gcTime: 300000,
  });
  return (
    <>
      <Card data={data} isLoading={isLoading} isError={isError} />
      <div className=" mx-auto py-1 flex flex-col flex-wrap items-center mb-2">
        <Stack spacing={2}>
          <Pagination
            count={19}
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
