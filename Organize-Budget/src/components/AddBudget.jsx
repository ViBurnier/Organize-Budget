import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowBigRightDash } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function AddBudGet() {
  const schema = yup.object().shape({
    title: yup.string().required("Título é obrigatório"),
    date: yup.date().required("Data obrigatória"),
    price: yup
      .number()
      .typeError("Preço deve ser um número")
      .positive("Preço precisa ser positivo")
      .required("Preço obrigatório"),
    description: yup.string().max(100, "Máximo 100 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="w-full bg-gray-500 p-2 ">
      <div className="space-y-5 columns-2">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input
            {...register("title")}
            placeholder="TITLE"
            id="title"
            className="bg-white rounded-sm p-2 w-full"
          />

          <input
            {...register("date")}
            placeholder="DATE"
            id="date"
            className="bg-white rounded-sm p-2 w-full"
          />
          <input
            {...register("price")}
            placeholder="PRICE"
            id="price"
            className="bg-white rounded-sm p-2 w-full"
          />
          <input
            {...register("description")}
            placeholder="DESCRIPTION"
            id="description"
            className="bg-white rounded-sm p-2 w-full"
          />

          <button type="submit">
            <ArrowBigRightDash />
          </button>
          
        </form>

        
      </div>

      <p>
            {errors.title?.message}
            {errors.date?.message}
            {errors.price?.message}
            {errors.description?.message}
        </p>
    </div>
  );
}

export default AddBudGet;
