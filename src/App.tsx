import { useEffect, useState } from "react";
import "./App.css";
import { IPlant } from "./types/IPlant";
import { Main } from "./page/main";

function App() {
  const languages = ["de", "en", "es", "fr", "it", "tr"];
  const [data, setData] = useState<{ [key: string]: IPlant } | null>(null);
  const [ui, setUI] = useState<{
    title: string;
    titles: { [key: string]: string };
    languages: { [key: string]: string };
    units: { [key: string]: string };
  } | null>(null);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    let lang = localStorage.getItem("lang");
    if (lang) {
      setLanguage(lang);
    } else {
      const selected = languages.filter((l) =>
        navigator.language.startsWith(l)
      );
      if (selected.length > 0) {
        lang = selected[0];
      } else {
        lang = languages[0];
      }
      setLanguage(lang);
    }
  }, []);

  useEffect(() => {
    async function loadLanguageFiles() {
      try {
        const dataRes = await fetch(`./data/${language}.json`);
        const uiRes = await fetch(`./ui/${language}.json`);

        if (!dataRes.ok || !uiRes.ok)
          throw new Error("Language file load failed");

        const dataJson = await dataRes.json();
        const uiJson = await uiRes.json();

        setData(dataJson);
        setUI(uiJson);
      } catch (error) {
        console.error("Error loading language files:", error);
      }
    }

    if (language) {
      localStorage.setItem("lang", language);
      loadLanguageFiles();
    }
  }, [language]);

  return data !== null && ui !== null ? (
    <div className="main" translate="no">
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setLanguage(e.target.value);
        }}
      >
        <option value="de" selected={language === "de"}>
          {ui["languages"]["de"]}
        </option>
        <option value="en" selected={language === "en"}>
          {ui["languages"]["en"]}
        </option>
        <option value="es" selected={language === "es"}>
          {ui["languages"]["es"]}
        </option>
        <option value="fr" selected={language === "fr"}>
          {ui["languages"]["fr"]}
        </option>
        <option value="it" selected={language === "it"}>
          {ui["languages"]["it"]}
        </option>
        <option value="tr" selected={language === "tr"}>
          {ui["languages"]["tr"]}
        </option>
      </select>
      <Main data={data} ui={ui} />
    </div>
  ) : (
    <div></div>
  );
}

export default App;
