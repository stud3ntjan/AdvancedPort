import React, { useState } from "react";
import { PROFILE_DATA } from "../utils/data";
import { IoMdMail } from "react-icons/io";
// import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setStatusMessage("Nachricht erfolgreich gesendet!");
        setStatusType("success"); // Erfolg
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatusMessage("Fehler beim Senden der Nachricht.");
        setStatusType("error"); // Fehler
      }
    } catch (error) {
      console.error("Fehler:", error);
      setStatusMessage("Es gab ein Problem beim Senden der Nachricht.");
      setStatusType("error");
    }

    setTimeout(() => {
      setStatusMessage(null);
      setStatusType("");
    }, 3000);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20" id="contact">
      <h5
        className="text-primary text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          backgroundImage: "linear-gradient(to right, #6E0056, #0F9DF8)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Contact
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <div>
          <ContactInfoCard icon={<IoMdMail />} text={PROFILE_DATA.email} />

          <ContactInfoCard
            icon={<MdOutlineWeb />}
            text={PROFILE_DATA.website}
          />
        </div>
        <div>
          <h5
            className="md:hidden text-2xl text-center text-white font-semibold font-medium mt-4 pb-5"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              backgroundImage: "linear-gradient(to right, #6E0056, #0F9DF8)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Kontaktformular
          </h5>

          {/* Statusmeldung */}
          {statusMessage && (
            <div
              className={`${
                statusType === "success" ? "bg-green-500" : "bg-red-500"
              } text-white p-4 rounded-md mb-4`}
            >
              {statusMessage}
            </div>
          )}

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              placeholder="Vollständiger Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-box"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-box"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              placeholder="Nachricht"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="3"
              className="input-box"
              autoComplete="off"
              required
            ></textarea>

            <button type="submit" className="primary-btn">
              Senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-gradient-to-br from-fuchsia-950 to-slate-950 rounded-lg border border-slate-950 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-white flex items-center justify-center bg-fuchsia-950 rounded border border-slate-50">
        {icon}
      </div>

      <p className="text-white text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default Contact;
