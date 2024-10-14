"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UsersForm from "@/components/users/User";

const CreateUser = () => {
  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: "",
    isActive: "",
    address: "",
  });
  const createUser = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/record/new", {
        method: "POST",
        body: JSON.stringify({
          username: post.username,
          email: post.email,
          password: post.password,
          confirmPassword: post.confirmPassword,
          isAdmin: post.isAdmin,
          isActive: post.isActive,
          address: post.address,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <UsersForm
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createUser}
    />
  );
};
export default CreateUser;
