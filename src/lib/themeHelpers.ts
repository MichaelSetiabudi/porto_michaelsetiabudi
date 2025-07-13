export const useThemeHelpers = (theme: string) => {
  const getBackgroundClass = () => {
    return theme === "dark"
      ? "bg-[#1a1a1c]"
      : "bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30";
  };

  const getTextPrimaryClass = () => {
    return theme === "dark" ? "text-white" : "text-slate-800";
  };

  const getTextSecondaryClass = () => {
    return theme === "dark" ? "text-gray-300" : "text-slate-600";
  };

  const getCardBackgroundClass = () => {
    return theme === "dark"
      ? "bg-[#232325]/70 border-gray-800"
      : "bg-white/80 backdrop-blur-xl border-slate-200 shadow-xl shadow-blue-100/50";
  };

  const getContactCardBackgroundClass = () => {
    return theme === "dark"
      ? "bg-[#1f1f23]/80 border-gray-700"
      : "bg-white/90 backdrop-blur-xl border-slate-200 shadow-2xl shadow-purple-100/50";
  };

  const getSectionBackgroundClass = (
    variant: "primary" | "secondary" | "tertiary"
  ) => {
    if (theme === "dark") {
      switch (variant) {
        case "primary":
          return "bg-gradient-to-b from-[#232325] to-[#1a1a1c]";
        case "secondary":
          return "bg-gradient-to-b from-[#1a1a1c] via-[#232325] to-[#1a1a1c]";
        case "tertiary":
          return "bg-gradient-to-b from-[#1a1a1c] to-[#232325]";
        default:
          return "bg-[#1a1a1c]";
      }
    } else {
      switch (variant) {
        case "primary":
          return "bg-gradient-to-b from-slate-50/90 via-blue-50/20 to-white/80";
        case "secondary":
          return "bg-gradient-to-b from-white/80 via-purple-50/20 to-slate-50/90";
        case "tertiary":
          return "bg-gradient-to-b from-slate-50/90 via-indigo-50/20 to-white/80";
        default:
          return "bg-gradient-to-br from-slate-50 to-white";
      }
    }
  };

  return {
    getBackgroundClass,
    getTextPrimaryClass,
    getTextSecondaryClass,
    getCardBackgroundClass,
    getContactCardBackgroundClass,
    getSectionBackgroundClass,
  };
};
