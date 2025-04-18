import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { getCarById, updateCar } from "../../redux/actions/carsActions";

const Edit = () => {
  const [carData, setCarData] = useState({
    name: "",
    image: "",
    rentPerHour: "",
    capacity: "",
    feulType: "",
    model: "",
    gearType: "",
  });

 
  const dispatch = useDispatch();
  const { carId } = useParams();
  const { car } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getCarById(carId));
    setCarData({
      name: car?.name,
      image: car?.image,
      rentPerHour: car?.rentPerHour,
      capacity: car?.capacity,
      feulType: car?.feulType,
      model: car?.model,
      gearType: car?.gearType,
    });
  }, [
    dispatch,
    carId,
    car?.name,
    car?.image,
    car?.rentPerHour,
    car?.capacity,
    car?.feulType,
    car?.model,
    car?.gearType,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carData);
    dispatch(updateCar(carId, carData, toast));
    setCarData({
      name: "",
      image: "",
      rentPerHour: "",
      capacity: "",
      feulType: "",
      model: "",
      gearType: "",
    });
  };

  return (
    <div className='container-fluid px-1 py-5 mx-auto backGround'>
      <div className='row d-flex justify-content-center'>
        <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
          <h3>Request a Demo</h3>

          <div className='card'>
            <form className='form-card' onSubmit={handleSubmit}>
              <div className='row justify-content-between text-left'>
                <div className='form-group col-sm-6 flex-column d-flex'>
                  <label className='form-control-label px-3' htmlFor='name'>
                    Car Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    name='name'
                    value={carData.name}
                    onChange={handleChange}
                    placeholder='Car Name'
                  />
                </div>
                <div className='form-group col-sm-6 flex-column d-flex'>
                  <label className='form-control-label px-3' htmlFor='image'>
                    Car Image
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='image'
                    name='image'
                    value={carData.image}
                    onChange={handleChange}
                    placeholder='Car Image'
                  />
                </div>
              </div>
              <div className='row justify-content-between text-left'>
                <div className='form-group col-sm-6 flex-column d-flex'>
                  <label
                    className='form-control-label px-3'
                    htmlFor='rentPerHour'
                  >
                    Rent Per Hour
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='rentPerHour'
                    name='rentPerHour'
                    value={carData.rentPerHour}
                    onChange={handleChange}
                    placeholder='Rent Per Hour'
                  />
                </div>
                <div className='form-group col-sm-6 flex-column d-flex'>
                  <label className='form-control-label px-3' htmlFor='capacity'>
                    Capacity
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='capacity'
                    name='capacity'
                    value={carData.capacity}
                    onChange={handleChange}
                    placeholder='Capacity'
                  />
                </div>
                <div className='form-group col-sm-6 flex-column d-flex'>
                  <label
                    className='form-control-label px-3 '
                    htmlFor='feulType'
                  >
                    Fuel Type
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='feulType'
                    name='feulType'
                    value={carData.feulType}
                    onChange={handleChange}
                    placeholder='Fuel Type'
                  />
                </div>
                <div className='form-group col-sm-6 flex-column d-flex'>
                  <label className='form-control-label px-3 ' htmlFor='model'>
                    Model
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='model'
                    name='model'
                    value={carData.model}
                    onChange={handleChange}
                    placeholder='Model Year'
                  />
                </div>
                <div className='form-group col-sm-6 flex-column d-flex'>
                  <label
                    className='form-control-label px-3 '
                    htmlFor='gearType'
                  >
                    Gear Type
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='gearType'
                    name='gearType'
                    value={carData.gearType}
                    onChange={handleChange}
                    placeholder='Gear Type'
                  />
                </div>
              </div>

              <div className='row justify-content-end'>
                <div className='form-group col-sm-6'>
                  <button type='submit' className='btn btn-primary'>
                    Update Car
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
