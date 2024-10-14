import Link from "next/link";
import Search from "../search/Search";
import Image from "next/image";
const Student = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-left flex-col">
      <h1 className="head_text text-left pl-5">
        <span className="blue_gradient">{type} student account</span>
      </h1>
      <p className="desc text-left max-w-md pl-5 mb-4">
        Enter student details
      </p>

      <div className="flex items-center justify-between p-10">
        <Search placeholder="Search for student..." />
        <Link href="/student/add">
          <button className="black_btn padding-10px bg-white border-none border-radius-5px cursor-pointer">
            Add Student
          </button>
        </Link>
      </div>
      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] px-2 mx-auto mt-7">
        <input
          type="text"
          name="surname"
          placeholder="Enter surname"
          className="px-3 py-2 border-2 w-full"
        />
        <input
          type="text"
          name="othernames"
          placeholder="Enter first name and other names"
          className="px-3 py-2 border-2 w-full"
        />
        <input
          type="text"
          name="class"
          placeholder="Enter the class admitted to"
          className="px-3 py-2 border-2 w-full"
        />
        <input
          type="text"
          name="nextofkin"
          placeholder="Next of kin"
          className="px-3 py-2 border-2 w-full"
        />
        <textarea
          name="description"
          placeholder="Enter home address and phone number"
          className="px-3 py-2 border-2 w-full"
        ></textarea>
      </form>
    </section>
  );
};
export default Student;
