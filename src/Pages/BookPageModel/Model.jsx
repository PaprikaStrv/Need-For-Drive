import React, { useState } from "react";
import OrderInfoContainer from "../../Components/OrderInfo/OrderInfoContainer";
import RadioInput from "../../Components/RaioInput/RadioInput";
import s from "./ModelPage.module.scss";
import { XFormatPrice } from "../../commonScripts/scripts.js";
import { prepareImgLink } from "../../commonScripts/scripts.js";

const BookPageModel = (props) => {
  const [currentModelType, setModelType] = useState("Все модели");
  const handleChange = (e) => {
    setModelType(e.target.value);
  };

  let filteredCars = [];
  for (let i = 0; i < props.models.data.length; i++) {
    if (currentModelType === "Все модели") {
      filteredCars.push(props.models.data[i]);
    } else if (props.models.data[i].categoryId.name === currentModelType) {
      filteredCars.push(props.models.data[i]);
    }
  }

  const modelClickHandler = (model, priceMin, priceMax) => {
    props.setCarModelName(model);
    props.setCarModelPriceMin(priceMin);
    props.setCarModelPriceMax(priceMax);
    props.setCarColor("");
  };

  return (
    <div className={s.modelPageWrapper}>
      <div className={s.modelPageContainer}>
        <div className={s.modelCarChoose}>
          <div className={s.checkBoxesWrapper}>
            <RadioInput id={1} modelName="Все модели"  currentModelType={currentModelType}  handleChange={handleChange}/>
            {props.categories.data.map((c) => {
              return (
                <RadioInput
                  key={c.id}
                  id={c.id}
                  modelName={c.name}
                  currentModelType={currentModelType}
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
          available={!props.modelName}
          btnLink={"Additionally"}
        />
      </div>
    </div>
  );
};

export default BookPageModel;
