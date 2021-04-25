import * as React from "react"

import TemplateWrapper from "../layouts/index"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <TemplateWrapper>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </TemplateWrapper>
)

export default NotFoundPage
