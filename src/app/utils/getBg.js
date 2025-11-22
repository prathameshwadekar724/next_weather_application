export function getBackground(condition) {
    if (!condition) return "from-blue-500 to-purple-600";

    condition = condition.toLowerCase();

    if (condition.includes("cloud")) return "from-gray-500 to-gray-700";
    if (condition.includes("rain")) return "from-blue-700 to-gray-900";
    if (condition.includes("clear")) return "from-blue-400 to-yellow-500";
    if (condition.includes("storm")) return "from-purple-700 to-black";
    if (condition.includes("snow")) return "from-blue-200 to-white";

    return "from-blue-500 to-purple-600";
}