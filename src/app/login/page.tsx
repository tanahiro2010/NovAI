import { metadata } from "../layout";
import LoginPage from "@/components/pages/login";

metadata.title = "Login / NovAI";

export default async function Login() {
    return (
        <LoginPage />
    )
}