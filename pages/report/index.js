
import React,{useState} from "react";
import { useRouter } from 'next/router'
import Layout from "../../components/Layout";
import Head from "next/head";
import { sendSupportRequest } from "../../utils/formActions";

export default function Support() {
const router = useRouter()
    const [isLoading,setIsLoading] = useState(false)
    const [status,setStatus] = useState("")

  const handleForm = async (e) => {
    e.preventDefault();
    try {
        setIsLoading(true)
      const formData = new FormData(e.target);

      const data = Object.fromEntries(formData);
      const response = await sendSupportRequest(data);


      if(response.success){
        setIsLoading(false)
        setStatus(response.message)
        setTimeout(() => {
            router.push("/")
        }, 500);
      }else {
        setStatus("Error")
      }

    } catch (err) {
        setIsLoading(false)
        setStatus(response.message)
      console.log("err", err);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Report Bug / Features - APIdays Landscape</title>
        <meta name="description" content="apidays landscape" />
      </Head>
      <section>
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl my-10">
          <h2 className="text-2xl font-bold mb-4 text-[#1B4965]">
            Report a bug or New feature
          </h2>
          <form className="space-y-4" onSubmit={handleForm}>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 px-3 block w-full border py-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Select Box */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="mt-1 border py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="" >Select</option>
                <option value="support">
                  Bug issue / site not working properly
                </option>
                <option value="page not loading">Page doesn`t load</option>
                <option value="request idea">feature request idea</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Box */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="border py-2 px-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#1B4965] text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
              {status && <p className="text-white bg-green-800 my-5 rounded-md py-1 px-3 text-center">{status}</p>}
              {status==='Error' && <p className="text-white bg-red-800 my-5 rounded-md py-1 px-3 text-center">{status}</p>}
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
