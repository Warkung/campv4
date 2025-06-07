// "use client";
import { createLandmarkAction } from "@/action/action";
import ButtonForm from "@/components/form/ButtonForm";
import CategoryInput from "@/components/form/CategoryInput";
import FormContainer from "@/components/form/FormContainer";
import InputForm from "@/components/form/InputForm";
import ProvinceInput from "@/components/form/ProvinceInput";
import TextAreaInputForm from "@/components/form/TextAreaInputForm";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

async function CreatePage() {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // if (!isClient) {
  //   return null; // Or a loading state
  // }
  return (
    <div className="container">
      <div className="text-center mb-10 text-4xl ">
        <h1>Create Landmark</h1>
      </div>
      <FormContainer action={createLandmarkAction}>
        <div className="border p-10 max-w-md m-auto rounded-3xl ">
          <div className="mb-5 flex flex-col gap-5">
            <InputForm label={"Landmark name"} name={"name"} type={"text"} />
          </div>
          <div className="mb-5">
            <CategoryInput name={"Category"} />
          </div>
          <div className="mb-5">
            <TextAreaInputForm
              name={"Description"}
              labelText={"Description"}
              rows={5}
              required
            />
          </div>
          <div className="mb-5">
            <InputForm label={"price"} name={"price"} type={"number"} />
          </div>
          <div className="mb-5">
            <ProvinceInput name={"province"} />
          </div>
          <div className="">
            <ButtonForm
              title="Create landmark"
              size="lg"
              type="submit"
              variant="default"
            />
          </div>
        </div>
      </FormContainer>
    </div>
  );
}
export default CreatePage;
