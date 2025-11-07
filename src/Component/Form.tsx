import { useForm, type SubmitHandler } from "react-hook-form";
import type { InputForm } from "../Types/Types";

function Form() {
  const onsubmit: SubmitHandler<InputForm> = () => {
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputForm>();
  return (
    <div className=" sm:w-10/12 md:w-2/5 lg:w-1/4 mx-auto mt-10 shadow-lg rounded-3xl">
      <h1 className="text-center text-2xl">Contact us</h1>
      <form className="p-2.5 w-5/6 m-auto" onSubmit={handleSubmit(onsubmit)}>
        <div className="w-full">
          <label htmlFor="name" className="ml-2 block">
            Name:
          </label>
          <input
            id="name"
            className="mt-2 block  w-full ml-2 border-2 border-black text-black py-1 px-3 rounded-2xl"
            {...register("name", {
              pattern: /^\s*[a-zA-Z]/,
              required: true,
              min: 2,
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-end ">Enter the name</p>
          )}
        </div>
        <div className="w-full mt-5">
          <label htmlFor="email" className="ml-2 block">
            Email:
          </label>
          <input
            id="email"
            className="mt-2 block w-full ml-2 border-2 border-black text-black py-1 px-3 rounded-2xl"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-end">Enter the Valid Email</p>
          )}
        </div>
        <div className="w-full mt-5">
          <label htmlFor="description" className="ml-2 block">
            Description:
          </label>
          <input
            id="description"
            className="mt-2 block  w-full ml-2 border-2 border-black text-black py-1 px-3 rounded-2xl"
            {...register("description", { required: true,min:5 })}
          />
          {errors.description && (
            <p className="text-red-500 text-end">Enter the Text</p>
          )}
        </div>
        <button className="block mx-auto mt-4 p-2.5 bg-black text-white rounded-2xl cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
