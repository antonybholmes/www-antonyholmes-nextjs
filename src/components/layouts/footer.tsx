import cn from '../../lib/class-names'
import FOOTER_LINKS from '../../../_content/menus/footer.json'
import INFO_LINKS from '../../../_content/menus/info.json'
import ArticleContainer from '../article-container'
import BaseRow from '../base-row'
import UnderlineLink from '../link/underline-link'
import getCopyright from '../../lib/copyright'

const Footer = () => (
  <footer className="text-sm text-gray-300 bg-gray-800">
    {/* <ArticleContainer className="py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-8">
        {FOOTER_LINKS.map(
          (
            linkGroup: {
              title: string
              links: { name: string; url: string }[]
            },
            linkGroupIndex: number
          ) => {
            return (
              <div key={linkGroupIndex}>
                <h2 className="font-semibold mb-4">{linkGroup.title}</h2>
                <ul>
                  {linkGroup.links.map(
                    (
                      link: { name: string; url: string },
                      linkIndex: number
                    ) => {
                      return (
                        <li key={linkIndex} className="mb-2">
                          <UnderlineLink
                            href={link.url}
                            aria={`View ${link.name}`}
                          >
                            {link.name}
                          </UnderlineLink>
                        </li>
                      )
                    }
                  )}
                </ul>
              </div>
            )
          }
        )}
      </div>
    </ArticleContainer> */}

    <ArticleContainer
      className="py-5"
      style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
    >
      <BaseRow className="text-xs">
        <ul className="flex flex-row">
          <li className={cn('inline-block')}>{getCopyright()}</li>
          {INFO_LINKS.map(
            (link: { name: string; url: string }, index: number) => (
              <li key={index} className={cn('inline-block ml-8')}>
                <UnderlineLink href={link.url} aria={`View ${link.name}`}>
                  {link.name}
                </UnderlineLink>
              </li>
            )
          )}
        </ul>
      </BaseRow>
    </ArticleContainer>
  </footer>
)

export default Footer
