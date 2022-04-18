import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import NumFormat from "../components/NumFormat";
import NavBar from "../components/NavBar";
import { API } from "../config/api";
import { Button, Form } from "react-bootstrap";

export default function ProductDetail() {
  const params = useParams();
  let navigate = useNavigate();
  const form = useRef();
  const [total, setTotal] = useState(0);
  const [destination, setDestination] = useState(0);
  const [count, setCount] = useState(1);
  const [ekspedisi, setEkspedisi] = useState("");
  const [ongkir, setOngkir] = useState(0);
  var origin = 152;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const myMidtransClientKey = process.env.MIDTRANS_CLIENT_KEY;

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProducts = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await API.get("/product/" + params.id, config);
      setProduct({ ...response.data.data.product });
      setTotal(response.data.data.product.price);
      setDestination(response.data.data.product.address.city);
    } catch (error) {
      console.log(error);
    }
  };

  async function getCost(courier, origin, destination) {
    console.log(courier, origin, destination, product.weight);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await API.get(
        `cost/${courier}?destination=${destination}&origin=${origin}&weight=${product.weight}`,
        config
      );
      console.log(response.data.rajaongkir.results[0].costs[0].cost[0].value);
      return response.data.rajaongkir.results[0].costs[0].cost[0].value;
    } catch (err) {
      console.log(err);
    }
  }

  const handleOnChange = () => {
    let buyForm = form.current;
    setCount(buyForm.count.value === "" ? 0 : buyForm.count.value);
    if (buyForm.count.value !== "" && buyForm.count.value !== 0) {
      setTotal(buyForm.count.value * product.price + ongkir);
    } else {
      setTotal(0);
    }
  };

  const handleOnChangeCourier = () => {
    let buyForm = form.current;
    setEkspedisi("");
    if (buyForm.ekspedisi.value !== "") {
      getCost(buyForm.ekspedisi.value, origin, destination).then((res) => {
        setOngkir(res);
        setTotal(buyForm.count.value * product.price + res);
        setEkspedisi(buyForm.ekspedisi.value);
      });
    } else {
      setOngkir(0);
      setTotal(buyForm.count.value * product.price);
    }
  };

  const handleConfirmBuy = useMutation(async () => {
    console.log("buy");
    try {
      const data = {
        idProduct: product.id,
        idSeller: product.idUser,
        qty: count,
        price: total,
      };

      const body = JSON.stringify(data);

      const config = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      };

      await API.post("/transaction", body, config)
        .then((response) => {
          const token = response.data.payment.token;
          window.snap.pay(token, {
            onSuccess: function (result) {
              console.log(result);
              navigate("/profile");
            },
            onPending: function (result) {
              console.log(result);
              navigate("/profile");
            },
            onError: function (result) {
              console.log(result);
            },
            onClose: function () {
              alert("you closed the popup without finishing the payment");
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  });

  return product ? (
    <div>
      <NavBar />
      <div className="mx-5 px-5">
        <div className="d-flex mx-4 justify-content-center align-items-start">
          {/* Left Side */}
          <div className="me-4">
            <img
              src={product.image}
              alt={product.id}
              style={{ height: "450px", width: "350px", objectFit: "cover" }}
            ></img>
          </div>

          {/* Right Side */}
          <div className="ms-3 text-light fw-light mt-4">
            <h3 className="primary-color-text">{product.name}</h3>
            <p>Stock : {product.qty}</p>
            <p id="p_wrap">{product.desc}</p>
            <div className="d-flex flex-row-reverse mb-4 mt-4">
              <h5 className="primary-color-text">
                {NumFormat(product.price, "Rp.")}
              </h5>
            </div>
            <Button
              data-mdb-toggle="modal"
              data-mdb-target="#modalBuy"
              className="primary-color text-capitalize text-light mb-4"
              style={{ width: "100%" }}
            >
              Buy
            </Button>
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
              <Button
                className="close text-light"
                data-mdb-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </Button>
            </div>
            <div className="modal-body bg-dark mx-3">
              <div className="text-light mb-4 fs-4">{product.name}</div>
              <form ref={form}>
                <Form.Control
                  onChange={handleOnChange}
                  min={1}
                  type="number"
                  className="mb-3 bg-dark text-light"
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
                  <span className="ms-1 fs-4">{NumFormat(total, "Rp.")}</span>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <Button
                data-mdb-dismiss="modal"
                disabled={ekspedisi === ""}
                onClick={() => handleConfirmBuy.mutate()}
                className="btn btn-indigo primary-color text-light text-capitalize"
                style={{ width: "100%" }}
              >
                Checkout <i className="fas fa-paper-plane-o ml-1"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
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
