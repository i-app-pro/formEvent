import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputText } from "../ui/InputText";
import { InputPassword } from "../ui/InputPassword";
import { Button } from "../atoms/Button";

// Schema Validasi Akun
const accountSchema = z.object({
  nickname: z.string().min(3, "Nickname minimal 3 karakter"),
  email: z.string().email("Format email tidak valid").min(1, "Email wajib diisi"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  password_confirm: z.string().min(8, "Konfirmasi password minimal 8 karakter"),
}).refine((data) => data.password === data.password_confirm, {
  message: "Password tidak cocok",
  path: ["password_confirm"], 
});

type AccountFormData = z.infer<typeof accountSchema>;

export default function AccountRegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
  });

  const onSubmit = (data: AccountFormData) => {
    console.log("Registrasi Akun Berhasil:", data);
  };

  const onError = (errors: any) => {
    console.error("Gagal Registrasi Akun (Validation Errors):", errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col gap-2">
      <InputText 
        label="Nickname" 
        name="nickname" 
        register={register} 
        error={errors.nickname?.message} 
      />

      <InputText 
        label="Email" 
        name="email" 
        register={register} 
        error={errors.email?.message} 
      />

      <InputPassword 
        label="Password" 
        name="password" 
        register={register} 
        error={errors.password?.message} 
      />

      <InputPassword 
        label="Konfirmasi Password" 
        name="password_confirm" 
        register={register} 
        error={errors.password_confirm?.message} 
      />

      <div className="mt-4">
        <Button label="Buat Akun" variant="primary" />
      </div>
    </form>
  );
}