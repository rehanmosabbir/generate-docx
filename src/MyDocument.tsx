import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
const invoiceData = {
  versionNo: 0,
  createdBy: "Anayat Rabbi",
  createdOn: "2024-05-08T09:45:40.635768Z",
  customerName: "Astha IT",
  customerAddress: "",
  contactName: "Shafayet Maruf",
  contactNumber: "",
  contactMobile: "",
  contactEmail: "ms.maruf@asthait.com",
  projectId: "cbeb8566-e075-4e0f-a97b-ea699d2e0bf0",
  eutReportInfo: [
    {
      productNameEut: "demo description",
      descriptionOfProduct: null,
      modelNumber: null,
      variantModelNumbers: null,
      serialNumber: null,
      partNumber: null,
      powerRating: null,
      highestInternalRadiatorFrequency: null,
      highestIntentionalRadiatorFrequency: null,
      dimensions: null,
      weight: null,
      availablePortsToTest: null,
      testModes: null,
      eutFacesToTest: null,
      softwareVersion: null,
      hardwareVersion: null,
      fccId: null,
      icId: null,
      manufacturerName: null,
      manufacturerAddress: null,
      isRadio: null,
      radioModules: [],
    },
  ],
};
// Define the PDF document component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{invoiceData.contactName}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
