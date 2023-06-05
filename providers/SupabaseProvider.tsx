"use client";

import { useState } from "react";
// configures Supabase Auth to store the user's session in a cookie, rather than localStorage
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { Database } from "@/types_db";

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  // The initial value of supabaseClient is set by invoking the createClientComponentClient function from @supabase/auth-helpers-nextjs, which returns a Supabase client configured for the Database type.
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );

  return (
    // This context provider is responsible for managing the user's session and providing it to the components that need it.
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
