// "use client";
import { createLandmarkAction } from "@/action/action";
import ButtonForm from "@/components/form/ButtonForm";
import CategoryInput from "@/components/form/CategoryInput";
import FormContainer from "@/components/form/FormContainer";
import ImageInput from "@/components/form/ImageInput";
import InputForm from "@/components/form/InputForm";
import ProvinceInput from "@/components/form/ProvinceInput";
import TextAreaInputForm from "@/components/form/TextAreaInputForm";
import MapLandmark from "@/components/map/MapLandmark";
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
        <h1 className=" text-4xl font-semibold capitalize ">Create Landmark</h1>
      </div>
      <FormContainer action={createLandmarkAction}>
        <div className="border p-4 sm:p-6 lg:p-10 max-w-4xl mx-auto rounded-3xl space-y-6">
          <InputForm label={"Landmark name"} name={"name"} type={"text"} />
          <CategoryInput name={"category"} />
          <TextAreaInputForm
            name={"description"}
            labelText={"Description"}
            rows={5}
          />
          <InputForm label={"price"} name={"price"} type={"number"} />
          <ProvinceInput name={"province"} label="Province" />
          <ImageInput />
          <MapLandmark />
          <div className="mt-6">
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
