import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const generateDocx = (invoiceData: {
  versionNo?: number;
  createdBy?: string;
  createdOn?: string;
  customerName: string;
  customerAddress?: string;
  contactName?: string;
  contactNumber?: string;
  contactMobile?: string;
  contactEmail?: string;
  projectId?: string;
  eutReportInfo?: {
    productNameEut: string;
    descriptionOfProduct: null;
    modelNumber: null;
    variantModelNumbers: null;
    serialNumber: null;
    partNumber: null;
    powerRating: null;
    highestInternalRadiatorFrequency: null;
    highestIntentionalRadiatorFrequency: null;
    dimensions: null;
    weight: null; // Add more invoice details here
    availablePortsToTest: null;
    testModes: null;
    eutFacesToTest: null;
    softwareVersion: null;
    hardwareVersion: null;
    fccId: null;
    icId: null;
    manufacturerName: null;
    manufacturerAddress: null;
    isRadio: null;
    radioModules: never[];
  }[];
}) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun("Customer Name: "),
              new TextRun({ text: invoiceData.customerName, bold: true }),
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "invoice.docx");
  });
};

const InvoiceExportButtons = () => {
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
  return (
    <div>
      <button onClick={() => generateDocx(invoiceData)}>Export as DOCX</button>
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default InvoiceExportButtons;
