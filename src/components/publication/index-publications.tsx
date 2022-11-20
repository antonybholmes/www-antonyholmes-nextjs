import ContentDiv from "../content-div"

//import { gsap } from "gsap"
import { useEffect, useState } from "react"
import axios from "axios"
//import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import sortPublications from "../../lib/sort-publications"
import { PUB_API_URL } from "../../pages/publications"
import Publications from "./publications"

export default function IndexPublications() {
  const [publications, setPublications] = useState<any[]>([])

  function fetchData() {
    axios
      .get(PUB_API_URL, {
        headers: {
          "Content-Encoding": "gzip",
        },
      })
      .then(res => {
        setPublications(sortPublications(res.data).slice(0, 10))
      })
      .catch(err => {
        //console.log(err)
      })
  }

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   gsap.registerPlugin(ScrollTrigger)
    // }

    // gsap.from(".publication", {
    //   opacity: 0,
    //   x: -20,
    //   stagger: 0.2,
    //   delay: 0.2,
    //   duration: 0.5,
    //   scrollTrigger: { trigger: "#publications" },
    // })

    fetchData()
  }, [])

  return (
    <ContentDiv className="my-64">
      <></>
      <div>
        <h1 className="text-center text-5xl ">Recent Publications</h1>

        <Publications publications={publications} showCount={true} />
      </div>
      <></>
    </ContentDiv>
  )
}
