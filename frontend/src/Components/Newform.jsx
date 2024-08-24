import React, { useState } from 'react';
const cropList = [
    'Watermelon', 'Sugarcane', 'Lentil', 'MothBeans', 'Tur',
    'Groundnut', 'Wheat', 'Coconut', 'Cotton', 'Mango', 'Jowar',
    'Moong', 'Rice', 'KidneyBeans', 'ChickPea', 'Masoor', 'Jute',
    'Maize', 'Turmeric', 'Coffee', 'Pomegranate', 'Apple',
    'PigeonPeas', 'Muskmelon', 'Orange', 'Urad', 'Grapes', 'Soybean',
    'Gram', 'Banana', 'Blackgram', 'MungBean', 'Papaya', 'Ginger',
    'Ground Nuts', 'Millets', 'Barley', 'Tobacco', 'Paddy',
    'Oil seeds', 'Pulses'
];
const stateCityData = {
    "Andhra Pradesh": [
        "Visakhapatnam", "Vijayawada", "Guntur", "Kakinada", "Tirupati",
        "Nellore", "Rajahmundry", "Anantapur", "Chittoor", "Srikakulam",
        "Kurnool", "Ongole", "Eluru", "Bhimavaram", "Machilipatnam",
        "Kadapa", "Proddatur", "Jammalamadugu", "Narsapur", "Peddaganjam",
        "Bapatla", "Puttur"
    ],
    "Assam": [
        "Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon",
        "Tezpur", "Bongaigaon", "Karimganj", "Haflong", "Kokrajhar",
        "Sivasagar", "Dhemaji", "Barpeta", "Golaghat", "Mangaldoi",
        "Jorhat", "Dibrugarh", "Tinsukia", "Lakhimpur", "Nalbari",
        "Sonitpur", "Kamrup"
    ],
    "Bihar": [
        "Patna", "Gaya", "Bhagalpur", "Munger", "Muzaffarpur",
        "Purnia", "Darbhanga", "Sasaram", "Arrah", "Katihar",
        "Begusarai", "Chhapra", "Samastipur", "Sitamarhi", "Motihari",
        "Khagaria", "Nalanda", "Jehanabad", "Vaishali", "Supaul",
        "Bettiah", "Buxar"
    ],
    "Gujarat": [
        "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar",
        "Bhavnagar", "Junagadh", "Anand", "Nadiad", "Navsari",
        "Dahod", "Mehsana", "Gondal", "Veraval", "Porbandar",
        "Upleta", "Vapi", "Valsad", "Palanpur", "Himmatnagar",
        "Amreli", "Sihor"
    ],
    "Karnataka": [
        "Bengaluru", "Mysuru", "Mangaluru", "Hubli", "Dharwad",
        "Belagavi", "Shivamogga", "Tumkur", "Bagalkot", "Chikkamagalur",
        "Kolar", "Hassan", "Raichur", "Bidar", "Ballari",
        "Karwar", "Gadag", "Chitradurga", "Haveri", "Yadgir",
        "Mandya", "Bijapur"
    ],
    "Maharashtra": [
        "Mumbai", "Pune", "Nagpur", "Aurangabad", "Nashik",
        "Thane", "Kalyan", "Solapur", "Jalgaon", "Kolhapur",
        "Amravati", "Malegaon", "Chandrapur", "Ratnagiri", "Satara",
        "Bhiwandi", "Sangli", "Latur", "Washim", "Wardha",
        "Parbhani", "Akola"
    ],
    "Punjab": [
        "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Mohali",
        "Bathinda", "Ferozepur", "Moga", "Hoshiarpur", "Kapurthala",
        "Sri Muktsar Sahib", "Rupnagar", "Nawanshahr", "Faridkot", "Fatehgarh Sahib",
        "Zirakpur", "Rajpura", "Malerkotla", "Abohar", "Sangrur",
        "Barnala", "Jagraon"
    ],
    "Rajasthan": [
        "Jaipur", "Udaipur", "Jodhpur", "Kota", "Ajmer",
        "Bikaner", "Bhilwara", "Sikar", "Alwar", "Tonk",
        "Pali", "Nagaur", "Jhunjhunu", "Barmer", "Sawai Madhopur",
        "Churu", "Dungarpur", "Jaisalmer", "Hanumangarh", "Ratangarh",
        "Jalore", "Banswara"
    ],
    "Tamil Nadu": [
        "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem",
        "Tirunelveli", "Erode", "Vellore", "Tiruppur", "Dindigul",
        "Nagercoil", "Kanchipuram", "Chengalpattu", "Cuddalore", "Dharmapuri",
        "Karur", "Kumbakonam", "Sivakasi", "Ramanathapuram", "Sankarankoil",
        "Thanjavur", "Pudukkottai"
    ],
    "Uttar Pradesh": [
        "Lucknow", "Kanpur", "Varanasi", "Agra", "Ghaziabad",
        "Meerut", "Bareilly", "Aligarh", "Moradabad", "Jaunpur",
        "Saharanpur", "Muzaffarnagar", "Firozabad", "Shahjahanpur", "Rampur",
        "Etawah", "Budaun", "Unnao", "Sitapur", "Ballia",
        "Azamgarh", "Lalitpur"
    ],
    "West Bengal": [
        "Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri",
        "Kharagpur", "Jalpaiguri", "Haldia", "Midnapore", "Bardhaman",
        "Berhampore", "Malda", "Cooch Behar", "Kaliyaganj", "Suri",
        "Kolkata", "Bankura", "Purulia", "Jhargram", "Alipurduar",
        "Nadia", "Hooghly"
    ],
};
const Newform = () => {
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedCrop, setSelectedCrop] = useState('');
    const [formValues, setFormValues] = useState({
        state: "",
        crop: "",
        organicCarbon: "",
        nitrogen: "",
        phosphorus: "",
        potassium: "",
    });

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        setCities(stateCityData[state] || []);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with values:", formValues);
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-white p-6 w-full max-w-3xl rounded-2xl drop-shadow-lg">
                <h2 className="font-bold text-2xl mb-4 text-center">Fertilizer Recommendation for Crops</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex justify-between">
                        <div className="w-[48%]">
                            <label className="block text-lg font-semibold text-black mr-4 mb-1">State</label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Select State"
                                required
                                value={selectedState}
                                onChange={handleStateChange}
                            >
                                <option value="">Select State</option>
                                {Object.keys(stateCityData).map((state, index) => (
                                    <option key={index} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="w-[48%]">
                            <label className="block text-lg font-semibold text-black mr-4 pb-1">City</label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Select City"
                                required
                                disabled={!selectedState}
                            >
                                <option value="">Select City</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-lg font-semibold text-black mr-4 pb-1">Crop Type</label>
                        <select
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Select Crop"
                            required
                            value={selectedCrop}
                            onChange={(e) => setSelectedCrop(e.target.value)}
                        >
                            <option value="">Select Crop</option>
                            {cropList.map((crop, index) => (
                                <option key={index} value={crop}>
                                    {crop}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-between">
                        <Input label="Soil Nitrogen (kg/ha)" placeholder="*Value" className="w-[48%]" />
                        <Input label="Soil Phosphorus (kg/ha)" placeholder="*Value" className="w-[48%]" />
                    </div>

                    <div className="flex justify-between">
                        <Input label="Soil Potassium (kg/ha)" placeholder="*Value" className="w-[48%]" />
                        <Input label="Soil pH" placeholder="*Value" className="w-[48%]" />
                    </div>

                    <div className="flex justify-center">
                        <button type="submit" className="px-5 py-2.5 bg-green-500 text-white text-xl border-none rounded-lg mt-2 w-60">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

function Input({ label, placeholder, className, onChange }) {
    return (
        <div className={className}>
            <label className="block mb-1 text-lg font-semibold text-black pt-3">{label}</label>
            <input
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}

export default Newform;