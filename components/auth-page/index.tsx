"use client";

import type { AuthPageProps } from "@refinedev/core";
import { AuthPage as AuthPageBase } from "@refinedev/mui";
import { supabaseClient  } from "@/utils/supabase/client"; // Adjust the path as needed

export const AuthPage = (props: AuthPageProps) => {
  return (
    <AuthPageBase
      {...props}
      formProps={{
        defaultValues: {
          email: "",
          password: "",
        },
        onSubmit: async (values) => {
          // Ensure email and password are always strings by providing a default if undefined
          const email = values.email ?? "";
          const password = values.password ?? "";
          const { error } = await supabaseClient .auth.signInWithPassword({
            email,
            password,
          });
          if (error) {
            // Reject the submission with the error message to show feedback
            return Promise.reject(error.message);
          }
          return Promise.resolve();
        },
      }}
    />
  );
};
