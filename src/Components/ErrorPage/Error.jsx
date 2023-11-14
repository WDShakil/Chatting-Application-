import Errorimg from "../../assets/errorimg.gif";
function Error() {
  return (
    <div className="h-screen mx-auto">
      <img
        src={Errorimg}
        className="w-[50%] mx-auto  h-screen object-cover"
        alt=""
      />
    </div>
  );
}

export default Error;
