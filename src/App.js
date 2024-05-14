import './App.css';
import { Grid, Typography, Card } from '@mui/material';
import Divider from '@mui/material/Divider';
function App() {

  const Student = [
    {
      name: "Sayeed",
      dept: "IT",
      fees: 40000,
      collegeId: 2
    },
    {
      name: "Rohit",
      dept: "COM",
      fees: 90000,
      collegeId: 1
    },
    {
      name: "Harsh",
      dept: "SUB",
      fees: 38000,
      collegeId: 3
    },
    {
      name: "Vipin",
      dept: "SUB",
      fees: 15000,
      collegeId: 2
    },
    {
      name: "Darshan",
      dept: "SUB",
      fees: 10000,
      collegeId: 1
    },
  ]

  const dept = [
    {
      name: "IT",
      teachers: ['x', 'y', 'z']
    },
    {
      name: "SUB",
      teachers: ['b', 'a', 'e']
    },
    {
      name: "COM",
      teachers: ['tg', 'g', 'nb']
    }
  ]

  const college = [
    {
      id: 1,
      name: "XYZJD"
    },
    {
      id: 2,
      name: "TEST"
    },
    {
      id: 3,
      name: "CSVV"
    }

  ]

  const calculateTotalFees = (college, students) => {
    return students.reduce((total, student) => {
      if (student.collegeId === college.id) {
        return total + student.fees;
      }
      return total;
    }, 0);
  };

  const findUniqueTeachers = (college, students, departments) => {
    const collegeDept = students.find(student => student.collegeId === college.id)?.dept;
    if (!collegeDept) return [];
    const department = departments.find(dept => dept.name === collegeDept);
    return department ? department.teachers : [];
  };

  const NewCollegeData = () => {
    const transformedData = college.map(college => {
      const totalFees = calculateTotalFees(college, Student);
      const uniqueTeachers = findUniqueTeachers(college, Student, dept);
      return {
        ...college,
        total_fees: totalFees,
        teachers: uniqueTeachers
      };
    });
    return transformedData;
  };

  const transformedColleges = NewCollegeData();

  return (
    <Grid container justifyContent="center" sx={{ marginTop: "10%" }}>
      <Card sx={{ minWidth: 250, padding: "15px" }} >
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: "center", marginBottom: "5px" }}>College Data</Typography>
        {transformedColleges.map((college) => (
          <Grid key={college.id} item xs={12} sx={{ marginLeft: "15px" }}>
            <Divider />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
              College ID: {college.id}
            </Typography>
            <Typography sx={{ fontWeight: 'bold', padding: "5px" }} gutterBottom>
              College name: {college.name}
            </Typography>
            <Typography gutterBottom sx={{ fontWeight: 'bold', padding: "5px" }}>
              Total Fees: {college.total_fees}
            </Typography>
            <Typography gutterBottom sx={{ fontWeight: 'bold', padding: "5px" }}>
              Teachers: {college.teachers.join(', ')}
            </Typography>
          </Grid>
        ))}
      </Card>
    </Grid>
  );
}

export default App;
