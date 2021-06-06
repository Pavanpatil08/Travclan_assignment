
import './App.css';
import { makeStyles  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState  } from 'react'
import axios from "axios";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import  RowData from "./RowDataView"
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Tablediv() {
  const classes = useStyles();
  const [merchantsdata, setmerchantsdata] = useState([])
  const [ togglebid , settogglebid] = useState(true)
  const [ transfer , settransfer] = useState([])
  var num = 0
  useEffect(() => {
    async function loadData() {
      const result = await axios("https://intense-tor-76305.herokuapp.com/merchants");
      setmerchantsdata(result.data);
      console.log(merchantsdata)
     
    }
    loadData();
  }, []);
  var handleToggle = ()=>{
    settogglebid(!togglebid)
  }
  let history = useHistory();
  var handledata = (param)=>{
    settransfer(param)
    history.push("/view")
  }
  let displydata = merchantsdata.map((item, index) => {
    return (
      <TableRow onClick={()=>{handledata(item)}} >
        <TableCell component="th" scope="row">
          {item.firstname} <Avatar alt="Remy Sharp" src={item.avatarUrl} />
        </TableCell>
        <TableCell align="center">{item.email}</TableCell>
        <TableCell align="center">{item.phone}</TableCell>
        <TableCell align="center"> 
        {togglebid? <Grid > max-bid {Math.max.apply(Math, item.bids.map(function(items) { return items.amount; }))}</Grid>:<Grid >min-bid{Math.min.apply(Math, item.bids.map(function(items) { return items.amount; }))}</Grid>}
        </TableCell>
      
      </TableRow>
    )
  })
  return (
    <div className="App">
      <Grid container>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">name</TableCell>
              <TableCell align="center"> email</TableCell>
              <TableCell align="center"> phone</TableCell>
              <TableCell align="center"  onClick={()=>{handleToggle()}} >bid (click to sort bid)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
         displydata
            }
          </TableBody>
        </Table>
      </Grid>
    
    </div>
  );
}

export default Tablediv;
