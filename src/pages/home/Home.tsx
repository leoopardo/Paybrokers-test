import { logRoles } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import {
  DashBoardBox,
  DashboardContainer,
  DashboardsList,
  DashboardsOptions,
  DashboardsPage,
  ErrorDiv,
  FilterPannelH1,
  Input,
  LoginBody,
  LoginContainer,
  LoginLabel,
  MobileBottomBar,
} from "./styles";
import { Chart } from "react-google-charts";
import { Toaster } from "react-hot-toast";
import { api } from "../../services/api";
import { Error } from "@styled-icons/material/Error";
import { Sell } from "../../types/Sells";
import { Filter } from "@styled-icons/feather/Filter";
import FilterModal from "./components/fiterModal/FilterModal";

export const Home = () => {
  const { User } = useAuth();
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

        setSellsByDay(arr);
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

  console.log(filtredSells);

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
              <LoginLabel htmlFor="email">Email</LoginLabel>
              <Input
                placeholder="JohnDoe@gmail.com"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <LoginLabel htmlFor="Password">Password</LoginLabel>
              <Input
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
              <button type="submit">Login</button>
            </LoginContainer>
          </form>
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
            <FilterPannelH1>Filters</FilterPannelH1>
            <DashboardsList
              onChange={(e) => {
                setActiveDashboard(e.target.value);
              }}
            >
              <option value={"pizza"}>Grupos de produtos</option>
              <option value={"bar"}>Vendas por dia</option>
            </DashboardsList>
            {activeDashboard === "bar" && (
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
                          <Error style={{ width: "50px", color: "#002846" }} />
                          Nenhum dado encontrado
                        </h2>
                      </ErrorDiv>;
                  })}
              </DashboardsList>
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
