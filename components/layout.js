// @ts-nocheck
import Header from "./header";
import TokenContext from "../tokenContext";
import { useEffect, useState } from "react";
import { verifyToken } from "../helpers/jwt";
import {useRouter} from "next/router"

const Layout = ({ children }) => {
  const router = useRouter()
  const [verify, setVerify] = useState(null);
  useEffect(async () => {
    const token = localStorage.getItem("token");
    const doMatch = await verifyToken(token);
    // console.log(doMatch);
    if (!doMatch) {
      router.push("/")
    }
    setVerify(doMatch);
  }, []);
  return (
    <TokenContext.Provider value={verify}>
      <div className="layout">
        <Header />
        <main className="main">{children}</main>
      </div>
    </TokenContext.Provider>
  );
};

export default Layout;
