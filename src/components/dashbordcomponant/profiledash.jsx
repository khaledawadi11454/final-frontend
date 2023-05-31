// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function CustomizedTables() {
//   const [data, setData] = React.useState(rows);
//   const [editIndex, setEditIndex] = React.useState(-1);
//   const [name, setName] = React.useState('');
//   const [calories, setCalories] = React.useState(0);
//   const [fat, setFat] = React.useState(0);
//   const [carbs, setCarbs] = React.useState(0);
//   const [protein, setProtein] = React.useState(0);

//   const handleEdit = (index) => {
//     const row = data[index];
//     setEditIndex(index);
//     setName(row.name);
//     setCalories(row.calories);
//     setFat(row.fat);
//     setCarbs(row.carbs);
//     setProtein(row.protein);
//   };

//   const handleSave = () => {
//     if (editIndex !== -1) {
//       const updatedRow = {
//         name,
//         calories,
//         fat,
//         carbs,
//         protein,
//       };
//       const newData = [...data];
//       newData[editIndex] = updatedRow;
//       setData(newData);
//       setEditIndex(-1);
//       setName('');
//       setCalories(0);
//       setFat(0);
//       setCarbs(0);
//       setProtein(0);
//     }
//   };

//   const handleDelete = (index) => {
//     const newData = [...data];
//     newData.splice(index, 1);
//     setData(newData);
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//             <StyledTableCell align="right">Calories</StyledTableCell>
//             <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Actions</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row, index) => (
//             <StyledTableRow key={index}>
//               {editIndex === index ? (
//                 <>
//                   <StyledTableCell component="th" scope="row">
//                     <TextField
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     <TextField
//                       type="number"
//                       value={calories}
//                       onChange={(e) => setCalories(parseFloat(e.target.value))}
//                     />
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     <TextField
//                       type="number"
//                       value={fat}
//                       onChange={(e) => setFat(parseFloat(e.target.value))}
//                     />
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     <TextField
//                       type="number"
//                       value={carbs}
//                       onChange={(e) => setCarbs(parseFloat(e.target.value))}
//                     />
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     <TextField
//                       type="number"
//                       value={protein}
//                       onChange={(e) => setProtein(parseFloat(e.target.value))}
//                     />
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     <Button variant="contained" onClick={handleSave}>
//                       Save
//                     </Button>
//                   </StyledTableCell>
//                 </>
//               ) : (
//                 <>
//                   <StyledTableCell component="th" scope="row">
//                     {row.name}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">{row.calories}</StyledTableCell>
//                   <StyledTableCell align="right">{row.fat}</StyledTableCell>
//                   <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//                   <StyledTableCell align="right">{row.protein}</StyledTableCell>
//                   <StyledTableCell align="right">
//                     <Button variant="contained" onClick={() => handleEdit(index)}>
//                       Edit
//                     </Button>
//                     <Button
//                       variant="contained"
//                       onClick={() => handleDelete(index)}
//                       color="secondary"
//                     >
//                       Delete
//                     </Button>
//                   </StyledTableCell>
//                 </>
//               )}
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// export default CustomizedTables;


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import TableSortLabel from '@mui/material/TableSortLabel';
import './profiledash.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function CustomizedTables() {
  const [data, setData] = React.useState(rows);
  const [filteredData, setFilteredData] = React.useState(data);
  const [filter, setFilter] = React.useState('');
  const [sortConfig, setSortConfig] = React.useState({ key: '', direction: '' });
  const [editIndex, setEditIndex] = React.useState(-1);
  const [title, setTitle] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [salary, setSalary] = React.useState(0);
  const [location, setLocation] = React.useState('');
  const [type, setType] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [applyNowUrl, setApplyNowUrl] = React.useState('');

  const handleEdit = (index) => {
    const row = data[index];
    setEditIndex(index);
    setTitle(row.title);
    setCompany(row.company);
    setSalary(row.salary);
    setLocation(row.location);
    setType(row.type);
    setDescription(row.description);
    setApplyNowUrl(row.applyNowUrl);
  };

  const handleSave = () => {
    if (editIndex !== -1) {
      const updatedRow = {
        title,
        company,
        salary,
        location,
        type,
        description,
        applyNowUrl,
      };
      const newData = [...data];
      newData[editIndex] = updatedRow;
      setData(newData);
      setEditIndex(-1);
      setTitle('');
      setCompany('');
      setSalary(0);
      setLocation('');
      setType('');
      setDescription('');
      setApplyNowUrl('');
    }
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
    const filtered = data.filter((row) =>
      row.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    const sorted = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setFilteredData(sorted);
  };

  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <div className="search-input">
                <SearchIcon style={{ marginRight: 4 }} />
                <TextField
                  value={filter}
                  onChange={handleFilterChange}
                  placeholder="Search"
                />
              </div>
            </StyledTableCell>
            <StyledTableCell align="right">
              <TableSortLabel
                active={sortConfig.key === 'salary'}
                direction={sortConfig.key === 'salary' ? sortConfig.direction : 'asc'}
                onClick={() => handleSort('salary')}
              >
                Salary
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="right">
              <TableSortLabel
                active={sortConfig.key === 'location'}
                direction={sortConfig.key === 'location' ? sortConfig.direction : 'asc'}
                onClick={() => handleSort('location')}
              >
                Location
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="right">
              <TableSortLabel
                active={sortConfig.key === 'type'}
                direction={sortConfig.key === 'type' ? sortConfig.direction : 'asc'}
                onClick={() => handleSort('type')}
              >
                Type
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="right">
              <TableSortLabel
                active={sortConfig.key === 'description'}
                direction={sortConfig.key === 'description' ? sortConfig.direction : 'asc'}
                onClick={() => handleSort('description')}
              >
                Description
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="right">
              <TableSortLabel
                active={sortConfig.key === 'applyNowUrl'}
                direction={sortConfig.key === 'applyNowUrl' ? sortConfig.direction : 'asc'}
                onClick={() => handleSort('applyNowUrl')}
              >
                Apply Now
              </TableSortLabel>
            </StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row, index) => (
            <StyledTableRow key={index}>
              {editIndex === index ? (
                <>
                  <StyledTableCell component="th" scope="row">
                    <TextField
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      type="number"
                      value={salary}
                      onChange={(e) => setSalary(parseFloat(e.target.value))}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      multiline
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <TextField
                      value={applyNowUrl}
                      onChange={(e) => setApplyNowUrl(e.target.value)}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button variant="contained" onClick={handleSave}>
                      Save
                    </Button>
                  </StyledTableCell>
                </>
              ) : (
                <>
                  <StyledTableCell component="th" scope="row">
                    {row.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.salary}</StyledTableCell>
                  <StyledTableCell align="right">{row.location}</StyledTableCell>
                  <StyledTableCell align="right">{row.type}</StyledTableCell>
                  <StyledTableCell align="right">{row.description}</StyledTableCell>
                  <StyledTableCell align="right">
                    <a href={row.applyNowUrl} target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </a>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button variant="contained" onClick={() => handleEdit(index)}>
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(index)}
                      color="secondary"
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const rows = [
  createData('Job 1', 50000, 'New York', 'Full-time', 'Lorem ipsum dolor sit amet', 'https://example.com/apply'),
  createData('Job 2', 60000, 'San Francisco', 'Part-time', 'Consectetur adipiscing elit', 'https://example.com/apply'),
  createData('Job 3', 45000, 'Chicago', 'Contract', 'Sed do eiusmod tempor incididunt', 'https://example.com/apply'),
  createData('Job 4', 55000, 'Los Angeles', 'Freelance', 'Ut labore et dolore magna aliqua', 'https://example.com/apply'),
  createData('Job 5', 65000, 'Seattle', 'Remote', 'Duis aute irure dolor in reprehenderit', 'https://example.com/apply'),
];

function createData(title, salary, location, type, description, applyNowUrl) {
  return { title, salary, location, type, description, applyNowUrl };
}

export default CustomizedTables;
