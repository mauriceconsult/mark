import Link from "next/link";
const UsersForm = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-left flex-col">
      <h1 className="head_text text-left pl-5">
        <span className="blue_gradient">{type} a user account</span>
      </h1>
      <p className="desc text-left max-w-md pl-5">User details</p>
      <form
        action=""
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <input
          className="form_input"
          type="text"
          placeholder="firstname and lastname"
          name="name"
          value={post.name}
          onChange={(e) => setPost({ ...post, name: e.target.value })}
          required
        />
        <input
          className="form_input"
          type="email"
          placeholder="email"
          name="email"
          value={post.email}
          onChange={(e) => setPost({ ...post, email: e.target.value })}
          required
        />
        <input
          className="form_input"
          type="password"
          placeholder="password"
          name="password"
          value={post.password}
          onChange={(e) => setPost({ ...post, password: e.target.value })}
          required
        />
        <input
          className="form_input"
          type="confirmPassword"
          placeholder="confirmPassword"
          name="confirmPassword"
          value={post.confirmPassword}
          onChange={(e) =>
            setPost({ ...post, confirmPassword: e.target.value })
          }
          required
        />
        <select
          className="form_input"
          name="isAdmin"
          id="isAdmin"
          defaultValue={false}
        >
          <option value="false" selected>
            Is Admin?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <select
          className="form_input"
          name="isActive"
          id="isActive"
          defaultValue={true}
        >
          <option value="true" selected>
            Is Active?
          </option>
          <option
            value={post.true}
            onChange={(e) => setPost({ ...post, true: e.target.value })}
          >
            Yes
          </option>
          <option
            value={post.false}
            onChange={(e) => setPost({ ...post, false: e.target.value })}
          >
            No
          </option>
        </select>
        <textarea
          className="form_textarea "
          name="address"
          id="address"
          value={post.address}
          onChange={(e) => setPost({ ...post, address: e.target.value })}
          rows="10"
          placeholder="Address"
        ></textarea>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full "
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};
export default UsersForm;