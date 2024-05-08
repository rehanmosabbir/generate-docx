import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const ExportComponent = () => {
  return (
    <div>
      <PDFViewer width="100%" height="500px">
        <Document>
          <Page size="A4">
            <View style={styles.section}>
              <Text>Hello, World!</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default ExportComponent;
