export const Button = ({Clicked,txt,param1,param2}) => {
    return (
      <button
        onClick={()=>{Clicked(param1,param2)}}
      >
        {txt}
      </button>
    );
  };