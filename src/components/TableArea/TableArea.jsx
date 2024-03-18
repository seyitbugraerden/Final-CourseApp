import React from "react";
import { Button, Table } from "antd";
import { useSelector } from "react-redux";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ececea",
    fontFamily: "Roboto",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#aaaaaa",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    textAlign: "start",
    paddingVertical: 5,
  },
  cell: {
    flex: 1,
    marginRight: 20,
    fontSize: "7px",
    maxWidth: "25%",
    wordWrap: "break-word",
    overflow: "hidden",
  },
  evenRow: {
    backgroundColor: "#f0f0f0",
  },
});

function PDFTable({ dataSource, columns }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Öğrenci Kurs Atama Programı</Text>
          {/* Başlık satırı ekleme */}
          <View style={[styles.row, styles.evenRow]}>
            {columns.map((column, colIndex) => (
              <Text style={styles.cell} key={colIndex}>
                {column.title}
              </Text>
            ))}
          </View>
          {dataSource.map((data, index) => (
            <View
              style={[styles.row, index % 2 === 0 && styles.evenRow]}
              key={index}
            >
              {columns.map((column, colIndex) => (
                <Text style={styles.cell} key={colIndex}>
                  {column.dataIndex === "students" ||
                  column.dataIndex === "teachers"
                    ? data[column.dataIndex].join(" || ")
                    : data[column.dataIndex]}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

function TableArea() {
  const dataSource = useSelector((store) => store.data.savedElement);
  const columns = [
    {
      title: "Ögrenci",
      dataIndex: "students",
      key: "name",
      render: (students) => students.join(" || "),
    },
    {
      title: "Seçilen Ders",
      dataIndex: "teachers",
      key: "age",
      render: (teachers) => teachers.join(" || "),
    },
    {
      title: "Ders Konusu",
      dataIndex: "subject",
      key: "address",
    },
    {
      title: "Tarih",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Saat",
      dataIndex: "time",
      key: "time",
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
      <PDFDownloadLink
        document={<PDFTable dataSource={dataSource} columns={columns} />}
        fileName="tablo.pdf"
      >
        {({ loading }) =>
          loading ? (
            "İndiriliyor..."
          ) : (
            <Button type="primary">PDF Olarak İndir</Button>
          )
        }
      </PDFDownloadLink>
    </>
  );
}

export default TableArea;
