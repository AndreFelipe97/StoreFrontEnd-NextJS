"use client"
import { signIn, useSession } from "next-auth/react";
import { GoogleOutlined } from "@ant-design/icons";
import { LoginButton, LoginContainer, Subtitle, Title, TitleContainer } from "@/styles/LoginPageStyles";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const {status} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/relatorios');
    }
  }, [status]);

  return (
    <LoginContainer>
      <TitleContainer>
        <Title className="text-white text-4xl">Entre com seu e-mail do google</Title>
        <Subtitle className="text-white">
          Assim você poderar ter acesso a aplição e suas funcionalidades!
        </Subtitle>
      </TitleContainer>
      <LoginButton
        className="flex justify-center items-center gap-2 h-9 w-56 rounded-lg bg-orange-500 text-white"
        onClick={() => signIn("google")}
      >
        <GoogleOutlined /> Login com o google
      </LoginButton>
    </LoginContainer>
  );
}
