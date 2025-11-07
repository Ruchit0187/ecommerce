function EmptySearchData() {
  return (
    <div className="w-full mt-10 ">
      <div className=" sm:w-full md:w-2/3 lg:w-1/3 mx-auto shadow-2xl p-2.5 rounded-2xl">
        <div>
          <img src="src\Images\NoSearchData.jpg" alt="Shooping" />
        </div>
        <div className=" font-semibold text-2xl my-1.5 text-center">
           Item not Found
        </div>
      </div>
    </div>
  );
}

export default EmptySearchData;
