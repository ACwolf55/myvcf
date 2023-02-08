import React,{useState} from "react";
import FileSaver from "file-saver";


const CardTest=()=> {
 
      const [organization,setOrganization]=useState('test')
      const [firstName,setfirstName]=useState('test')
      const [ title,settitle]=useState('test')
      const [email,setemail]=useState('test')
      const [cell,setmobile]=useState('test')
      const [work,setwork]=useState('test')
      const [city,setlocation]=useState('test')
 
      const createVCard = (e)=> {
        e.preventDefault();
        var file = new Blob(
          [
            `BEGIN:VCARD
    VERSION:3.0
    ORG:${organization}
    EMAIL;type=INTERNET;type=pref:${email}
    TEL;type=MAIN:${work}
    TEL;type=CELL;type=VOICE;type=pref:${cell}
    ADR;type=WORK;type=pref:;;;${city};;;
    END:VCARD
    `
          ],
          { type: "text/vcard;charset=utf-8" }
        );
        let a = document.createElement("a");
        a.download = `${organization}.vcf`;
        a.href = URL.createObjectURL(file);
        var reader = new FileReader();
        if (navigator.userAgent.match("CriOS")) {
          reader.onloadend = e => {
            window.open(reader.result);
          };
          reader.readAsDataURL(file);
        } else if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
          reader.onload = e => {
            window.location.href = reader.result;
          };
          reader.readAsDataURL(file);
        } else {
          FileSaver.saveAs(
            file,
            `${organization}.vcf`,
            true
          );
        }
      }
  
    return (
      <>
      <a href="" onClick={createVCard}>
        <button>DOWNLAOD</button>
      </a>
      </>
    );
  
    }

export default CardTest;



//wokring vers

// import React,{useState} from "react";
// import FileSaver from "file-saver";


// class CardTest extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       organization: 'test',
//       firstName: 'test',
//       lastName: 'test',
//       title: 'test',
//       email:'test',
//       mobile:'test',
//       work: 'test',
//       location: 'test'
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(e) {
//     e.preventDefault();
//     var file = new Blob(
//       [
//         `BEGIN:VCARD
// VERSION:3.0
// ORG:${this.state.organization}
// TITLE:${this.state.title};
// EMAIL;type=INTERNET;type=pref:${this.state.email}
// TEL;type=MAIN:${this.state.work}
// TEL;type=CELL;type=VOICE;type=pref:${this.state.mobile}
// ADR;type=WORK;type=pref:;;;${this.state.location};;;
// END:VCARD
// `
//       ],
//       { type: "text/vcard;charset=utf-8" }
//     );
//     let a = document.createElement("a");
//     a.download = `${this.state.organization}.vcf`;
//     a.href = URL.createObjectURL(file);
//     var reader = new FileReader();
//     if (navigator.userAgent.match("CriOS")) {
//       reader.onloadend = e => {
//         window.open(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else if (navigator.userAgent.match(/iPad|iPhone|Android/i)) {
//       reader.onload = e => {
//         window.location.href = reader.result;
//       };
//       reader.readAsDataURL(file);
//     } else {
//       FileSaver.saveAs(
//         file,
//         `${this.state.organization}.vcf`,
//         true
//       );
//     }
//   }
//   render() {
//     return (
//       <a href="" onClick={this.handleClick}>
//         <button>DOWNLAOD</button>
//       </a>
//     );
//   }
// }

// export default CardTest;

