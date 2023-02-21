import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import { Link } from "react-router-dom";
import Annual_Year_Activity from "./Annual_Year_Activity";
import ContentTemplate from "./ContentTemplate";

export default function GeneratePdf() {
  const PDF = () => {
    let element = (
      <div>
      <Annual_Year_Activity/>
      <ContentTemplate/>
      
      </div>
      
    );
    const doc = new jsPDF("p", "pt", "letter");
    doc.html(ReactDOMServer.renderToString(element), {
      callback: function (doc) {
        doc.save('Annual_Year_Activity.pdf');
      }
    });
  };

  return (
    <div >

      <h2>Annual Year Activity</h2>
      <span onClick={PDF}><Link to ="#">Annual Year Activity</Link></span>
    </div>
  );
}