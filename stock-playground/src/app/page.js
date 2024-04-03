import Navbar from "@/components/Navbar";
import Image from "next/image";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <>
      <LoginLink postLoginRedirectURL="/">Sign in</LoginLink>
      <RegisterLink postLoginRedirectURL="/">Sign up</RegisterLink>
    </>
  );
}
