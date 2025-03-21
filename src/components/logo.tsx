import clockIcon from "../assets/logo-clock.svg";
export function Logo() {
  return (
    <div className="flex gap-1 items-center">
      <h1 className="FredokaOne text-[31px] capitalize text-[#8338ec]">
        momentum
      </h1>
      <img src={clockIcon} alt="clock for logo" />
    </div>
  );
}
