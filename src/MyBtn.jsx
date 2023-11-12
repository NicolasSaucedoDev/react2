

function MyBtn({fun, color}) {
    return (
    <>
      <button onClick={()=>{fun((anterior)=>{
        return anterior+ " " +color
      })}}>
        {color}
      </button>
    </>
  )
}

export default MyBtn