import React, { useState } from "react";
import OrderInfoContainer from "../../Components/OrderInfo/OrderInfoContainer";
import RadioInput from "../../Components/RaioInput/RadioInput";
import s from "./ModelPage.module.scss";

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
  };

  return (
    <div className={s.modelPageWrapper}>
      <div className={s.modelPageContainer}>
        <div className={s.modelCarChoose}>
          <div className={s.checkBoxesWrapper}>
            <RadioInput
              id={"1"}
              modelName={"Все модели"}
              currentModelType={currentModelType}
              handleChange={handleChange}
            />
            <RadioInput
              id={"2"}
              modelName={"Эконом"}
              currentModelType={currentModelType}
              handleChange={handleChange}
            />
            <RadioInput
              id={"3"}
              modelName={"Премиум"}
              currentModelType={currentModelType}
              handleChange={handleChange}
            />
            <RadioInput
              id={"4"}
              modelName={"Спорт"}
              currentModelType={currentModelType}
              handleChange={handleChange}
            />
            <RadioInput
              id={"5"}
              modelName={"Супер эконом"}
              currentModelType={currentModelType}
              handleChange={handleChange}
            />
          </div>
          <div className={s.modelCarImagesWrapper}>
            {filteredCars.map((car, index) => {
              return (
                <div
                  key={index}
                  className={s.modelCarBlock}
                  onClick={() =>
                    modelClickHandler(car.name, car.priceMin, car.priceMax)
                  }
                >
                  <div className={s.carInfo}>
                    <span className={s.carModelName}>{car.name}</span>
                    <span className={s.carModelPrice}>
                      {car.priceMin} - {car.priceMax} ₽
                    </span>
                  </div>
                  <img src={car.thumbnail.path} alt="" className={s.carImg} />
                </div>
              );
            })}
          </div>
        </div>
        <OrderInfoContainer
          btnName={"Дополнительно"}
          available={!props.modelName}
        />
      </div>
    </div>
  );
};

export default BookPageModel;
