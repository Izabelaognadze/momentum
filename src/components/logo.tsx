import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex gap-1 items-center">
      <h1 className="FredokaOne text-[31px] capitalize text-[#8338ec]">
        momentum
      </h1>
      <img src="./src/assets/logo-clock.svg" alt="clock for logo" />
    </Link>
  );
}
