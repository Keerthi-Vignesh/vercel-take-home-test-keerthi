import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Keerthi Vignesh
      </h1>
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h2>
      <p className="mb-4">
        {`Total experience of 13 years in Technical and Product Support (Software, Hardware, SaaS, CPaaS application support), SCCM, and Project Management. `}
      </p>
<p className="mb-4">
        {`Currently working as a Senior Product Support Engineer L4- Supervisor at VMware by Broadcom, managing Pivotal Tracker, a VMware Tanzu observability tool. `}
      </p>
<p className="mb-4">
        {`Also taking on responsibilities as a Technical Program Manager, leading crucial meetings with senior leaders and efficiently resolving critical issues. `}
      </p>
<p className="mb-4">
        {`Responsible for handling escalations, working directly with users and Customer Success teams to solve problems, training new engineers, and providing timely feedback on their progress. `}
      </p>
<p className="mb-4">
        {`Driving process improvements, enhancing product features, and collaborating with development and product managers to deliver exceptional customer experiences. `}
      </p>
<p className="mb-4">
        {`Part of Technical Hiring and Bar Raiser teams. `}
      </p> 
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
