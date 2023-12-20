import ArrowLeft from "../icons/arrow-left";
import Nav from "./nav";
import Title from "./title";

export default function Header() {
  const remainingActive = 2;

  return (
    <>
      <Nav>
        <ArrowLeft />
        Back
      </Nav>
      <div className="mt-5">
        <Title />
        <p className="mt-[10px] mb-[26px] text-xs leading-5 font-normal">
          {`Active ends in : ${remainingActive} days`}
        </p>
      </div>
    </>
  );
}
