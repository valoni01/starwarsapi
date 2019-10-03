import React from "react";
import { MDBDataTable } from "mdbreact";

function TableView(props) {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 100
      },
      {
        label: "height",
        field: "height",
        sort: "asc",
        width: 100
      },
      {
        label: "gender",
        field: "gender",
        sort: "asc",
        width: 100
      }
    ],
    rows: []
  };

  for (let i = 0; i < props.character.length; i++) {
    data.rows.push({
      name: props.character[i].name,
      height: props.character[i].height,
      gender:
        props.character[i].gender === "female"
          ? "F"
          : props.character[i].gender === "male"
          ? "M"
          : props.character[i].gender
    });
  }
  //   console.log(data);
  //   const sortTable = e => {
  //     let newData = [];
  //     for (let i = 0; i < data.rows.length; i++) {
  //       if (data.rows[i].gender === e.target.value) {
  //         newData.push(data.rows[i]);
  //         console.log(newData);
  //       }
  //     }
  //     data.rows = [];
  //     data.rows.push(newData);
  //   };

  return (
    <div className="container">
      {/* <select onChange={sortTable} id="inputState" className="form-control">
        <option value="M">M</option>
        <option value="F">F</option>
      </select> */}
      <MDBDataTable
        striped
        responsive
        barReverse
        bordered
        hover
        data={data}
        small
        searching={true}
      />
    </div>
  );
}

//   return (
//     <div className="container">
//       <table
//         id="dtBasicExample"
//         className="table table-striped table-bordered"
//         cellSpacing="0"
//         width="100%"
//       >
//         <thead>
//           <tr>
//             <th className="th-sm">Name</th>
//             <th className="th-sm">Height</th>
//             <th className="th-sm">Gender</th>
//           </tr>
//         </thead>
//         <TableRow character={props.character} />
//       </table>
//     </div>
//   );
// function TableRow(props) {
//   let ourProps = props.character;
//   return ourProps.map((data, index) => (
//     <tbody>
//       <tr key={index}>
//         <td>{data.name}</td>
//         <td>{data.height}</td>
//         <td>{data.gender}</td>
//       </tr>
//     </tbody>
//   ));
// }

// function creatTableData(props){
//     let row=[];
//     for(let i=0;i<props.character;i++){
//         row.push({
//             name:props.character.name,
//             height:props.character.height,
//             gender:props.character.gender
//         })
//     }

//     return (
//         <MDBDataTable
//           striped
//           bordered
//           hover
//           data={data}
//         />
//       )
// }

export default TableView;
