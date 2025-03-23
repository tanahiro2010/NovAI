import { metadata } from "../layout";
import RegisterPage from "@/components/pages/register";

metadata.title = "Register / NovAI";

export default async function Register() {
  return (
    <RegisterPage />
  );
}