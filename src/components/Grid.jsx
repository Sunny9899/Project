import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import "./Grid.css";

export const Gridd= () =>{
    return (
        <div>
            
        <Grid container spacing={1}>
         <Grid item xs={3}>
             <Item className={"grid"}>A</Item>
         </Grid>
         <Grid item xs={3}>
             <Item className={"grid"}>B</Item>
         </Grid>
         <Grid item xs={3} >
             <Item className={"grid"}>C</Item>
         </Grid>
         <Grid item xs={3}>
             <Item className={"grid"}>D</Item>
         </Grid>    
         <Grid item xs={3}>
             <Item className={"grid"}>E</Item>
         </Grid>
         <Grid item xs={3}>
             <Item className={"grid"}>F</Item>
         </Grid>      
         <Grid item xs={3}>
             <Item className={"grid"}>G</Item>
         </Grid>
         <Grid item xs={3}>
             <Item className={"grid"}>H</Item>
         </Grid>                              
        </Grid>

        </div>
    );

}