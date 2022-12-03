import { logRoles } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import {
  DashBoardBox,
  DashboardContainer,
  DashboardsList,
  DashboardsListLabel,
  DashboardsOptions,
  DashboardsPage,
  ErrorDiv,
  FilterPannelH1,
  FlutuanteImg,
  FlutuanteImg2,
  FlutuanteImg3,
  Input,
  LoginBody,
  LoginBox,
  LoginBtn,
  LoginContainer,
  LoginLabel,
  MobileBottomBar,
  SelectFilterContainer,
  SignUpBtn,
} from "./styles";
import { Chart } from "react-google-charts";
import { Toaster } from "react-hot-toast";
import { api } from "../../services/api";
import { Error } from "@styled-icons/material/Error";
import { Sell } from "../../types/Sells";
import { Filter } from "@styled-icons/feather/Filter";
import FilterModal from "./components/fiterModal/FilterModal";
import { LogIn } from "@styled-icons/boxicons-regular/LogIn";
import { Google } from "@styled-icons/remix-line/Google";
const flutuante = require("../../images/flutuante4.png");
const flutuante2 = require("../../images/flutuante5.png");
const flutuante3 = require("../../images/flutuante1.png");

export const Home = () => {
  const { User } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [productsByGroup, setProductsByGroup] = useState<String[][]>([
    ["Grupo", "Quantidade"],
  ]);
  const [sellsByDay, setSellsByDay] = useState<String[][]>([]);
  const [activeDashboard, setActiveDashboard] = useState("pizza");
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [filtredSells, setFiltredSells] = useState<String[][]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response: any = await api.get("/products");
        let arr: Array<any> = [["Grupo", "Quantidade"]];
        for (let product of response.data) {
          for (let i of arr) {
            if (i[0] === product.group) i[1]++;
            continue;
          }
          if (arr.find((p) => p[0] === product.group)) continue;
          arr.push([product.group, 1]);
        }
        setProductsByGroup(arr);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchSells() {
      try {
        const response: Sell[] = await (await api.get("/sells")).data;

        let arr: Array<any> = [["Date", "totalValue"]];
        for (let sell of response) {
          for (let s of arr) {
            if (s[0] === sell.date) s[1] = s[1] + sell.totalValue;
            continue;
          }
          if (arr.find((p) => p[0] === sell.date)) continue;
          arr.push([sell.date, sell.totalValue]);
        }

        setSellsByDay(
          arr.sort(
            (a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime()
          )
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchSells();
  }, []);

  useEffect(() => {
    setFiltredSells(
      sellsByDay.filter(
        (s: any) => new Date(s[0]).getMonth() + 1 === month || s[0] === "Date"
      )
    );
  }, [month, sellsByDay]);

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const { Login } = useAuth();
  async function handleLogin(e: any) {
    e.preventDefault();
    try {
      await Login(form).then();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {!User && (
        <LoginBody>
          <Toaster position="top-center" reverseOrder={false} />
          <form onSubmit={handleLogin}>
            <LoginContainer>
              <LoginBox>
                <LoginLabel htmlFor="email">Email</LoginLabel>
                <Input
                  type={"email"}
                  placeholder="Johndoe@gmail.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </LoginBox>
              <LoginBox>
                <LoginLabel htmlFor="Password">Senha</LoginLabel>
                <Input
                  placeholder="Senha@123"
                  type={"password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </LoginBox>

              <LoginBtn type="submit">
                Login
                <LogIn style={{ height: "30px", color: "white" }} />
              </LoginBtn>

              <LoginBtn
                style={{
                  backgroundColor: "var(--cian)",
                  color: "var(--blue700)",
                  fontWeight: 600,
                }}
                type="button"
              >
                <Google style={{ height: "30px", color: "var(--blue700)" }} />{" "}
                Login com o Google
              </LoginBtn>

              <SignUpBtn
                type="button"
                onClickCapture={() => navigate("/signup")}
              >
                Criar uma conta
              </SignUpBtn>
            </LoginContainer>
          </form>
          <FlutuanteImg src={flutuante} alt="flutuante" />
          <FlutuanteImg2 src={flutuante2} alt="flutuante" />
          <FlutuanteImg3 src={flutuante3} alt="flutuante" />
        </LoginBody>
      )}

      {User && (
        <DashboardsPage>
          <DashboardContainer>
            {activeDashboard === "pizza" && productsByGroup.length > 1 && (
              <DashBoardBox>
                <Chart
                  style={{ width: "100%", height: "100%" }}
                  chartType="PieChart"
                  data={productsByGroup}
                  options={{
                    title: "Grupo de produtos",
                    is3D: true,
                    colors: [
                      "#0267B0",
                      "#5CC4BD",
                      "#013459",
                      "#48A5E8",
                      "#0285E3",
                      "#687BDD",
                    ],
                  }}
                />
              </DashBoardBox>
            )}
            {activeDashboard === "pizza" && productsByGroup.length === 1 && (
              <ErrorDiv>
                <h2>
                  <Error style={{ width: "50px", color: "#002846" }} /> Nenhum
                  dado encontrado
                </h2>
              </ErrorDiv>
            )}
            {activeDashboard === "bar" && (
              <div style={{ width: "90%", height: "90%" }}>
                <DashBoardBox>
                  <Chart
                    style={{ width: "100%", height: "100%" }}
                    chartType="BarChart"
                    data={filtredSells}
                    options={{ title: "Vendas em R$ por dia" }}
                  />
                </DashBoardBox>
              </div>
            )}
          </DashboardContainer>

          <DashboardsOptions>
            <FilterPannelH1>Filtros</FilterPannelH1>
            <SelectFilterContainer>
              <DashboardsListLabel htmlFor="dashboard">
                Dashboard
              </DashboardsListLabel>
              <DashboardsList
                onChange={(e) => {
                  setActiveDashboard(e.target.value);
                }}
              >
                <option value={"pizza"}>Grupos de produtos</option>
                <option value={"bar"}>Vendas por dia</option>
              </DashboardsList>
            </SelectFilterContainer>

            {activeDashboard === "bar" && (
              <SelectFilterContainer>
                <DashboardsListLabel htmlFor="dashboard">
                  Filtrar por mês
                </DashboardsListLabel>
                <DashboardsList
                  placeholder="Mês"
                  onChange={(e) => {
                    setMonth(Number(e.target.value));
                  }}
                >
                  <option value={month}>mês</option>
                  {sellsByDay
                    .sort(
                      (a: any, b: any) =>
                        new Date(a[0]).getMonth() - new Date(b[0]).getMonth()
                    )
                    .map((d: any, i: any, a: any) => {
                      if (
                        new Date(d[0]).getMonth() + 1 > 0 &&
                        new Date(d[0]).getMonth() + 1 < 13 &&
                        new Date(d[0]).getMonth() !==
                          new Date(a[i - 1][0]).getMonth()
                      ) {
                        return (
                          <option value={new Date(d[0]).getMonth() + 1}>
                            {new Date(d[0]).getMonth() + 1}
                          </option>
                        );
                      } else
                        <ErrorDiv>
                          <h2>
                            <Error
                              style={{ width: "50px", color: "#002846" }}
                            />
                            Nenhum dado encontrado
                          </h2>
                        </ErrorDiv>;
                    })}
                </DashboardsList>
              </SelectFilterContainer>
            )}
          </DashboardsOptions>
        </DashboardsPage>
      )}
      {User && (
        <MobileBottomBar onClick={() => setIsModalOpen(true)}>
          <Filter style={{ color: "white", height: "50px" }} />
        </MobileBottomBar>
      )}
      <FilterModal
        dashboard={activeDashboard}
        setDashboard={setActiveDashboard}
        isModalOpen={isModalOpen}
        month={month}
        sells={sellsByDay}
        setIsModalOpen={setIsModalOpen}
        setMonth={setMonth}
      />
    </>
  );
};
