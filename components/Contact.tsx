import React from "react";
import checkEnvironment from "utils/checkEnvironment";

const Contact = () => {
  const [msg, setMsg] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch(checkEnvironment().concat("/api/contact"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msg),
    });
    setMsg({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    // className="bg-white dark:bg-gray-900"
    <section id="contact">
      <div className="container px-6 py-20 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800 dark:text-white">
          Contact Us
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-lg">
            <form
              className="flex flex-col space-y-4"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="flex flex-col space-y-1">
                <label
                  className="text-sm font-medium text-gray-700 dark:text-gray-200"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="px-4 py-2 text-gray-700 bg-gray-100 border border-transparent rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-blue-500 focus:bg-white focus:ring-0"
                  type="text"
                  id="name"
                  placeholder="Enter your name..."
                  value={msg.name}
                  onChange={(e) =>
                    setMsg({
                      ...msg,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  className="text-sm font-medium text-gray-700 dark:text-gray-200"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="px-4 py-2 text-gray-700 bg-gray-100 border border-transparent rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-blue-500 focus:bg-white focus:ring-0"
                  type="email"
                  id="email"
                  placeholder="Enter your email..."
                  value={msg.email}
                  onChange={(e) =>
                    setMsg({
                      ...msg,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  className="text-sm font-medium text-gray-700 dark:text-gray-200"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="px-4 py-2 text-gray-700 bg-gray-100 border border-transparent rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-blue-500 focus:bg-white focus:ring-0"
                  id="message"
                  rows={4}
                  placeholder="Your message here..."
                  value={msg.message}
                  onChange={(e) =>
                    setMsg({
                      ...msg,
                      message: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div>
                <button
                  className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
