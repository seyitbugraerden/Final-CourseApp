import React, { useRef } from "react";
import { PDFViewer, PDFDownloadLink, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

function PDFTable({ dataSource, columns }) {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4"
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    header: {
      fontSize: 20,
      marginBottom: 10
    },
    row: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#aaaaaa",
      alignItems: "center",
      height: 24,
      textAlign: "center"
    },
    cell: {
      flexGrow: 1,
      fontSize: 12
    }
  });

  return (
    <PDFViewer style={{ width: "100%", height: "500px" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>Tablo</Text>
            <View style={styles.row}>
              {columns.map((column) => (
                <Text style={styles.cell} key={column.key}>{column.title}</Text>
              ))}
            </View>
            {dataSource.map((data) => (
              <View style={styles.row} key={data.key}>
                {columns.map((column) => (
                  <Text style={styles.cell} key={column.key}>{data[column.dataIndex]}</Text>
                ))}
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default PDFTable;
