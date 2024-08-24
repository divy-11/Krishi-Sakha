// import { SignUpInput } from "@11-devvv/medium-common"
// import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const FormA = () => {
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="bg-white py-10 px-12 rounded-3xl drop-shadow-lg">
                <div className="px-10">
                    <div className="text-3xl font-extrabold text-center">
                        Welcome Back
                    </div>
                    <div className="text-slate-500 text-center">
                        Don't have an account?
                        <Link to={"/signup"} className="pl-2 underline">Create</Link>
                    </div>
                </div>
                <div className="pt-8">
                    <Input label={"Phone Number"} placeholder={"1234567890"}
                    // onChange={(e) => {
                    //     setuserInputs(c => ({
                    //         ...c,
                    //         email: e.target.value
                    //     }))
                    // }}
                    />

                    <Input label={"Password"} type={'password'} placeholder={"*sh17*"}
                    // onChange={
                    //     (e) => {
                    //     setuserInputs(c => ({
                    //         ...c,
                    //         password: e.target.value
                    //     }))
                    // }} 
                    />
                    <button type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Sign In</button>
                </div>
            </div>  
        </div>
    </div>
}
function Input({ label, placeholder, onChange}) {
    return <div>
        <label className="block mb-2 text-sm font-semibold text-black pt-4">{label}</label>
        <input onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}