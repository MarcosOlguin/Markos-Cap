import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Card from "./Card";
import Loader from "./Loader";
import "./Cards.css";
import NavBar from "./NavBar";
import Cripto from "./Cripto";
import Error404 from "./Error404";
import { UseModal } from "./hooks/useModal";
import { useFetch } from "./hooks/useFetch";
import Footer from "./Footer";

const initialForm = {
  search: "",
};

const url = `https://api.nomics.com/v1/currencies/ticker?key=3559143593181b0621e530922b732fe760e2e5eb`;

function CardCripto() {
  const [update, setUpdate] = useState(false);
  const [criptos, setCriptos] = useState(null);
  const [form, setForm] = useState(initialForm);
  const [isOpen, openModal, closeModal] = UseModal(false);

  const navigate = useNavigate();

  ////////////////////////////////////////////////////////////////////////////
  const { data, err, loading } = useFetch(url, update);

  useEffect(() => {
    const set = () => setCriptos(data);
    set();
  }, [data, update]);

  ////////////////////////////////////////////////////////////////////////

  //{useEffect(() => {
  //setLoading(true);
  //const fetchData = async () => {
  //let currencies = `https://api.nomics.com/v1/currencies/ticker?key=3559143593181b0621e530922b732fe760e2e5eb`;

  //    const criptosRes = await helpHttp().get(currencies);
  //  console.log(criptosRes);
  //setCriptos(criptosRes);
  //setLoading(false);
  //};

  // fetchData();
  //}, [update]);}

  useEffect(() => {
    if (!isOpen) {
      setForm({
        search: "",
      });
    }
  }, [isOpen]);

  ///////////////////////////////////////////////////////////////////////////
  let name;
  const handelClick = (e) => {
    name = e.target.innerText;
    navigate(name);
    openModal();
  };
  ///////////////////////////////////////////////////////////////////////////
  const handleClickNumbers = (e) => {
    console.log(e.target.id);
    navigate(e.target.id);
    openModal();
  };

  //////////////////////////////////////////////////////////////////////////

  const handleButton = () => {
    if (update) setUpdate(false);
    else {
      setUpdate(true);
    }
    console.log(update);
    console.log(err);
    console.log(data);
  };
  ///////////////////////////////////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `${form.search}`;
    navigate(url);
    openModal();
  };

  ///////////////////////////////////////////////////////////////

  const handleChange = (e) => {
    setForm({
      search: e.target.value,
    });
  };

  //////////////////////////////////////////////////////////////

  return (
    <>
      <NavBar
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleButton={handleButton}
        form={form}
        setForm={setForm}
      />

      {err ? <h2>An error ocurred</h2> : null}

      <Routes>
        <Route
          path="/"
          element={
            <Card
              criptos={criptos}
              handleClick={handelClick}
              handleClickNumbers={handleClickNumbers}
            ></Card>
          }
        >
          <Route
            path=":cripto"
            element={
              <Cripto
                form={form}
                criptos={criptos}
                isOpen={isOpen}
                closeModal={closeModal}
                openModal={openModal}
              ></Cripto>
            }
          />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
      {loading && <Loader />}
      <Footer />
    </>
  );
}

export default CardCripto;
