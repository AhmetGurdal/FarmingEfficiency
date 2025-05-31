import "./main.css";
import { IPlant } from "../types/IPlant";
import { PlantComponent } from "../components/plant/plant";
import { useEffect, useState } from "react";

export const Main = (props: {
  data: { [key: string]: IPlant };
  ui: {
    title: string;
    titles: { [key: string]: string };
    units: { [key: string]: string };
  };
}) => {
  const { data, ui } = props;
  const [pHInput, setPHInput] = useState<number | null>(null);
  const [plantName, setPlantName] = useState<string>("");
  const [nitrogen, setNitrogen] = useState<number | null>(null);
  const [phosphorus, setPhosphorus] = useState<number | null>(null);
  const [potassium, setPotassium] = useState<number | null>(null);
  // const [sunlight, setSunlight] = useState<string | null>(null);
  // const [growthSeason, setGrowthSeason] = useState<string | null>(null);
  // const [bestPlantingTime, setBestPlantingTime] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [filteredKeys, setFilteredKeys] = useState<string[]>([]);

  const clearInputs = () => {
    setPlantName("");
    setPHInput(null);
    setNitrogen(null);
    setPhosphorus(null);
    setPotassium(null);
    setTemperature(null);
  };

  useEffect(() => {
    clearInputs();
  }, [data, ui]);

  useEffect(() => {
    setFilteredKeys([]);
    if (data) {
      let filterKeys: (string | null)[] = [];
      if (plantName && plantName.length > 0) {
        filterKeys = Object.keys(data).map((e) => {
          const name = data[e]["name"];
          if (name.includes(plantName)) {
            return e;
          }
          return null;
        });
      }
      if (pHInput) {
        filterKeys = Object.keys(data).map((e) => {
          const pHRange = data[e]["pHRange"];
          if (pHInput >= pHRange[0] && pHInput <= pHRange[1]) {
            return filterKeys.length > 0
              ? filterKeys.includes(e)
                ? e
                : null
              : e;
          }
          return null;
        });
      }
      if (nitrogen) {
        filterKeys = Object.keys(data).map((e) => {
          const _nitrogen = data[e]["nitrogen"];
          if (Math.abs(_nitrogen - nitrogen) <= _nitrogen * 0.1) {
            return filterKeys.length > 0
              ? filterKeys.includes(e)
                ? e
                : null
              : e;
          }
          return null;
        });
      }
      if (phosphorus) {
        filterKeys = Object.keys(data).map((e) => {
          const _phosphorus = data[e]["phosphorus"];
          if (Math.abs(_phosphorus - phosphorus) <= _phosphorus * 0.25) {
            return filterKeys.length > 0
              ? filterKeys.includes(e)
                ? e
                : null
              : e;
          }
          return null;
        });
      }
      if (potassium) {
        filterKeys = Object.keys(data).map((e) => {
          const _potassium = data[e]["potassium"];
          if (Math.abs(_potassium - potassium) <= _potassium * 0.1) {
            return filterKeys.length > 0
              ? filterKeys.includes(e)
                ? e
                : null
              : e;
          }
          return null;
        });
      }
      // if (sunlight) {
      //   filterKeys = Object.keys(data).map((e) => {
      //     const _sunlight = data[e]["sunlight"];
      //     if (sunlight === _sunlight) {
      //       return filterKeys.length > 0
      //         ? filterKeys.includes(e)
      //           ? e
      //           : null
      //         : e;
      //     }
      //     return null;
      //   });
      // }
      // if (growthSeason) {
      //   filterKeys = Object.keys(data).map((e) => {
      //     const _growthSeason = data[e]["season"];
      //     if (growthSeason === _growthSeason) {
      //       return filterKeys.length > 0
      //         ? filterKeys.includes(e)
      //           ? e
      //           : null
      //         : e;
      //     }
      //     return null;
      //   });
      // }
      // if (bestPlantingTime) {
      //   filterKeys = Object.keys(data).map((e) => {
      //     const _bestPlantingTime = data[e]["plantingTime"];
      //     if (bestPlantingTime === _bestPlantingTime) {
      //       return filterKeys.length > 0
      //         ? filterKeys.includes(e)
      //           ? e
      //           : null
      //         : e;
      //     }
      //     return null;
      //   });
      // }
      if (temperature) {
        filterKeys = Object.keys(data).map((e) => {
          const _temperature = data[e]["temperature"];
          if (
            temperature >= _temperature[0] &&
            temperature <= _temperature[1]
          ) {
            return filterKeys.length > 0
              ? filterKeys.includes(e)
                ? e
                : null
              : e;
          }
          return null;
        });
      }

      setFilteredKeys(filterKeys.filter((e) => e !== null) as string[]);
    }
  }, [
    plantName,
    pHInput,
    nitrogen,
    phosphorus,
    potassium,
    // sunlight,
    // growthSeason,
    // bestPlantingTime,
    temperature,
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ui["title"]}</h1>
      </header>
      <main className="App-main">
        <div className="inputs">
          <input
            onChange={(e) => {
              setPlantName(e.target.value);
            }}
            placeholder={ui["titles"]["name"]}
          />
          <input
            onChange={(e) => {
              setPHInput(Number(e.target.value));
            }}
            placeholder={ui["titles"]["pHRange"]}
          />
          <input
            onChange={(e) => {
              setNitrogen(Number(e.target.value));
            }}
            placeholder={`${ui["titles"]["nitrogen"]}(ppm)`}
          />
          <input
            onChange={(e) => {
              setPhosphorus(Number(e.target.value));
            }}
            placeholder={`${ui["titles"]["phosphorus"]}(ppm)`}
          />
          <input
            onChange={(e) => {
              setPotassium(Number(e.target.value));
            }}
            placeholder={`${ui["titles"]["potassium"]}(ppm)`}
          />
          <input
            onChange={(e) => {
              setTemperature(Number(e.target.value));
            }}
            placeholder={`${ui["titles"]["temperature"]}(°C)`}
          />
        </div>

        <div className="results">
          {filteredKeys.length > 0 &&
            filteredKeys.map((key: string, index: number) => {
              return (
                <PlantComponent
                  plant={data[`${key}`]}
                  key={index}
                  titles={ui["titles"]}
                  units={ui["units"]}
                />
              );
            })}
        </div>
      </main>
    </div>
  );
};
