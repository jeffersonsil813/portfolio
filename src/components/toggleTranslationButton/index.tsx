import { useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useTypedTranslation } from "../../hooks/useTypedTranslation";
import Text from "../text";

const ToggleTranslationButton = () => {
  const { i18n } = useTranslation();
  const { t } = useTypedTranslation();
  const [checked, setChecked] = useState(i18n.language === "en");

  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const value = e.target.checked;
    setChecked(value);
    i18n.changeLanguage(value ? "en" : "pt");
  };

  return (
    <label className="inline-flex items-center cursor-pointer gap-3">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={handleChange}
      />
      <div className="relative w-10 h-6 bg-zinc-200 rounded-full p-1 transition-all 
      peer-checked:bg-indigo-900 
      after:content-[''] after:block after:bg-zinc-50 after:rounded-full after:h-4 after:w-4 after:transition-all 
      peer-checked:after:translate-x-4"></div>
      <Text className="text-zinc-950">{t("navbar.translation")}</Text>
    </label>
  );
};

export default ToggleTranslationButton;
