import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowBigRightDash } from "lucide-react";
import { useForm } from "react-hook-form";
import * as yup from "yup";



function AddBudGet({onAddBudget, returnDate}) {

  const schema = yup.object().shape({
    title: yup.string().required("Título é obrigatório"),

    date: yup.date().required("Data obrigatória").min(returnDate(), "Insira uma data válida!").max("9999", "Insira um ano válido!"),

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
        <form onSubmit={handleSubmit((data) => onAddBudget(data.title, data.date, data.price, data.description))}>
          <input
            {...register("title")}
            placeholder="TITLE"
            type="text"
            className="bg-white rounded-sm p-2 w-full"
          />

          <input
            {...register("date")}
            placeholder="DATE"
            type="date"
            className="bg-white rounded-sm p-2 w-full"
          />

          <input
            {...register("price")}
            placeholder="PRICE"
            type="number"
            className="bg-white rounded-sm p-2 w-full"
          />
          <input
            {...register("description")}
            placeholder="DESCRIPTION"
            type="text"
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
