import Banner from "./Banner";
import Button from "./UI/Button";
import LinkIcon from "../assets/icons/arrow_outward.svg";

export default function ContactBanner() {
  return (
    <Banner subtitle="Contact" title="Let's get in touch!">
      <Button onClick={() => {}} trailingIcon={<img src={LinkIcon} />}>
        Button here
      </Button>
    </Banner>
  );
}
