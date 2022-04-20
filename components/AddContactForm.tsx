import { useForm } from "react-hook-form";

interface AddContactFormProps {
  onSubmit: any;
}

export default function AddContactForm(props: AddContactFormProps) {
  const { register, handleSubmit } = useForm();
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
      <p className="text-white">FirstName</p>
      <input className="mb-3" name="firstName" {...register("firstName")} />
      <p className="text-white">LastName</p>
      <input className="mb-3" name="lastName" {...register("lastName")} />
      <p className="text-white">Email</p>
      <input className="mb-3" name="email" {...register("email")} />

      <button
        className="bg-blue-500 rounded-md p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
