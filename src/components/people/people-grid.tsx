import cn from "../../lib/class-names"
//import ContactInfo from "./contactinfo"
import IPerson from "../../interfaces/person"
import PersonCard from "./person-card"

interface PeopleGridProps {
  people: IPerson[]
  photoMode?: string
  showUrl?: boolean
  showPhone?: boolean
  headingColor?: string
  context?: string
  gridBg?: string
  outline?: boolean
  showLetters?: boolean
  decoding?: "sync" | "async" | "auto"
  loading?: "lazy" | "eager"
  className?: string
}

export default function PeopleGrid({
  people,
  photoMode,
  showUrl = true,
  showLetters,
  showPhone,
  context,
  decoding,
  loading,
  className,
}: PeopleGridProps) {
  const ret: any[] = []

  people.map((person: any, index: number) => {
    ret.push(
      <li key={`person-${index}`}>
        <PersonCard
          person={person}
          context={context}
          showUrl={showUrl}
          photoMode={photoMode}
          showLetters={showLetters}
          showPhone={showPhone}
          decoding={decoding}
          loading={loading}
        />
      </li>
    )
  })

  return (
    // <Card showCard={false}>

    <ul
      className={cn(
        `grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5`,
        className
      )}
    >
      {ret}
    </ul>
    // </Card>
  )
}
