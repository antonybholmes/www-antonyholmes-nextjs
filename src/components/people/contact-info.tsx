import MailIcon from "../../icons/mail"
import PhoneIcon from "../../icons/phone"
import cn from "../../lib/class-names"
import BlackLink from "../link/black-link"
import BlueLink from "../link/blue-link"
import VCenterRow from "../v-center-row"

type ContactInfoProps = {
  person?: any
  showPhone?: boolean
  className?: string
}

export default function ContactInfo({
  person,
  className,
  showPhone = true,
}: ContactInfoProps) {
  return (
    <ul className={cn("flex flex-col gap-y-2 lg:gap-x-4", className)}>
      {person.frontmatter.email !== "" && (
        <li>
          <VCenterRow className="gap-2">
            <BlueLink
              href={`mailto:${person.frontmatter.email}`}
              className="flex flex-row items-center"
              ariaLabel={`Email ${person.frontmatter.email}`}
            >
              <MailIcon className="w-4" />
            </BlueLink>

            <BlueLink
              href={`mailto:${person.frontmatter.email}`}
              ariaLabel={`Email ${person.frontmatter.email}`}
            >
              {person.frontmatter.email}
            </BlueLink>
          </VCenterRow>
        </li>
      )}
      {showPhone && person.frontmatter.phone !== "" && (
        <li>
          <VCenterRow className="gap-2">
            <BlackLink
              href={`tel:${person.frontmatter.phone}`}
              className="flex flex-row items-center"
              ariaLabel={`Call ${person.frontmatter.phone}`}
            >
              <PhoneIcon className="w-4" />
            </BlackLink>

            <BlackLink
              href={`tel:${person.frontmatter.phone}`}
              ariaLabel={`Call ${person.frontmatter.phone}`}
            >
              {person.frontmatter.phone}
            </BlackLink>
          </VCenterRow>
        </li>
      )}
    </ul>
  )
}
