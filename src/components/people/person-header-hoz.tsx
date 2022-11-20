import IClassProps from "../../interfaces/class-props"
import ThreeQuarterLayout from "../../layouts/three-quarter-layout"
import cn from "../../lib/class-names"
import getContextName from "../../lib/context-name"
import getPersonName from "../../lib/person-name"
import BaseImage from "../base-image"
import BaseRow from "../base-row"
import VCenterCol from "../v-center-col"

interface IPersonHeaderProps extends IClassProps {
  person: any
  showImage?: boolean
}

export default function PersonHeaderHoz({
  person,
  showImage = true,
  className,
}: IPersonHeaderProps) {
  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       cardEl.current,
  //       0,
  //       {
  //         x: "4rem",
  //       },
  //       0
  //     )
  //     .to(
  //       [cardEl.current],
  //       0,
  //       {
  //         opacity: 0,
  //       },
  //       0
  //     )
  //     .to(
  //       cardEl.current,
  //       0.5,
  //       {
  //         x: 0,
  //         ease: "power3.inOut",
  //       },
  //       1.1
  //     )
  //     .to(
  //       cardEl.current,
  //       1,
  //       {
  //         opacity: 1,
  //         ease: "power3.inOut",
  //       },
  //       1.2
  //     )
  // }, [])

  // return (
  //   <Row isVCentered={true} className="mb-16" style={{ style }}>
  //     {showImage && (
  //       <div className="md:pr-8 mb-4" ref={picEl}>
  //         <HeadShot data={data} />
  //       </div>
  //     )}
  //     <div>
  //       <div ref={cardEl} className="text-center md:text-left">
  //         <h2 className="font-medium">{`${person.frontmatter.name}${
  //           person.frontmatter.postNominalLetters !== ""
  //             ? `, ${person.frontmatter.postNominalLetters}`
  //             : ""
  //         }`}</h2>
  //         <div className="text-xl">
  //           {useContextName("people", person.titleMap)}
  //         </div>
  //       </div>
  //     </div>
  //   </Row>
  // )

  const title = getContextName(person.titleMap).split(";")[0]

  const titles = person.frontmatter.titles.filter(
    (t: [string, string]) => t[0] !== ""
  )

  const img = person.frontmatter.headshot ? (
    <BaseImage
      src={`/assets/images/people/${person.frontmatter.personId}.webp`}
      className="w-56 overflow-hidden rounded-full bg-white lg:w-full"
      size={[640, 640]}
      alt={person.frontmatter.name}
    />
  ) : (
    <img
      src="/assets/svg/generic-person.svg"
      className="w-56 overflow-hidden rounded-full bg-white lg:w-full"
      width={640}
      height={640}
      alt={person.frontmatter.name}
    />
  )

  return (
    <>
      <ThreeQuarterLayout
        className={cn("gap-y-16 lg:gap-x-8", className)}
        autoHide={false}
        breakPoint="lg:grid-cols-4"
        isRight={false}
      >
        <VCenterCol className="h-full items-center gap-y-8 lg:items-start">
          <div>
            <h1 className="text-center text-3xl lg:text-left lg:text-4xl">
              {getPersonName(person)}
            </h1>

            <h2 className="text-center text-base lg:text-left  lg:text-xl">
              {title}
            </h2>
          </div>
        </VCenterCol>

        <>
          {showImage && (
            <BaseRow className="justify-center 2xl:justify-end">{img}</BaseRow>
          )}
        </>
      </ThreeQuarterLayout>

      {/* <div className="mt-8 grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8">
        <div className="bg-white p-8">
          {titles.length > 0 && (
            <>
              <ul className="flex flex-col gap-y-2 ">
                {titles
                  .sort((a: [string, string], b: [string, string]) =>
                    a[0].localeCompare(b[0])
                  )
                  .map((title: string[], index: number) => {
                    return (
                      <li key={index} className="grid grid-cols-1">
                        <p className="text-xs text-gray-600">{title[0]}</p>
                        <p className="text col-span-3">{title[1]}</p>
                      </li>
                    )
                  })}
              </ul>
            </>
          )}
        </div>

        <div className="bg-white p-8">
          <ContactInfo person={person} />

          {person.frontmatter.profile && (
            <BlueIndexLink
              href={person.frontmatter.profile}
              className="mt-8  text-sm"
              ariaLabel="Columbia Profile"
              underline={true}
            >
              Columbia Profile
            </BlueIndexLink>
          )}
        </div>
      </div> */}
    </>
  )
}
