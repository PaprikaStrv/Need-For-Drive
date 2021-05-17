import React, { useState } from "react";
import OrderInfoContainer from "../../Components/OrderInfo/OrderInfoContainer";
import RadioInput from "../../Components/RaioInput/RadioInput";
import s from "./ModelPage.module.scss";
import { XFormatPrice } from "../../commonScripts/scripts.js";
import { prepareImgLink } from "../../commonScripts/scripts.js";

const BookPageModel = ({
  models,
  setCarModelName,
  setCarModelPriceMax,
  setCarModelPriceMin,
  setCarColor,
  categories,
  modelName,
  setDiffDate,
  setCarRate,
  unsetCarParams
}) => {
  const [currentModelType, setModelType] = useState("Все модели");
  const handleChange = (e) => {
    setModelType(e.target.value);
  };

  let filteredCars = [];
  models.data.filter((m) => {
    if (currentModelType === "Все модели") {
      filteredCars.push(m);
    } else if (m.categoryId.name === currentModelType) {
      filteredCars.push(m);
    }
  });

  const modelClickHandler = (model, priceMin, priceMax) => {
    setCarModelName(model);
    setCarModelPriceMin(priceMin);
    setCarModelPriceMax(priceMax);
    setCarColor("");
    setDiffDate("");
    setCarRate("");
    unsetCarParams();
  };

  return (
    <div className={s.modelPageWrapper}>
      <div className={s.modelPageContainer}>
        <div className={s.modelCarChoose}>
          <div className={s.checkBoxesWrapper}>
            <RadioInput
              id={1}
              inputName="Все модели"
              currentInputType={currentModelType}
              handleChange={handleChange}
            />
            {categories.data.map((c) => {
              return (
                <RadioInput
                  key={c.id}
                  id={c.id}
                  inputName={c.name}
                  currentInputType={currentModelType}
                  handleChange={handleChange}
                />
              );
            })}
          </div>
          <div className={s.modelCarImagesWrapper}>
            {filteredCars.map((car, index) => {
              return (
                <button
                  key={index}
                  className={s.modelCarBlock}
                  onClick={() =>
                    modelClickHandler(car.name, car.priceMin, car.priceMax)
                  }
                >
                  <div className={s.carInfo}>
                    <span className={s.carModelName}>
                      {car.name.toUpperCase()}
                    </span>
                    <span className={s.carModelPrice}>
                      {XFormatPrice(car.priceMin)} -{" "}
                      {XFormatPrice(car.priceMax)} ₽
                    </span>
                  </div>
                  <div
                    className={s.carImg}
                    style={{
                      backgroundImage: `url(${prepareImgLink(
                        car.thumbnail.path
                      )})`,
                    }}
                  ></div>
                </button>
              );
            })}
          </div>
        </div>
        <OrderInfoContainer
          btnName={"Дополнительно"}
          available={!modelName}
          btnLink={"Additionally"}
        />
      </div>
    </div>
  );
};

export default BookPageModel;
