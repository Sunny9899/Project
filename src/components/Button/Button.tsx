type Prop={
  Clicked:any;
  txt:string;
  param1:string;
  param2:string;
}

export const Button = (props:Prop) => {
  const Clicked=props.Clicked;
    return (
      <button
        onClick={()=>{Clicked(props.param1,props.param2)}}
      >
        {props.txt}
      </button>
    );
  };