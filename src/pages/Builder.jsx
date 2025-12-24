
import { useState, useRef } from "react";
import ContactForm from "../compoents/builder/ContactForm";
import StatementForm from "../compoents/builder/StatementForm";
import ExperienceForm from "../compoents/builder/ExperienceForm";
import EducationForm from "../compoents/builder/EducationForm";
import SkillsForm from "../compoents/builder/SkillsForm";
import Preview from "../compoents/builder/Preview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Builder(){
    const previewRef = useRef();
    const handleDownload = async () => {
        const element = previewRef.current;

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height*pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("cv.pdf");
    }
    const initialCv = {
        contact:{
            fullName: "",
            phone: "",
            email: "",
            linkedIn: "",
            github: "",
        },

        statement: "",

        experience: [
            {
                jobTitle: "",
                company: "",
                startDate: "",
                endDate: "",
                achievements: "",
            },
        ],

        education: [
            {
                qualification: "",
                institution: "",
                gradYear: "",
            },
        ],

        skills:{
            technical:[""],
            soft: [""],
        },
    }

    const [cv, setCv] = useState(initialCv);

    return(
        <div className="builder">
            <div className=" builder-form">
                <ContactForm cv={cv} setCv={setCv}/>
                <StatementForm cv={cv} setCv={setCv}/>
                <ExperienceForm cv={cv} setCv={setCv}/>
                <EducationForm cv={cv} setCv={setCv}/>
                <SkillsForm cv={cv} setCv={setCv}/>
            </div>
            <div ref = {previewRef} className="builder-preview">
                <Preview cv={cv}/>
            </div>
            <button onClick={handleDownload}>Download PDF</button>
        </div>
    );
}

export default Builder;