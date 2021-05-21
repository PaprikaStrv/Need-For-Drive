import React, { useState } from "react";
import OrderInfoContainer from "../../Components/OrderInfo/OrderInfoContainer";
import RadioInput from "../../Components/RaioInput/RadioInput";
import s from "./ModelPage.module.scss";
import { XFormatPrice } from "../../commonScripts/scripts.js";
import { prepareImgLink } from "../../commonScripts/scripts.js";

const BookPageModel = ({
  models,
  setCarColor,
  categories,
  modelName,
  setDiffDate,
  setCarRate,
  unsetCarParams,
  setCurrentModel,
  currentModel,
  setStartDate,
  setEndDate,
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

  const modelClickHandler = (car) => {
    setCurrentModel(car);
    setCarColor("");
    setDiffDate("");
    setCarRate("");
    unsetCarParams();
    setStartDate("");
    setEndDate("");
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
            {categories.data.map(({ id, name }) => {
              return (
                <RadioInput
                  key={id}
                  id={id}
                  inputName={name}
                  currentInputType={currentModelType}
                  handleChange={handleChange}
                />
              );
            })}
          </div>
          <div className={s.modelCarImagesWrapper}>
            {filteredCars.map((car) => {
              const {id, name, priceMin, priceMax, thumbnail} = car;
              return (
                <button
                  key={id}
                  className={s.modelCarBlock}
                  onClick={() => modelClickHandler(car)}
                >
                  <div className={s.carInfo}>
                    <span className={s.carModelName}>
                      {car.name.toUpperCase()}
                    </span>
                    <span className={s.carModelPrice}>
                      {XFormatPrice(priceMin)} -{" "}
                      {XFormatPrice(priceMax)} ₽
                    </span>
                  </div>
                  <div
                    className={s.carImg}
                    style={{
                      backgroundImage: `url(${prepareImgLink(
                        thumbnail.path
                      )})`,
                    }}
                  ></div>
                </button>
              );
            })}
          </div>
        </div>
        <OrderInfoContainer
          btnName="Дополнительно"
          available={!currentModel.name}
          btnLink="Additionally"
        />
      </div>
    </div>
  );
};

export default BookPageModel;
