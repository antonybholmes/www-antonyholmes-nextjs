import BaseCol from "../base-col"

import { useState } from "react"
import IPerson from "../../interfaces/person"
import cn from "../../lib/class-names"
import BaseImage from "../base-image"

interface IProps {
  person: IPerson
}

export default function PersonHeaderImage({ person }: IProps) {
  const [hover, setHover] = useState(false)

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  let headerImage = null

  if (person.frontmatter.headerImage) {
    headerImage = `/assets/images/header/${person.frontmatter.personId}.webp`
  } else {
    if ("admin" in person.frontmatter.groups) {
      headerImage = "/assets/images/header/icg.webp"
    } else {
      headerImage = "/assets/images/header/generic.webp"
    }
  }

  if (headerImage) {
    return (
      <div
        className="z-0 grid w-full overflow-hidden rounded-2xl border"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className="h-60 lg:h-100"
          style={{
            gridArea: "1/1",
          }}
        >
          <BaseImage
            src={headerImage}
            alt="Header Image"
            className="h-full w-full"
            style={{ objectFit: "cover" }}
            size={[1024, 512]}
            loading="eager"
          />
        </div>

        {person.frontmatter.caption && (
          <BaseCol
            className="h-60 justify-end lg:h-100"
            style={{
              gridArea: "1/1",
            }}
          >
            <div
              className={cn(
                " bg-black/50 p-4 text-sm text-white backdrop-blur transition-opacity duration-500 lg:text-base",
                [hover, "opacity-100", "opacity-0"]
              )}
            >
              {person.frontmatter.caption}
            </div>
          </BaseCol>
        )}
      </div>
    )
  } else {
    return <></>
  }
}
