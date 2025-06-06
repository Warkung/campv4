"use client";
import createProfileAction from "@/action/action";
import ButtonForm from "@/components/form/ButtonForm";
import FormContainer from "@/components/form/FormContainer";
import InputForm from "@/components/form/InputForm";
import { useState, useEffect } from "react";

function CreatePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or a loading state
  }

  return (
    <div className="container">
      <div className="text-center mb-10 text-4xl ">
        <h1>New User</h1>
      </div>
      <FormContainer action={createProfileAction}>
        <div className="border p-10 max-w-md m-auto rounded-3xl ">
          <div className="mb-10 flex flex-col gap-5">
            <InputForm
              label={"First name"}
              name={"firstName"}
              type={"text"}
            />
            <InputForm
              label={"Last name"}
              name={"lastName"}
              type={"text"}
            />
            <InputForm
              label={"Username"}
              name={"username"}
              type={"text"}
            />
          </div>
          <ButtonForm
            title="Create Profile"
            size="lg"
            type="submit"
            variant="default"
          />
        </div>
      </FormContainer>
    </div>
  );
}
export default CreatePage;
