import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitFormButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className=" group h-[3rem] w-[8rem] flex items-center justify-center gap-2 bg-gray-950 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer border border-black/10 disabled:scale-100 disabled:bg-opacity-65"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </>
      )}
    </button>
  );
}
