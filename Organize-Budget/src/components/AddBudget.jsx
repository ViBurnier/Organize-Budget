import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowBigRightDash } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import * as yup from "yup";

function AddBudGet({ onAddBudget }) {


  
  
  const notifySuccess = () => {
    toast.success("Despesa registrada com sucesso!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  
  const schema = yup.object().shape({
    title: yup.string().required("Título é obrigatório"),
    
    date: yup
    .date()
    .required("Data obrigatória")
    .min(new Date(), "Insira uma data válida!")
    .max("9999", "Insira um ano válido!"),
    
    price: yup
    .number()
    .typeError("Preço deve ser um número")
    .positive("Preço precisa ser positivo")
    .required("Preço obrigatório"),
    
    description: yup
    .string()
    .min(2, "Minimo 2 caracteres")
    .max(100, "Máximo 100 caracteres"),
  });
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  // const normalizeErrors = Object.values(errors).map((error) => error.message)
  
  // const notifyError = () => {
  //   toast.error(
  //     normalizeErrors,
  //     {
  //       position: "bottom-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: false,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     }
  //   );
  // };
  
  // useEffect(() => {notifyError()}, [errors])

  

  //return
  return (
    <div className="w-full bg-gray-500 p-2 ">
      <div className="space-y-5 columns-2">
        <ToastContainer />
            
        <form
          onSubmit={handleSubmit((data) => {
            onAddBudget(data.title, data.date, data.price, data.description);
            reset();
            notifySuccess();
          })}
          >
          <input
            {...register("title")}
            placeholder="TITLE"
            type="text"
            className="bg-white rounded-sm p-2 w-full"
          />
          <p>{errors.title?.message}</p>
          

          <input
            {...register("date")}
            placeholder="DATE"
            type="date"
            className="bg-white rounded-sm p-2 w-full"
          />
          <p>{errors.date?.message}</p>

          <input
            {...register("price")}
            placeholder="PRICE"
            type="number"
            className="bg-white rounded-sm p-2 w-full"
          />
          <p>{errors.price?.message}</p>

          <textarea
            placeholder="DESCRIPTION"
            className="bg-white rounded-sm p-2 w-full"
            id="description"
            {...register("description")}
          />
          <p>{errors.description?.message}</p>

          <button type="submit" className="bg-amber-400">
            <ArrowBigRightDash />
          </button>
        </form>

      </div>
    </div>
  );
}

export default AddBudGet;
