import { Header } from "../Components/Header";
import Newform from "../Components/Newform";
import { Result } from "../Components/Result";
import { Link } from "react-router-dom";

export const Newdash = () => {
    return (
        <div className="h-screen">
            <Header set={"new"} />
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
            className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"
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

