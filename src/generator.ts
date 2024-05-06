import { saveAs } from "file-saver";
import {
  BorderStyle,
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
} from "docx";

export default function generate() {
  const doc = new Document({
    sections: [
      {
        children: [
          new Table({
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph("Title 1")],
                  }),
                  new TableCell({
                    children: [new Paragraph("Title 2")],
                  }),
                  new TableCell({
                    children: [new Paragraph("Title 3")],
                  }),
                  new TableCell({
                    children: [new Paragraph("Title 4")],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [],
                  }),
                  new TableCell({
                    children: [new Paragraph("Hello")],
                    borders: {
                      top: {
                        style: BorderStyle.DASH_DOT_STROKED,
                        size: 3,
                        color: "#FF0000",
                      },
                      bottom: {
                        style: BorderStyle.DOUBLE,
                        size: 3,
                        color: "#0000FF",
                      },
                      left: {
                        style: BorderStyle.DASH_DOT_STROKED,
                        size: 3,
                        color: "#00FF00",
                      },
                      right: {
                        style: BorderStyle.DASH_DOT_STROKED,
                        size: 3,
                        color: "#ff8000",
                      },
                    },
                  }),
                  new TableCell({
                    children: [],
                  }),
                  new TableCell({
                    children: [],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [],
                  }),
                  new TableCell({
                    children: [],
                  }),
                  new TableCell({
                    children: [],
                  }),
                  new TableCell({
                    children: [],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [],
                  }),
                  new TableCell({
                    children: [],
                  }),
                  new TableCell({
                    children: [],
                  }),
                  new TableCell({
                    children: [],
                  }),
                ],
              }),
            ],
          }),
        ],
      },
    ],
  });
  Packer.toBlob(doc)
    .then((blob) => {
      saveAs(blob, "My Document.docx");
    })
    .catch((error) => {
      console.error("Error generating document:", error);
    });
}
