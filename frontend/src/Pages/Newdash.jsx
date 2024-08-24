import { Header } from "../Components/Header";
import Newform from "../Components/Newform";
import { Result } from "../Components/Result";
import { Link } from "react-router-dom";

export const Newdash = () => {
    return (<div className="h-screen">
        <div className="border-b flex justify-between px-10 py-4">
            <Link to="/">
                <div className="flex justify-center text-2xl font-bold inline ">Krishi <div className="flex px-2 text-lime-600">सखा</div></div>
            </Link>
            <div className="flex items-center">
                <Link to="/doc">
                    <button
                        type="button"
                        className="mr-4 text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                    >
                        Guidance for Crops
                    </button>
                </Link>
                <Link to="/doc">
                    <button
                        type="button"
                        className="mr-4 text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                    >
                        History
                    </button>
                </Link>
                <Avatar src="/icon.png" size="medium" />
            </div>
        </div>
        <div className="flex justify-center flex-col bg-green-100">
            <div className="flex flex-col lg:flex-row w-full">
                <div className="lg:flex-[6]">
                    <Newform />
                </div>
                <div className="lg:flex-[4]">
                    <Result />
                </div>
            </div>
        </div>
    </div>
    );
};
export function Avatar({ src, size }) {
    return (
        <div
            className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
                size === "small" ? "w-6 h-6" : "w-10 h-10"
            }`}
        >
            <img
                src={src}
                alt="Avatar"
                className="object-cover w-full h-full rounded-full"
            />
        </div>
    );
}

