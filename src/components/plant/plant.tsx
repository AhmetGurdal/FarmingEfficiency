import { useState } from "react";
import { IPlant } from "../../types/IPlant";
import "./plant.css";

export const PlantComponent = ({
  plant,
  titles,
  units,
}: {
  plant: IPlant;
  titles: { [key: string]: string };
  units: { [key: string]: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={isOpen ? "card card-open" : "card"}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="content">
        <div className="front">
          <div>
            <img src={plant.image} className="img" />
          </div>
          {plant.name}
        </div>
        <div className="back">
          <div className="table left">
            <div>
              <span className="title">{titles["pHRange"]} :</span>{" "}
              {plant["pHRange"][0]} - {plant["pHRange"][1]}
            </div>
            <div>
              <span className="title">{titles["nitrogen"]} :</span>{" "}
              {plant["nitrogen"]}
              <span className="unit">ppm</span>
            </div>
            <div>
              <span className="title">{titles["phosphorus"]} :</span>{" "}
              {plant["phosphorus"]}
              <span className="unit">ppm</span>
            </div>
            <div>
              <span className="title">{titles["potassium"]} :</span>{" "}
              {plant["potassium"]}
              <span className="unit">ppm</span>
            </div>
            <div>
              <span className="title">{titles["water"]} :</span>{" "}
              {plant["water"]}
              <span className="unit">{units["mm/week"]}</span>
            </div>
            <div>
              <span className="title">{titles["season"]} :</span>{" "}
              {plant["season"]}
            </div>
            <div>
              <span className="title">{titles["maturityDays"]} :</span>{" "}
              {plant["maturityDays"]}
              <span className="unit">{units["day"]}</span>
            </div>
            <div>
              <span className="title">{titles["temperature"]} :</span>{" "}
              {plant["temperature"][0]} - {plant["temperature"][1]}°C
            </div>
          </div>
          <div>
            <span className="title">{titles["sunlight"]} :</span>{" "}
            {plant["sunlight"]}
          </div>
          <div>
            <span className="title">{titles["plantingTime"]} :</span>{" "}
            {plant["plantingTime"]}
          </div>

          <div>
            <span className="title">{titles["fertilizer"]} :</span>{" "}
            {plant["fertilizer"]}
          </div>
          <div className="table">
            <div className="diseases">
              <div className="title">{titles["diseases"]} :</div>
              <div>
                {plant["diseases"].map((e) => (
                  <div>{e}</div>
                ))}
              </div>
            </div>
            <div className="medicines">
              <div className="title">{titles["medicines"]} :</div>
              <div>
                {plant["medicines"].map((e) => (
                  <div>{e}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div
  //     onClick={() => {
  //       setIsOpen(!isOpen);
  //     }}
  //   >
  //     <div>Plant Name : {plant["name"]}</div>
  //     {isOpen && (
  // <div className="content">
  //   <div>
  //     Soil pH Range : {plant["pHRange"][0]} - {plant["pHRange"][1]}
  //   </div>
  //   <div>Nitrogen (N) : {plant["nitrogen"]}ppm</div>
  //   <div>Phosphorus (P) : {plant["phosphorus"]}ppm</div>
  //   <div>Potassium (K) : {plant["potassium"]}ppm</div>
  //   <div>Sunlight : {plant["sunlight"]}</div>
  //   <div>Water Needs : {plant["water"]}mm/week</div>
  //   <div>Growth Season : {plant["season"]}</div>
  //   <div>Days to Maturity : {plant["maturityDays"]}</div>
  //   <div>Best Planting Time : {plant["plantingTime"]}</div>
  //   <div>
  //     Optimal Temperature : {plant["temperature"][0]}°C -{" "}
  //     {plant["temperature"][1]}°C
  //   </div>
  //   <div>Recommended Fertilizer : {plant["fertilizer"]}</div>
  //   <div>
  //     Common Diseases :
  //     <div>
  //       {plant["diseases"].map((e) => (
  //         <div>{e}</div>
  //       ))}
  //     </div>
  //   </div>
  //   <div>
  //     Preventive Medicines :{" "}
  //     <div>
  //       {plant["medicines"].map((e) => (
  //         <div>{e}</div>
  //       ))}
  //     </div>
  //   </div>
  // </div>;
  //     )}
  //   </div>
  // );
};
