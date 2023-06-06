"use client";

import { useEffect, useState } from "react";


import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // we do not what want our modal to render during server side rendering as it cause hydration error so using useEffect is a little trick to prevent it
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
