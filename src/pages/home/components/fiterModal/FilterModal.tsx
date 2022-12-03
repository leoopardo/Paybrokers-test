import React, { Dispatch, SetStateAction } from "react";
import {
  ConfirmModalBtn,
  DashboardsListLabel,
  DashboardsListSelect,
  FilterModaBox,
  FilterModalContainer,
} from "./styles";
import { Close } from "@styled-icons/ionicons-outline/Close";

interface IFilterModal {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  dashboard: string;
  setDashboard: Dispatch<SetStateAction<string>>;
  month: number;
  sells: String[][];
  setMonth: Dispatch<SetStateAction<number>>;
}

export const FilterModal = (props: IFilterModal) => {
  return (
    <FilterModalContainer
      style={{ display: props.isModalOpen ? "flex" : "none" }}
    >
      <FilterModaBox>
        <DashboardsListLabel htmlFor="dashboard">Dashboard</DashboardsListLabel>
        <DashboardsListSelect
          id="dashboard"
          onChange={(e) => props.setDashboard(e.target.value)}
        >
          <option value={"pizza"}>Grupos de produtos</option>
          <option value={"bar"}>Vendas por dia</option>
        </DashboardsListSelect>

        {props.dashboard === "bar" && (
          <>
            <DashboardsListLabel htmlFor="dashboard">
              Filtrar por mês
            </DashboardsListLabel>
            <DashboardsListSelect
              onChange={(e) => props.setMonth(Number(e.target.value))}
            >
              <option value={props.month}>mês</option>
              {props.sells
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
                  }
                  return <></>;
                })}
            </DashboardsListSelect>
          </>
        )}
      </FilterModaBox>

      <ConfirmModalBtn onClick={() => props.setIsModalOpen(false)}>
        <Close style={{ height: "50px" }} />
      </ConfirmModalBtn>
    </FilterModalContainer>
  );
};

export default FilterModal;
