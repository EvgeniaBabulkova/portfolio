import Banner from "./Banner";
import LinkButton from "./UI/LinkButton";

export default function ContactBanner() {
  return (
    <Banner subtitle="Contact" title="Let's get in touch!">
      <LinkButton link="mailto:ebabulkova@gmail.com?subject=Let's work together&body=Hi Eva,">
        ebabulkova@gmail.com
      </LinkButton>
    </Banner>
  );
}
