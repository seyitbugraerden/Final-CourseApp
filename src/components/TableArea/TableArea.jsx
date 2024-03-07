import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { deleteElement } from "../Slice/dataSlice";
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
    {
      title: "Aksiyon",
      dataIndex: "Aksiyon",
      key: "Aksiyon",
      render: (text, record) => (
        <a
          onClick={() => {
            dispatch(deleteElement(record.id));
          }}
        >
          Sil
        </a>
      ),
    },
  ];
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        style={{
          marginTop: "100px",
        }}
      />
    </>
  );
}

export default TableArea;
