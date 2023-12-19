import React from "react";
import Dropdown from "./Dropdown";
import CategorySelect from "./CategorySelect";
import TextInput from "./TextInput";

type CategoryOption = {
  value: string;
  label: string;
};

type ExerciseFormProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  title: string;
  complexity: string;
  textExercise: string;
  selectedCategory: CategoryOption | null;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<CategoryOption | null>
  >;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setComplexity: React.Dispatch<React.SetStateAction<string>>;
  setTestExercise: React.Dispatch<React.SetStateAction<string>>;
};

const ExerciseForm = ({
  onSubmit,
  title,
  complexity,
  textExercise,
  selectedCategory,
  setSelectedCategory,
  setTitle,
  setComplexity,
  setTestExercise,
}: ExerciseFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center m-auto shadow-lg shadow-custom-grey bg-custom-light-grey sm:max-w-[900px]"
    >
      <div className="w-full p-12">
        <TextInput
          label="Title"
          name="title"
          id="title"
          value={title}
          setValue={setTitle}
          placeholder="Title"
          required
        />

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-3xl font-bold text-custom-black mb-2">
              Complexity
            </label>
            <Dropdown complexity={complexity} setComplexity={setComplexity} />
          </div>
          <div className="w-1/2">
            <label className="block text-3xl font-bold text-custom-black mb-2">
              Category
            </label>
            <CategorySelect
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>

        <TextInput
          name="text"
          id="text"
          label="Text"
          type="textarea"
          value={textExercise}
          setValue={setTestExercise}
          required
          placeholder="Please enter your exercise"
        />

        <div className="w-full flex justify-center p-4">
          <button className="w-1/4 py-2 bg-custom-dark-blue hover:bg-blue-400 text-white rounded-lg">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExerciseForm;
