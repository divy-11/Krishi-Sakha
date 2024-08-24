import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link to="/">
                <div className="flex justify-center text-2xl font-bold inline ">Krishi <div className="flex px-2 text-lime-600">सखा</div></div>
            </Link>
            <div className="flex items-center">
                <Link to="/new">
                    <button
                        type="button"
                        className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                    >
                        Recommended Fertilizers
                    </button>
                </Link>
                <Avatar src="/icon.png" size="medium" />
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
