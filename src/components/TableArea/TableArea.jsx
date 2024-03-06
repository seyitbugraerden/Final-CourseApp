import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";

function TableArea() {
  const dataSource = useSelector((store) => store.data.savedElement);

  const columns = [
    {
      title: "Öğrenci",
      dataIndex: "students",
      key: "name",
    },
    {
      title: "Seçilen Ders",
      dataIndex: "teachers",
      key: "age",
    },
    {
      title: "Ders Konusu",
      dataIndex: "subject",
      key: "address",
    },
    {
      title: "Tarih",
      dataIndex: "date",
      key: "address",
    },
  ];
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        style={{
          marginTop: "200px",
        }}
      />
    </>
  );
}

export default TableArea;
