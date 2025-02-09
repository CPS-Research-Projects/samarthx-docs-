import React, { useEffect } from "react";
import Layout from "@theme-original/Layout";

declare global {
  interface Window {
    netlifyIdentity: any;
  }
}

export default function CustomLayout(props) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user: any) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  return <Layout {...props} />;
}


