import { TextField, Button, Grid } from "@mui/material";
import { useState } from "react";

function App() {
  const [amount,setAmount]=useState('');
  const [rate,setRate]=useState('');
  const [principle,setPrinciple]=useState('');
  const [result,setResult]=useState('See here....');

  const handleClick=()=>{
    var r=amount*rate*principle/100;
     setResult(r);
     
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
      <div style={{ padding: 10, margin: 10, width: 500, height: 'auto', background: 'pink' }}>
        <Grid container spacing={2} >
          <Grid item xs={12} style={{ textAlign:'center',fontSize: 20, fontWeight: 'bold' }}>
            Simple Interest Calculator
          </Grid>
          <Grid item xs={12} >
            <TextField onChange={(event)=>setAmount(event.target.value)} fullWidth label="Amount" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField onChange={(event)=>setRate(event.target.value)} fullWidth label="Rate" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField onChange={(event)=>setPrinciple(event.target.value)} fullWidth label="Principle" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
          <Button fullWidth  onClick={handleClick} variant="contained">Calculate</Button>
          </Grid>
          <Grid item xs={12} style={{ textAlign:'center',fontSize: 20, fontWeight: 'bold' }}>
            {result}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
