"use client";
import React, { useState } from "react";
import { BsMotherboard } from "react-icons/bs";
import { FormEvent } from "react";
import { auth, db } from "../(firebase)/config";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";

//Main Function
const BillingForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigation = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const country = formData.get("country");
    const Package = formData.get("package");
    const companyName = formData.get("companyName");
    const streetAddress = formData.get("streedAddress");
    const apartMent = formData.get("apartMent");
    const townCity = formData.get("townCity");
    const number = formData.get("number");
    const pinCode = formData.get("pinCode");
    const message = formData.get("message");

    try {
      const docRef = await addDoc(collection(db, "Billing"), {
        FirstName: firstName,
        LastName: lastName,
        Country: country,
        Package: Package,
        CompanyName: companyName,
        StreetAddress: streetAddress,
        ApartMent: apartMent,
        TownCity: townCity,
        Pincode: pinCode,
        Number: number,
        Message: message,
      });
      console.log("Document Written Id: ", docRef.id);
      setLoading(false);
      setSuccess(true);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }
  //Main Code
  return (
    <div className="p-4 bg-slate-100">
      <div className="flex flex-col gap-3 items-center">
        <div className="flex  text-blue-700 items-center justify-center gap-3">
          <BsMotherboard size={27} />
          <h1 className="uppercase font-semibold text-blue-700 text-[17px]">
            Billing Details
          </h1>
        </div>
        <h1 className="font-bold text-[19px]">
          {" "}
          {success ? null : "Hurry Up!!"}
        </h1>
      </div>
      <div className="text-center text-gray-500 text-[14px]">
        {success ? null : "Fill out the form below to place your order"}
      </div>
      {success ? null : (
        <form
          onSubmit={handleSubmit}
          className="grid mx-5 grid-cols-2 gap-4 my-10 mmd:grid-cols-1"
        >
          <select
            name="country"
            id="country"
            required
            className="p-2.5 outline-none text-[14px] pr-4 bg-white rounded-sm w-full cursor-pointer"
          >
            <option value="" className="text-gray-300">
              Select Country
            </option>
            <option value="India">India</option>
            <option value="United Kingdom (UK)">United Kingdom (UK)</option>
            <option value="United States (US)">United States (US)</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
          </select>
          <select
            name="package"
            id="package"
            required
            className="p-2 outline-none text-[14px] pr-4 bg-white rounded-sm w-full cursor-pointer"
          >
            <option value="" className="text-gray-300">
              Select Package
            </option>
            <option value="Silver Package">Silver Package</option>
            <option value="Gold Package">Gold Package</option>
            <option value="Platinum Package">Platinum Package</option>
          </select>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="p-2 rounded-sm outline-none text-[14px]"
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              placeholder="Last Name"
              className="p-2 rounded-sm outline-none text-[14px]"
            />
            <input
              type="text"
              name="companyName"
              id="companyName"
              required
              placeholder="Your Company Name"
              className="p-2 rounded-sm outline-none text-[14px]"
            />
            <input
              type="text"
              name="streetAddress"
              id="streetAddress"
              required
              placeholder="Street Address"
              className="p-2 rounded-sm outline-none text-[14px]"
            />
            <input
              type="text"
              name="apartMent"
              id="apartMent"
              required
              placeholder="Apartment, suite, unit etc. (optional)"
              className="p-2 rounded-sm outline-none text-[14px]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="townCity"
              id="townCity"
              required
              placeholder="Town / City"
              className="p-2 rounded-sm outline-none text-[14px]"
            />
            <input
              type="number"
              name="pinCode"
              id="pinCode"
              required
              placeholder="Pin Code"
              className="p-2 rounded-sm outline-none text-[14px]"
            />
            <input
              type="number"
              name="number"
              id="number"
              required
              placeholder="Phone Number"
              className="p-2 rounded-sm outline-none text-[14px]"
            />

            <textarea
              className="p-2 h-[95px] rounded-sm outline-none text-[14px]"
              name="message"
              id="message"
              placeholder="Notes about your order, e.g. special notes for delivery"
            ></textarea>
          </div>

          <button
            type="submit"
            className="font-bold  mt-10 md:col-span-2 text-white bg-indigo-600 p-3 uppercase"
          >
            {loading ? "Placing Your Order!! Please Wait" : "Place Order"}
          </button>
        </form>
      )}
      {success ? (
        <div className="bg-slate-200">
          <div className="bg-slate-100 p-6  md:mx-auto">
            <svg
              viewBox="0 0 24 24"
              className="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Order Placed!
              </h3>
              <p className="text-gray-600 my-2">
                Thank you for Buying, Our Staff will contact you soon!!!.
              </p>
              <p> Have a great day! </p>
              <div className="py-10 text-center">
                <button
                  onClick={() => {
                    navigation.push("/home");
                  }}
                  className="px-12 rounded-3xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                >
                  GO BACK
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BillingForm;
