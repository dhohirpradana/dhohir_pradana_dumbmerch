/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import NumFormat from "../components/NumFormat";
import NavBar from "../components/NavBar";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const params = useParams();
  var user = JSON.parse(localStorage.getItem("user"));
  var products = JSON.parse(localStorage.getItem("products"));
  var product = products?.find((x) => x.id == params.id);
  var origin = 152;
  var destination = user.destinationAddress[0].cityId;

  const [total, setTotal] = useState(product.price);
  const [count, setCount] = useState(1);
  const [ekspedisi, setEkspedisi] = useState("");
  const [ongkir, setOngkir] = useState(0);

  const buyForm = useRef(null);

  const handleOnChange = () => {
    const form = buyForm.current;
    setCount(form.count.value == "" ? 0 : form.count.value);
    if (form.count.value != "" && form.count.value != 0) {
      setTotal(form.count.value * product.price + ongkir);
    } else {
      setTotal(0);
    }
  };

  const handleOnChangeCourier = () => {
    setEkspedisi("");
    const form = buyForm.current;
    if (form.ekspedisi.value != "") {
      getCost(form.ekspedisi.value, origin, destination).then((res) => {
        setOngkir(res);
        setTotal(form.count.value * product.price + res);
        setEkspedisi(form.ekspedisi.value);
      });
    } else {
      setOngkir(0);
      setTotal(form.count.value * product.price);
    }
  };

  async function getCost(courier, origin, destination) {
    try {
      const response = await fetch(
        `https://api-v1.dhohirpradana.com/cost/${courier}?destination=${destination}&origin=${origin}&weight=${product.weight}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      return result.rajaongkir.results[0].costs[0].cost[0].value ?? 0;
    } catch (err) {
      console.log(err);
    }
  }

  return product ? (
    <div>
      <NavBar />
      <div className="mx-5 px-5">
        <div className="d-flex mx-4 justify-content-center align-items-start">
          {/* Left Side */}
          <div className="me-4">
            <img
              src={product.src}
              alt={product.id}
              style={{ height: "450px", width: "350px", objectFit: "cover" }}
            ></img>
          </div>

          {/* Right Side */}
          <div className="ms-3 text-light fw-light mt-4">
            <h3 className="primary-color-text">{product.name}</h3>
            <p>Stock : {product.qty}</p>
            <p id="p_wrap">{product.description}</p>
            <div className="d-flex flex-row-reverse mb-4 mt-4">
              <h5 className="primary-color-text">
                {NumFormat(product.price, "Rp.")}
              </h5>
            </div>
            <button
              type="button"
              // onClick={handleBuy}
              data-mdb-toggle="modal"
              data-mdb-target="#modalBuy"
              className="btn primary-color text-capitalize text-light"
              style={{ width: "100%" }}
            >
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="modalBuy"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content bg-dark">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold text-light">
                Buy
              </h4>
              <button
                type="button"
                className="close text-light"
                data-mdb-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body bg-dark mx-3">
              <div className="text-light mb-4 fs-4">{product.name}</div>
              <form ref={buyForm}>
                <input
                  onChange={handleOnChange}
                  min={1}
                  type="number"
                  className="form-control mb-3 bg-dark text-light"
                  name="count"
                  defaultValue={count}
                  placeholder="jumlah"
                />
                <select
                  name="ekspedisi"
                  onChange={handleOnChangeCourier}
                  defaultValue=""
                  className="form-select bg-dark text-light"
                  aria-label="Ekspedisi"
                  required
                >
                  <option value="" defaultChecked={true}>
                    Pilih Ekspedisi
                  </option>
                  <option value="jne">JNE</option>
                  <option value="pos">POS</option>
                  <option value="tiki">TIKI</option>
                </select>
                <div className="text-light mt-3">
                  {NumFormat(product.price, "Rp.") + " x " + count}
                </div>
                <hr></hr>
                <div className="text-light mt-2">
                  Sub Total = {NumFormat(product.price * count, "Rp.")}
                </div>
                <div className="text-light mt-2">
                  Courier = {NumFormat(ongkir, "Rp.")}
                </div>
                <hr></hr>
                <div className="text-light mt-4">
                  <span></span>
                  <span className="ms-1 fs-4">{NumFormat(total, "Rp.")}</span>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                disabled={ekspedisi == ""}
                className="btn btn-indigo primary-color text-light text-capitalize"
                style={{ width: "100%" }}
              >
                Checkout <i className="fas fa-paper-plane-o ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  );
}

// useEffect(() => {
//   var courier = ["jne", "pos", "tiki"];
//   // setOngkir();
//   courier.forEach((element) => {
//     getCost(`${element}`, origin, destination).then((res) => {
//       setOngkir([...ongkir, `{ ${element}:  ${res} }`]);
//     });
//   });
//   localStorage.setItem("ongkirs", JSON.stringify(ongkir));
// }, []);

// fetch(`https://api-v1.dhohirpradana.com/province`, {
//   method: "GET",
// })
//   .then(async (res) => {
//     const prov = await res.json();
//     console.log(prov.rajaongkir.results);
//   })
//   .catch((err) => console.log(err));
