import React from "react";

import { PROFILE_DATA } from "../utils/data";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

const Contact = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20" id="contact">
      <h5 className="text-primary text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14">
        Contact
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <div>
          <ContactInfoCard icon={<IoMdMail />} text={PROFILE_DATA.email} />
          <ContactInfoCard
            icon={<IoPhonePortraitOutline />}
            text={PROFILE_DATA.phone}
          />
          <ContactInfoCard
            icon={<MdOutlineWeb />}
            text={PROFILE_DATA.website}
          />
        </div>
        <div>
          <h5 className="md:hidden text-white text-lg font-medium mt-4 pb-5">
            Kontaktformular
          </h5>
          <form className="flex flex-col">
            <input
              type="text"
              name="fullname"
              placeholder="Vollständiger Name"
              id=""
              className="input-box"
              autoComplete="off"
            />

            <input
              type="text"
              name="email"
              placeholder="Email"
              id=""
              className="input-box"
              autoComplete="off"
            />

            <textarea
              name="message"
              placeholder="Nachricht"
              id=""
              row="3"
              className="input-box"
              autoComplete="off"
            ></textarea>

            <button className="primary-btn">Senden</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-gradient-to-br from-fuchsia-950 to-slate-950 rounded-lg border border-fuchsia-500 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-white flex items-center justify-center bg-fuchsia-950 rounded border border-fuchsia-500">
        {icon}
      </div>

      <p className="text-white text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default Contact;
